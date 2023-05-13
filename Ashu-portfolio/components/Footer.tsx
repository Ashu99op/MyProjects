import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='sticky bottom-5 w-full px-4'>
          <div className='flex items-center justify-end'>
           <Link href="#hero"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='h-8 w-8 p-1 rounded-full  hover:cursor-pointer hover:bg-[#F7AB0A] transition-all ease-in'>
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 19.5v-15m0 0l-6.75 6.75M12 4.5l6.75 6.75" />
</svg> </Link>
          </div>
        </footer>
  )
}

export default Footer