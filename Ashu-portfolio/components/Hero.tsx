import React from 'react'
import { Cursor,useTypewriter } from 'react-simple-typewriter'
import BackgroundCircle from './BackgroundCircle';
import Link from 'next/link';

type Props = {}

const Hero = (props: Props) => {

    const [text,count] = useTypewriter({
        words:["Hello, my name is Ashutosh","Welcome to my portfolio website","I'm a Front-end web developer","I Love coding 3000🖤"],
        loop:true,
        delaySpeed:2000,
    });

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircle/>
        <img
        className='relative rounded-full h-40 w-40 mx-auto object-cover'
        src='https://e1.pxfuel.com/desktop-wallpaper/522/8/desktop-wallpaper-luffy-beautiful-smile-of-my-dengo-it-gives-even-the-desire-to-anime-cry-smile-thumbnail.jpg' alt='user image'/>

        <div className='z-20'>
          <h2 className='text-sm uppercase text-gray-400 pb-2 tracking-[15px]'>Software Engineer</h2>
         <h1 className='text-5xl lg:text-6xl font-semibold scroll-px-10'>
            <span className='mr-3'>{text}</span>
            <Cursor cursorColor="#F7AB0A"/>
          </h1> 

          <div className='pt-5'>
            <Link href="#about">
             <button className='hero_btn'>Aboute</button>
            </Link>
            <Link href="#experiance">
             <button className='hero_btn'>Experience</button>
            </Link>
            <Link href="#skills">
             <button className='hero_btn'>Skill</button>
            </Link>
            <Link href="#projects">
             <button className='hero_btn'>Projects</button>
            </Link>
            <Link href="#contact">
             <button className='hero_btn'>Contact</button>
            </Link>
          </div>
        </div>
       
    </div>
  )
}

export default Hero