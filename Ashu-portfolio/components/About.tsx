import React from 'react'
import {motion} from "framer-motion"
const About = () => {
  return (
    <motion.div
    initial={{ opacity:0}}
    whileInView={{ opacity:1}}
    transition={{ duration:1.5}}
    className='flex flex-col text-center  md:text-left relative h-screen md:flex-row max-w-7xl px-10 justify-center mx-auto items-center'
    >
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.img 
        initial={{
            x:-200,
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
            x:0
        }}
        transition={{
            duration:1.5,
        }}
        viewport={{once:true}}
        src=' https://media.tenor.com/EYm6p5Jm-1gAAAAd/luffy-smiling-one-piece.gif'
        alt='about image'
        className='mb-5 mt-20 md:mt-0 md:mb-0 flex-shrink-0 w-60 h-60 rounded-full object-cover md:rounded-lg lg:h-96 lg:w-96 xl:w-[600] xl:h-[600]'
        />

        <div className='space-y-6 md:space-y-8 px-0 md:px-10'>
            <h4 className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-semibold'>
                Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background
            </h4>
            <p className='text-xs md:text-sm lg:text-base xl:text-lg' >
            Hey there, I&apos;m Ashutosh, a passionate software engineer and frontend developer. I specialize in frontend technologies like React.js, Next.js, and I&apos;m always eager to stay up-to-date with the latest industry trends and technologies.As a lifelong learner, I have a strong interest in animation and 3D technology. In the near future, I plan to delve into these exciting areas and learn more about libraries such as Three.js for making 3D stuff and gaming. I believe that having a well-rounded set of skills and staying current with emerging technologies is essential for delivering top-notch work to my clients.<br/><br/>When I&apos;m not busy coding, I enjoy watching anime and web series.<br/><br/>Thank you for visiting my portfolio website. Let&apos;s work together to bring your ideas to life!
            </p>
        </div>

    </motion.div>
  )
}

export default About