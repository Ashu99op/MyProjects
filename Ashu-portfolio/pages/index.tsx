import Head from 'next/head'
import { Header } from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experiance from '@/components/Experiance'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import Link from 'next/link'
import Footer from '@/components/Footer'


export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>  
      <Head>
        <meta name="description" content="Explore Ashu's comprehensive web developer portfolio, featuring a showcase of expertise in HTML, CSS, JavaScript, and various frameworks like React js, Next js . Discover innovative solutions, stunning designs, and a proven track record of success. Contact Ashu for collaborations and exciting opportunities in web development.">
        </meta>
        <meta name="keywords" content="web developer portfolio,React js,Next js, expertise, experience, HTML, CSS, JavaScript, frameworks, innovative solutions, stunning designs, collaboration, web development"></meta>
        <meta name="author" content="Ashutosh" />
        <title>Ashu&apos;s Portfoli</title>
        <link rel="icon" href="https://e1.pxfuel.com/desktop-wallpaper/522/8/desktop-wallpaper-luffy-beautiful-smile-of-my-dengo-it-gives-even-the-desire-to-anime-cry-smile-thumbnail.jpg" />
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero/>
      </section>
      
      <section id='about' className='snap-center'>
        <About />
      </section>

      <section id='experiance' className='snap-center'>
        <Experiance/>
      </section>

      <section id='skills' className='snap-start'>
        <Skills/>
      </section>

      <section id='projects' className='snap-start'>
        <Projects/>
      </section>

      <section id='contact' className='snap-start'>
        <Contact/>
      </section>

      <Footer/>
    </div>
  )
}
