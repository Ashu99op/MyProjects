import React, { useEffect } from 'react';
import HomeScreen from './pages/HomeScreen';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  createRoutesFromElements,
} from "react-router-dom";
import Root from './components/Root';
import Login from './pages/Login';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './redux/userSlice';
import { ProfileScreen } from './pages/ProfileScreen';



function App() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);
  console.log(user)
  useEffect(()=>{
  const unsubscribe = auth.onAuthStateChanged(userAuth =>{
    userAuth ? dispatch(login({uid:userAuth.id,email:userAuth.email})) : dispatch(logout())
   });

   return unsubscribe;
  },[dispatch])

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root/>} > 
        <Route index element={user ? <HomeScreen/> : <Login/>}/>
        <Route path='/profile' element={<ProfileScreen/>}/>
      </Route>
    )
  );

  return (
    <div className="app">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
