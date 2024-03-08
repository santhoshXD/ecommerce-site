import React, { useState } from 'react'
import styled from 'styled-components'
import Header from './Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapMarkedAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import Footer from './Footer'


const Wrapper = styled.div`
width: 100%;
height: 100vh;
`

const ContactContent = styled.div`
width: 100%;
height: 90%;


.about-title{
  text-align: center;
}

.about-form-div{
  display: flex;
  flex-wrap: wrap;
  height: 80%;
  background: linear-gradient(to right,#f3f1f6 60%, white 40%);

  @media screen and (max-width: 768px){
    display: flex;
    justify-content: center;
      }


  .get-in-touch{
    
    flex: 1 0 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media screen and (max-width: 768px){
   

     }
    
  }

  .about-form{
   
    flex: 1 0 1;
    display: flex;
    align-items: center;
    justify-content: flex-start;


    .names{
      display: flex;
      gap: 10px;

      @media screen and (max-width: 768px){
        display: flex;
        flex-direction: column;
        
      }
    }

    form{
       display: flex;
       flex-wrap: wrap;
       flex-direction: column;
       gap: 10px;

      input{
        width: 15rem;
        height: 2.5rem;
        border: 2px solid lightgrey;
        outline: none;

        &:focus{
          border: 3px solid grey;
        }

        @media screen and (max-width: 768px){
    width: 20rem;

  }

        
      }

      textarea{
        border: 2px solid lightgrey;
        outline: none;

        &:focus{
          border: 3px solid grey;
        }
      }

      button{
        width: 5rem;
        background: black;
        color: white;
        border: none;
        
      }
    }

    
  }
}

`


const StyledHr = styled.hr`
border: 1px solid black;
width: 10%;

`

const TamilNaduMap = styled.div`
width: 100%;
height: 70vh;

`


function Contact() {

  const [formData,setFormData] = useState({
    firstname :'',
    lastname:'',
    email:'',
    message:''
  })

  const handleOnChange = (e) =>{
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,[name]: value
    }))

  }

  const handleSubmitForm = (e) =>{
    e.preventDefault()
    console.log(formData)
    alert('Your message has been sent')
    setFormData({
      firstname :'',
      lastname:'',
      email:'',
      message:''
    })
  }


  return (
    <Wrapper className='container-fluid'>
      <Header />
      <ContactContent>

        <div className="about-title">
          <h3>Contact</h3>
          <StyledHr />
          <p  >Have a question or need assistance? We're here to help! Feel free to reach out to us through any of the following channels: </p>
        </div>

        <div className="about-form-div">
          <div className ="get-in-touch">
            <h2>Get in Touch</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut id leo tempor, congue justo at, lobortis orci.</p>
            <p><FontAwesomeIcon icon={faMapMarkedAlt} /> 123 Fifth Avenue, New York, NY 10160</p>
            <p><FontAwesomeIcon icon={faEnvelope} /> <a href="mailto:contact@info.com">contact@info.com</a></p>
            <p><FontAwesomeIcon icon={faPhone} /> 9-334-7565-9787</p>
          </div>
          <div className="about-form">
             <form onSubmit={handleSubmitForm} >
              <div className="names">
              <input type="text" name='firstname' placeholder='firstname' required value={formData.firstname} onChange={handleOnChange}   autoComplete="off"/>
              <input type="text" name='lastname' placeholder='lastname' required  value={formData.lastname} onChange={handleOnChange}  autoComplete="off"/>
              </div>
              <input type="email" name='email' placeholder='email' required value={formData.email} onChange={handleOnChange}  autoComplete="off"/>
              <textarea name='message' placeholder='Message here...' value={formData.message} onChange={handleOnChange}  autoComplete="off"/>
              <button type='submit' >Send</button>
             </form>

          </div>
        </div>


      </ContactContent>
      

      <TamilNaduMap>

    
    </TamilNaduMap>

    <Footer />
    
    
    </Wrapper>
  )
}

export default Contact
