import React, { useState } from 'react'
// import { Auth } from './Styled'
import Link from "next/link"
import { details } from 'utilities/details'
import { Auth } from './Login';
// import { signUp } from './services/Services'

const SignUp = () => {
  const [name, setName]= useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");

  const handleForm = ()=>{
    
  }

  return (
    <Auth>
            <h3>Sign Up</h3>
            <p>Sign up and start making the most of {details.name}.</p>

            <form action="">
                <input 
                type="text" 
                value={name} 
                placeholder='your name'
                onChange={(e)=> setName(e.target.value)}
                />

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
                <div className="submit" onClick={handleForm}>Sign Up</div>
                <p>
                    I have an account already, <Link href="/login">
                    Sign In</Link>
                </p>
            </form>
    </Auth>
  )
}

export default SignUp