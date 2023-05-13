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
    <article className='flex flex-col rounded-lg items-center  space-y-5 flex-shrink-0 w-[350px] md:w-[450px] md:h-[400] xl:w-[700px] xl:h-[600px]  snap-center bg-[#292929] p-10 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
        initial={{
            y:-100,
            opacity:0,
        }}
        transition={{ duration:1.2}}
        whileInView={{opacity:1,y:0}}
        viewport={{once:true}}
        className='w-16 h-16 rounded-full md:w-[120px] md:h-[120px]  xl:w-[150px] xl:h-[150px] object-cover object-center'
        src={companyLogo}
        alt='company logo' />

        <div className='px-0 md:px-10'>
            <h4 className='text-3xl md:text-4xl font-light'>{companyName}</h4>
            <p className='font-bold text-1xl lg:text-2xl mt-1'>{position}</p>
            <div className='flex flex-wrap gap-1 space-x-2 my-2 md:my-1 lg:my-2'> 
                {skillsImgs?.map((url,i)=>(
                    <img className='h-10 w-10 rounded-full' src={url} alt='logo' key={i} />
                ))}
            </div>
            <p className='uppercase py-5 md:py-3 lg:py-5 text-gray-300'>{startDate} - {endDate}</p>

            <ul className='list-disc space-y-4 md:space-y-3 ml-5 text-lg '>
                {summaryPoints?.map((point,i)=>(
                    <li key={i}>{point}</li>
                ))}
            </ul>
        </div>

    </article>
  )
}

export default Card