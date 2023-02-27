import React, { useState } from 'react'
// import { Auth } from './Styled'
import Link from "next/link"
import { details } from 'utilities/details'
import { Auth } from './Login';
import { signUp } from './services/Services'

const SignUp = () => {
  const [firstName, setFirstName]= useState("");
  const [lastName, setLastName]= useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("")

  const handleForm = ()=>{
    signUp(firstName, lastName, email, password, phoneNumber)
  }

  return (
    <Auth>
            <h3>Sign Up</h3>
            <p>Sign up and start making the most of {details.name}.</p>

            <form action="">
                <input 
                type="text" 
                value={firstName} 
                placeholder='your first name'
                onChange={(e)=> setFirstName(e.target.value)}
                />

                <input 
                type="text" 
                value={lastName} 
                placeholder='your last name'
                onChange={(e)=> setLastName(e.target.value)}
                />

                <input 
                type="email" 
                placeholder='youremail@email.com'
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                />

                <input 
                type="tel" 
                placeholder='your phone number'
                value={phoneNumber}
                onChange={(e)=> setPhoneNumber(e.target.value)}
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