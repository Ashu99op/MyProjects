import React, { useState } from 'react'
import {auth} from "../firebase"


const SignupScreen = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("")

    const register = (e)=>{
        e.preventDefault();

        auth.createUserWithEmailAndPassword(
            email,
            password
        ).then((authUser)=>{
            console.log(authUser)
        }).catch(err=>{
            alert(err.message);
        })
    }

    const signIn = (e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(
            email,
            password
        ).then((authUser)=>{
            console.log(authUser);
        }).catch((err)=>alert(err.message))
    }

  return (
    <div className='signup-screen'>
     <form>
        <h1>Sign In</h1>
        <input 
        placeholder='Email' 
        type='email'  
        onChange={(e)=>setEmail(e.target.value)}
        />
        <input 
        placeholder='Password' 
        type='password' 
        onChange={(e)=>setPassword(e.target.value)}
        />
        <button type='submit' onClick={signIn}>Sign In</button>

        <h4>
            <span className='gray'>New to Netflix?</span>&nbsp;
            <span className='signup-link' onClick={register}>Sign Up Now.</span>
            </h4>
     </form>
    </div>
  )
}

export default SignupScreen