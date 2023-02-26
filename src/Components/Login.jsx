import React, { useState } from 'react'
// import { Auth } from './Styled'
import Link from "next/link"
import styled from 'styled-components';
// import { signIn } from './services/Services'

const SignIn = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const handleForm = ()=>{
    // signIn(email, password);
    console.log(email)
  }
  return (
    <Auth>
            <h3>Sign In</h3>
            <p>Ready to get started? Sign in here.</p>

            <form action="">
            {/* <input 
                type="text" 
                value={name} 
                placeholder='your name'
                onChange={(e)=> setName(e.target.value)}
                /> */}

                <input 
                type="email" 
                placeholder='youremail@email.com'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />

                <input 
                type="password" 
                placeholder='yourpassword'
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                <div 
                className="submit"
                onClick={()=> handleForm()}
                >Sign In</div>
                <p>
                    I don't have an account yet, <Link href="/sign-up">
                    Sign Up</Link>
                </p>
            </form>
    </Auth>
  )
}

export const Auth = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  p{
    text-align: center;
  }
  h3 {
    font-size: 30px;
  }
  form {
    display: flex;
    align-items: center;
    gap: 20px;
    flex-direction: column;
    width: 50%;
    padding: 20px;
    @media (max-width: 700px){
      width: 100%;
    }
  }
  input {
    padding: 13px 20px;
    width: 80%;
    border-radius: 10px;
    border: 1px solid rgb(100, 100, 100);
    @media (max-width: 700px){
      width: 100%;
    }
  }
  .submit {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 80%;
    background-color: #b18641;
    padding: 15px;
    color: white;
    border-radius: 13px;
    cursor: pointer;
    @media (max-width: 700px){
      width: 100%;
    }
  }
`;

export default SignIn