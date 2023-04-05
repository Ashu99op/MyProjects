import React, { useState } from 'react'
import SignupScreen from './SignupScreen';

const Login = () => {

    const [signIn,setSignIn] = useState(false);
    


  return (
    <div className='login-screen'>
        <div className='login-screen-bg'>
            <img 
            className='login-logo'
            src='https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png' alt='banner' 
            />
            <button className='login-btn' onClick={()=>setSignIn(true)}>Sign in</button>

           <div className='login-gradient'/>

           <div className='login-body'>
        {signIn ? (
            <SignupScreen/>
        ) : (
            <>
            <h1>Unlimited files, TV programmers and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>Ready to watch? Enter your email to create or restart your membership</h3>

            <div className='login-input'>
                <form>
                    <input type="email"
                    placeholder='Email Address'
                     />
                     <button
                     onClick={()=>setSignIn(true)}
                     className='getStarted-btn'>GET STARTED</button>
                </form>
            </div>
            </>
        ) }
        </div>
           
        </div>
    </div>

          

        // <div className='login-body'>
        // {signIn ? (
        //     <SignupScreen/>
        // ) : (
        //     <>
        //     <h1>Unlimited files, TV programmers and more.</h1>
        //     <h2>Watch anywhere. Cancel at any time.</h2>
        //     <h3>Ready to watch? Enter your email to create or restart your membership</h3>

        //     <div className='login-input'>
        //         <form>
        //             <input type="email"
        //             placeholder='Email Address'
        //              />
        //              <button
        //              onClick={()=>setSignIn(true)}
        //              className='getStarted-btn'>GET STARTED</button>
        //         </form>
        //     </div>
        //     </>
        // ) }
        // </div>
  )
}

export default Login