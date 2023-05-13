import React from 'react'
import {PhoneIcon, EnvelopeIcon,MapPinIcon } from '@heroicons/react/24/solid'
import { useForm } from 'react-hook-form';
import Link from 'next/link';


type Inputs = {
  name:String;
  email:String;
  subject:String;
  message:String;
}

function Contact() {

  const {
    register,
    handleSubmit,
  } = useForm<Inputs>();

  const onSubmit: any  = (formData:any) => {
    window.location.href = `mailto:ashutoshsavani0@gmail?subject=${formData.subject}&body=Hii ${formData.name} ,${formData.email}, ${formData.message}`
  }

  return (
    <div className='h-screen relative flex flex-col text-center md:text-left md:flex-row px-10 justify-evenly mx-auto items-center max-w-7xl'>
      <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>
        Contact
      </h3>

      <div className='flex flex-col space-10'>
        <h4 className='text-2xl md:text-4xl font-semibold text-center'>
          I have got just what you need.{" "}
          <span className='decoration-[#F7AB0A]/50 underline'>Lets Talk.</span>
        </h4>
        
        <div className='space-y-3 md:space-y-6 mt-3 mb-3'>
          <div className='flex items-center space-x-4 justify-center'>
            <PhoneIcon className="text-[#F7AB0A] h-5 w-5 md:h-7 md:w-7 animate-pulse"/>
            <p className="text-1xl md:text-2xl"><Link href="tel:+91 9601573653" className='hover:text-[#f7ac0a]'>+91 9601573653</Link></p>
          </div>
          <div className='flex items-center space-x-4 justify-center'>
            <EnvelopeIcon className="text-[#F7AB0A] h-5 w-5 md:h-7 md:w-7  animate-pulse"/>
            <p className="text-1xl md:text-2xl"><Link className='hover:text-[#f7ac0a]' href="mailto:ashutoshsavani0@gmail.com">ashutoshsavani0@gmail.com</Link></p>
          </div>
          <div className='flex items-center space-x-4 justify-center'>
            <MapPinIcon className="text-[#F7AB0A] h-5 w-5  md:h-7 md:w-7  animate-pulse"/>
            <p className="text-1xl md:text-2xl">Ahmedabad , Gujarat</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
          <div className='flex space-x-2'>
            <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
            <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
          </div>
          <input {...register('subject')} placeholder='Subject' className='contactInput'  type=''/>
          <textarea {...register('message')} placeholder='Message' className='contactInput'/>
          <button type='submit' className='bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact