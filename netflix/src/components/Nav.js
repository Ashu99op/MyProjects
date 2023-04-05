import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';


const Nav = () => {
  const navigate = useNavigate();
  const [show,setShow] = useState(false);

  const transitionNavBar = ()=>{
    if(window.scrollY >100){
      setShow(true);
    }else{
      setShow(false);
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",transitionNavBar);
    return ()=>window.removeEventListener("scroll",transitionNavBar);
  },[])



  return (
    <div className={`nav ${show  && 'nav-black'}`}>
      <div className='nav-contents'>
        <img
        onClick={()=>navigate("/")}
        className='nav-logo' src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt='Netflix-logo'/>


        <img 
        onClick={()=>navigate("/profile")}
        className='nav-avatar' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel4c26sEwdj81loUzjfgikPTZXdlfHh3MnJAcKP2vkA&s" alt='avatar' />
        </div>
    </div>
  )
}

export default Nav