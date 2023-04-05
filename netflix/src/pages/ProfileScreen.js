import React from 'react'
import Nav from '../components/Nav'
import {  useSelector } from 'react-redux';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

export const ProfileScreen = () => {
    const navigate = useNavigate();

    const user = useSelector(state => state.user.user);
  return (
    <div className='profile-screen'>
        <Nav/> 
        <div className='profile-body'>
            <h1>Edit Profile</h1>
            <div className='profile-info'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRel4c26sEwdj81loUzjfgikPTZXdlfHh3MnJAcKP2vkA&s' alt='user logo' />
                <div className='profile-details'>
                    <h2>{user?.email}</h2>
                    <div className='plans'>
                        <button className='signout-btn' onClick={()=>auth.signOut() && navigate("/") }>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
   </div>
  )
}
 