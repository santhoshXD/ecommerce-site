import { faEnvelope,faLock, faSignIn } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'



const Wrapper = styled.div`
height: 100vh;
width: 100%;
display: flex;
`

const ShoppingImage = styled.div`
height: 100%;
width: 50%;

img{
    width: 100%;
    height: 100%;
}

@media screen and (max-width: 768px){
display: none;
}
`

const LoginForm = styled.div`
height: 100%;
width: 50%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 1rem;



.input-login{
    width: 40%;
    height: 7%;
    border: 2px solid #1d71b9;
    color: #1d71b9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 1rem;
    
    
    input{
        border: none;
        outline: none;
        color: #1d71b9;
        width: 100%;
        height: 100%;
        padding-left: 1rem;
        background: transparent;
    }
}


.forgetpassword{

    a{
        color: #1d71b9;

        &:hover{
            text-decoration: none;
        }
    }
}

.button-login{
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 15%;
    height: 5%;
    background: #1d71b9;
    cursor: pointer;
    color: white;
    font-size: 1.1rem;

    
    button{
        background: none;
        border: none;
        outline: none;
        color: white;
        font-weight: 400;
        width: 100%;
        height: 100%;
    }
}

@media screen and (max-width: 768px){
height: 100%;
width: 100%;
background: linear-gradient(to right, #1d71b9 0%, #e5e5e5 50%, white 50%, white 100%);
 

.input-login{
width: 80%;
}

.button-login{
    width:50%;
}
 
}

@media screen and (max-width: 300px){
text-align: center;
 
}
`


export default function LoginPage() {
    return (
        <Wrapper>

            <ShoppingImage>
                <img src="LoginImage.jpg" alt="" />

            </ShoppingImage>

            <LoginForm>
                <h3>Welcome to Tshirt Classic!</h3>
                <p>Discover Your Style, Shop with Smiles!</p>


                <div className="input-login">
                    <FontAwesomeIcon icon={faEnvelope}/>
                    <input type="text"  placeholder='username' />
                </div>

                
                <div className="input-login">
                    <FontAwesomeIcon icon={faLock}/>
                    <input type="password"  placeholder='password' />
                </div>

                <div className="forgetpassword">
                    <a href='#'>Forget Password?</a>
                </div>

                <div className="button-login">
                      <button>Submit</button>
                      <FontAwesomeIcon style={{paddingRight:'1rem'}}  icon={faSignIn}/>
                </div>

            </LoginForm>
        </Wrapper>
    )
}
