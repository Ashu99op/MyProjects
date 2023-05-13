import React from 'react'
import {motion} from "framer-motion"

type Props = {
    companyName: string;
    companyLogo: string;
    position: string;
    startDate: string;
    endDate: string;
    summaryPoints: Array<string>;
    skillsImgs: string[];
}



const Card:React.FC<Props> = ({companyName,companyLogo,position,startDate,endDate,summaryPoints,skillsImgs}) => {
  return ( 
    <article className='flex flex-col rounded-lg items-center  space-y-4 xl:space-y-2 flex-shrink-0 w-[450px] md:w-[500px] md:h-[350] xl:w-[700px] xl:h-[500px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{ duration:1.2}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className='w-16 h-16 rounded-full md:w-[100px] md:h-[100px]  xl:w-[130px] xl:h-[130px] object-cover object-center'
        src={companyLogo}
        alt='company logo' />
        <div className='px-0 md:px-10'>
            <h4 className='text-3xl md:text-4xl font-light'>{companyName}</h4>
            <p className='font-bold text-1xl lg:text-2xl mt-1'>{position}</p>
            <div className='flex flex-wrap gap-1 space-x-2 my-2 md:my-1 lg:my-2 xl:my-1'> 
                {skillsImgs?.map((url,i)=>(
                    <img className='h-10 w-10 rounded-full' src={url} alt='logo' key={i} />
                ))}
            </div>
            <p className='uppercase py-5 md:py-3 lg:py-4 xl:py-3 text-gray-300'>{startDate} - {endDate}</p>

            <ul className='list-disc space-y-4 md:space-y-3 xl:space-y-2 ml-5 text-lg '>
                {summaryPoints?.map((point,i)=>(
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>
    </article>
  )
}

export default Card