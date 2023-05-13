import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from "framer-motion"
import Link from 'next/link'

type Props = {}

export const Header = (props: Props) => {
  return (
    <header className='sticky p-5 top-0 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center' > 
        <motion.div 
        initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration:1.3,
        }}
        className='flex flex-row items-center'> 
            <SocialIcon
             url='https://www.instagram.com/l_ashuuuuu_l/'
             fgColor='gray'
            bgColor='transparent'
            />
            <SocialIcon
             url='https://www.linkedin.com/in/ashutosh-savani-a3772a228/'
             fgColor='gray'
            bgColor='transparent'
            />
        </motion.div>
        <motion.div
        initial={{
            x: 500,
            opacity: 0,
            scale: 0.5,
        }}
        animate={{
            x:0,
            opacity:1,
            scale:1,
        }}
        transition={{
            duration:1,
        }}
        className='flex flex-row items-center text-gray-300 '>
            <SocialIcon
            className='cursor-pointer'
            network='email'
            fgColor='gray'
            bgColor='transparent'
            />
           <Link href='#contact'> <p className='uppercase hidden md:inline-flex text-gray-400'>Contact Me</p></Link>
        </motion.div>
    </header>
  )
}


