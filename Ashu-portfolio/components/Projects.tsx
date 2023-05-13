import React from 'react'
import {motion } from "framer-motion"
import {projects} from './constant'


function Projects() {

  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{ opacity:1}}
    transition={{duration:1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left ms:flex-row max-w-full justify-evenly mx-auto items-center z-0'>

        <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>Projects
        </h3>

        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]' >
            {
              projects.map((project,i)=>(
                <div key={project.id} className='w-screen flex-shrink-0 snap-center flex flex-col justify-center items-center space-y-5 p-20 md:p-44 h-screen' >
                  <motion.img
                   initial={{opacity:0 , y:-300}}
                   transition={{duration:1.2}}
                   whileInView={{y:0, opacity:1}}
                   viewport={{once:true}}
                    src={project.image_rul}
                    alt='project image'
                    className='h-2/5 md:h-4/5'
                  />

                <div className='space-y-8 px-0 max-w-6xl'>
                  
                  <h4 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-center'><span className='underline decoration-[#F7AB0A]/50'>Project {i+1} of {projects.length} :</span> {project.name}</h4>
                </div>
                <div className='flex items-center space-x-2 justify-center'>
                  {project.tech_stacks.map((item,i)=>(
                    <img 
                    key={i}
                    className='h-10 w-10 rounded-full'
                    src={item}
                    alt="tech logo"
                  />
                  ))}
                </div>
                <p className='text-sm text-center md:text-left md:text-lg'>{project.desc}</p>
                </div>
              ))
            }
        </div>
        <div className='w-full absolute top-[20%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12' />
    </motion.div>
  )
}

export default Projects