import React from 'react'
import {motion } from "framer-motion"
import Skill from './Skill'
const Skills = () => {
  return (
    <motion.div 
    initial={{ opacity:0}}
    whileInView={{ opacity:1}}
    transition={{ duration:1.5}}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
    >
    <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Skills
    </h3>

    <h3 className='absolute top-32 uppercase tracking-[3px] text-gray-500 text-sm'>Hover over a skill for currency profieciency</h3>

    <div className='grid grid-cols-5 gap-4 md:gap-5  lg:grid-cols-6 lg:gap-8' >
      <Skill directionLeft={true} logo={"./images/react.png"} value={90}/>
      <Skill directionLeft={true} logo={"./images/nextjs.png"} value={70}/>
      <Skill directionLeft={true} logo={"./images/redux.png"} value={70}/>
      <Skill directionLeft={true} logo={"./images/threejs.png"} value={70}/>
      <Skill directionLeft={true} logo={"./images/html.png"} value={95}/>
      <Skill directionLeft={true} logo={"./images/css.png"} value={90}/>
      <Skill directionLeft={true} logo={"./images/js.png"} value={80}/>
      <Skill directionLeft={true} logo={"./images/ts.png"} value={70}/>
      <Skill directionLeft={true} logo={"./images/nodejs.png"} value={40}/>
      <Skill  logo={"./images/graphql.png"} value={50}/>
      <Skill  logo={"./images/mui.png"} value={60}/>
      <Skill  logo={"./images/wordpress.jfif"} value={70}/>
      <Skill  logo={"./images/firebase.png"} value={40}/>
      <Skill  logo={"./images/github.png"} value={60}/>
      <Skill  logo={"./images/scss.png"} value={60}/>
      <Skill  logo={"./images/tailwindcss.jfif"} value={80}/>
      <Skill  logo={"./images/router.png"} value={50}/>
      <Skill  logo={"./images/bootstrap.jfif"} value={80}/>
    </div>
    </motion.div>
  )
}

export default Skills 