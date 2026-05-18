import React from 'react'
import { BsRobot } from "react-icons/bs";
import { FaHandSparkles } from "react-icons/fa6";
import { motion } from "motion/react"
import { FcGoogle } from "react-icons/fc";
import { signInWithPopup } from 'firebase/auth';
import {auth,provider} from '../utils/firebase'
import axios from "axios"
import { ServerUrl } from '../App';
import { useDispatch } from 'react-redux';
import { setUserData } from '../redux/userSlice';

function Auth({isModel = false}) {
  const dispatch= useDispatch()
    const handleGoogleauth=async ()=>{
        try{

          const responce=await signInWithPopup(auth,provider)
          let User= responce.user
          let name=User.displayName
          let email=User.email
          const result= await axios.post(ServerUrl + "/api/auth/google",{name,email},{withCredentials:true})
          dispatch(setUserData(result.data))
        }
        catch(error){
           console.log(error)
           dispatch(setUserData(null))
        }
    }
  return (
    <div className={`
      w-full
      ${isModel ? "py-4" : "min-h-screen bg-gradient-to-r from-[#e8e3fd] to-[#ab9af5]  flex items-center justify-center px-6 py-20"}
    `}>
      <motion.div
      initial={{opacity:0, y:-40}}
      animate={{opacity:1, y:0}}
      transition={{duration:1.05}}
      className={`
        w-full
        ${isModel ? "max-w-md p-8 rounded-3xl" : "max-w-lg p-12 rounded-[32px]"}
        bg-gradient-to-r from-[#e8e3fd] to-[#ab9af5] shadow-2xl border border-gray-200
        `}>
           <div className='flex items-center justify-center gap-3 mb-6'>
            <div className='bg-black text-white p-2 rounded-lg'>
                  <BsRobot size={18} />
            </div>
            <h2 className='font-semibold text-lg text-purple-600'>ZenAI.Interview</h2>
           </div>
           <h1 className='text-2xl md:text-3xl font-semibold text-center
           leading-snug mb-4'>
            Continue with
            <span className='bg-purple-100 text-purple-600 px-3 py-1
            rounded-full inline-flex items-center gap-2'>
                  <FaHandSparkles size={16} />
                  AI Smart Interview
            </span>
           </h1>
           <p className='text-gray-500 text-center text-sm md:text-base
           leading-relaxed mb-8'>
            Sign in to start AI-powered mock Interviews,
    track your progress, and unlock detailed performance insights.
           </p>
           <motion.button
           onClick={handleGoogleauth}
           whileHover={{opacity:0.8,scale:1.03}}
           whileTap={{opacity:1,scale:0.98}}
            className='w-full flex items-center justify-center
           gap-3 py-3 bg-black text-white rounded-full shadow-md'>
                <FcGoogle size={20}/>
                Continue with Google
           </motion.button>
           </motion.div>
    </div>
  )
}

export default Auth