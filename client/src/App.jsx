import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Auth  from './pages/Auth'
import InterviewPage from "./pages/InterviewPage"
import InterviewHistory from './pages/InterviewHistory'
import Pricing from './pages/Pricing'
import InterviewReport from './pages/InterviewReport'
import { useEffect } from 'react'
import { linkWithCredential } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { setUserData } from './redux/userSlice'
import axios from 'axios'
axios.defaults.withCredentials= true
export const ServerUrl="http://localhost:8000"
function App() {
  const dispatch= useDispatch()
  useEffect(()=>{
     const setUser=async ()=>{
    try {
      const result=await axios.get(ServerUrl +"/api/user/current-user",{WithCredentials:true}
      )
      dispatch(setUserData(result.data))
    } catch (error) {
      console.log(error)
      dispatch(setUserData(null))
    }
     }
    setUser() 
  },[dispatch])
  
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/auth' element={<Auth/>}/>
      <Route path='/interview' element={<InterviewPage/>}/>
      <Route path='/history' element={<InterviewHistory/>}/>
      <Route path='/pricing' element={<Pricing/>}/>
      <Route path='/report/:id' element={<InterviewReport/>}/>

    </Routes>
  )
}

export default App