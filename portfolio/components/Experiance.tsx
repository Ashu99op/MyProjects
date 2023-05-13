import React from 'react'
import {motion} from "framer-motion"
import Card from './Card'
const Experiance = () => {
  return (
    <motion.div
    initial={{ opacity:0}}
    whileInView={{ opacity:1}}
    transition={{ duration:1.5}}
     className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
     >
      
    <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Experience
    </h3>

    <div className='w-full flex space-x-5  overflow-x-scroll p-10 snap-x snap-mandatory  scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]'>
    <Card 
        companyLogo='https://media.licdn.com/dms/image/C4D0BAQGQb3skgrSqMQ/company-logo_200_200/0/1553690593888?e=2147483647&v=beta&t=hq2rMuojEbUOLsRvrnxmAboC1hjLuaqPRzgMAKxQmBs'
        companyName='Brainvire Infotech Inc.'
        position='Software engineer'
        startDate='21/11/2022'
        endDate='present'
        summaryPoints={["Joined as a trainee and learn morden web development technologies","Working as a frontend react.js and next.js developer"]}
        skillsImgs={['./images/react.png','./images/nextjs.png','./images/redux.png','./images/graphql.png','./images/js.jfif','./images/ts.png','./images/tailwindcss.jfif']}
        />
        <Card 
        companyLogo='https://media.licdn.com/dms/image/C4D0BAQFXF8Ge8EAOAw/company-logo_200_200/0/1663648187004?e=2147483647&v=beta&t=ieusJpJfTwf-sk4wKOvD0WwSw05T0sBRCLhGEWRiMPI'
        companyName='iBoon Technologies'
        position='Web Developer'
        startDate='11/04/2022'
        endDate='11/11/2022'
        summaryPoints={["Learn PHP as a backend language to enhance your web development skills","Expand your WordPress expertise by creating multiple websites and developing custom plugins and themes."]}
        skillsImgs={['/images/html.png','/images/css.png','./images/js.jfif','/images/wordpress.jfif','./images/php.png']}
        />
        <Card 
        companyLogo='https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/mkr3dwx4irrpymphzjug'
        companyName='TechNEOS Solutions Pvt Ltd'
        position='Web Developer intern'
        startDate='06/01/2022'
        endDate='06/04/2022'
        summaryPoints={["Learn web development with HTML, CSS, and WordPress.","Develop responsive websites using the WordPress CMS."]}
        skillsImgs={['/images/html.png','/images/css.png','/images/wordpress.jfif']}
        />
        
        
    </div> 

    </motion.div>
  )
}

export default Experiance