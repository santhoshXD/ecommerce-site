import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import data from '../JSON/header.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faCartShopping, faClose, faSearch } from '@fortawesome/free-solid-svg-icons'
import tshirts from '../Brand/Tshirts.webp'
import { Link } from 'react-router-dom'

const { menu1, menu2,mobilemenu1 } = data

const StyLedLink = styled(Link)`
color: black;
text-decoration: none;
cursor: pointer;
        display: flex;
        align-items: center;
        transition: all 0.3s ease;
        position: relative;

        &:hover {
            color: grey;
        }

        &:hover::after {
            content: '';
            position: absolute;
            bottom: -26px; 
            width: 100%;
            height: 2px;
            background-color: grey;
            transition: width 0.3s ease; 
        }
        
        &:after {
            content: '';
            position: absolute;
            bottom: -26px; 
            width: 0;
            height: 2px;
            background-color: grey;
            transition: width 0.3s ease; 
        }

        @media screen and (max-width:1285px){
            display: none;
        }


&:hover{
    text-decoration: none;
    color: grey;
    transition: all 0.3s ease;
}

&.active-link{
    color: grey;
    border: 2px solid grey;
}


`

const Wrapper = styled.div`
height: 10vh;
width: 100%;
display: flex;
justify-content: space-between;
text-transform: uppercase;
position: relative;
/* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2); */




.menu1{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;


}



    
    
    p{
       

    }


    .menu-icon{
       opacity: 1;
      transition: transform 0.5s ease, opacity 0.5s ease;

        @media screen and (min-width:1285px){
            display: none;
        }
    }
    .menu-icon.close {
     transform: rotate(90deg); 
     opacity: 0.5;

  }



.menu2{
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
  


    .search-icon{
         cursor: pointer;
         
    }

    .cart-icon{
        cursor: pointer;
    }

    button{
        border: none;
        outline: none;
        background: none;
        

        &:hover {
            color: grey;
            transition: all 0.3s ease;
        }

        @media screen and (max-width:831px){
            display: none;
        }

       
    }
}

.brand{
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    cursor: pointer;

    img{
        width: 100px;
        height: auto;
    }

}




`



const MobileMenu = styled.div`
   width: 80%;
  height: 90vh;
  position: absolute;
  top: 10vh;
  left: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
  transition: all 0.3s ease;
  z-index: 999;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};


        
`

const StyLedLinkMobile = styled(Link)`
height: 3rem;
        background: pink;
        border-bottom: 1px solid orange;
        display: flex;
        align-items: center;
        padding-left: 1rem;


        cursor: pointer;

        &:hover{
            color: white;
            background: red;
            transition: all 0.3s ease;
        }


  .close{
    display: flex;

  }

   @media screen and (min-width:1285px){
            display: none;
        }

`

export default function Header() {

    const [isOpen, setIsOpen] = useState(false)
    
    const handleMenuOpen = () =>{
        setIsOpen(!isOpen)
    }
    
    const [isActive, setIsActive] = useState(null);

    const handleActiveLink = (index) => {
        setIsActive(index);
        
    };

  return (
    <Wrapper className='container-fluid'>
       <div className="menu1">
        <FontAwesomeIcon className={`menu-icon ${isOpen ? 'close' : ''}`} onClick={handleMenuOpen} icon={isOpen ? faClose : faBars}/>
             {
                menu1.map((items,index) =>(
                    <StyLedLink key={index} to={items.link} className={index === isActive ? 'active-link' : ''}
                    onClick={() => handleActiveLink(index)} >{items.items}</StyLedLink>
                ))
             }
       </div>

       <div className="brand">
           <img src='logo.png' alt="t-shirt" />
       </div>

       <div className="menu2">
       {
                menu2.map((items,index) =>(
                   
                    <FontAwesomeIcon  key={index} className={items.id === 1 ? 'search-icon' : 'cart-icon'} icon={items.id === 1 ? faSearch : faCartShopping} />
                       
                ))
             }
             <button>LOG IN</button>

       </div>

{ isOpen && 

      <MobileMenu isOpen={isOpen}>
        

           

             <div className="mobile-menu-items">
             {
                mobilemenu1.map((items,index) =>(
                    <StyLedLinkMobile key={index} to={items.link}>{items.items}</StyLedLinkMobile>
                ))
             }
             </div>

      </MobileMenu>
}
        
    </Wrapper>
  )
}
