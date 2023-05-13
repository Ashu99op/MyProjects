import React from 'react'
import {motion } from "framer-motion"
import { type } from 'os'

type Props = {
  directionLeft?: boolean
  logo:string
  value:number
}

const Skill = ({directionLeft,logo,value}:Props) => {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img 
      initial={{
        x: directionLeft ? -200 : 200,
      }}
      transition={{ duration:1}}
      whileInView={{opacity:1, x:0}}
      src={logo}
      className='rounded-full border-gray-500 object-cover w-24 h-24 md:w-28 md:h-28 xl:w-30 xl:h-30 grop-hover:grayscale transition duration-300 ease-in-out'
      />

      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-30 xl:h-30 rounded-full z-0'>
        <div className='flex items-center justify-center h-full'>
          <p className='text-3xl font-bold text-black opacity-100'>{value}%</p>
        </div>
      </div>
    </div>
  )
}

export default Skill


