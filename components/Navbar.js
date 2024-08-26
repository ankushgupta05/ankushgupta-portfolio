import React from 'react'
import Image from 'next/image'
import Link from 'next/link'


import devloper from '@/public/Developer_Icons/development.png'


const Navbar = () => {
    return (

        // <header className="text-white  body-font bg-[#84adea] ">
        <header className="text-white  body-font bg-[#1a237e] ">
            <div className="container mx-auto flex flex-wrap flex-col md:flex-row items-center p-2 px-10  ">
                <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Image src={devloper} alt="Ankush Gupta" width={40} height={40} className=" flex title-font font-medium items-center  " />

                    <span className="ml-3 text-xl text-white  body-font font-bold">
                        <span >My-Awesome</span>{' '}
                        <span className='text-[#aa6be4] font-bold'>Portfolio</span>
                    </span>

                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base  justify-center">
                    {/* <Link href='/' className="mr-5 text-white font-serif font-bold hover:text-[#aa6be4] cursor-pointer">Home</Link>
                    <Link  href='/about'  className="mr-5 text-white font-serif font-bold hover:text-[#aa6be4] cursor-pointer">About</Link>
                    <Link  href='/project' className="mr-5 text-white font-serif font-bold hover:text-[#aa6be4] cursor-pointer">Project</Link>
                    <Link  href='/contact' className="mr-5 text-white font-serif font-bold hover:text-[#aa6be4] cursor-pointer">Contact Us</Link> */}

                    <a href="#home" className="mr-5 text-white font-serif font-bold hover:text-[#aa6be4] cursor-pointer">Home</a>
                    <a href="#about" className="mr-5 text-white font-serif font-bold hover:text-[#aa6be4] cursor-pointer">About</a>
                    <a href="#project" className="mr-5 text-white font-serif font-bold hover:text-[#aa6be4] cursor-pointer">Project</a>
                    <a href="#contact" className="mr-5 text-white font-serif font-bold hover:text-[#aa6be4] cursor-pointer">Contact Us</a>
                    <a href="#achievement" className="mr-5 text-white font-serif font-bold hover:text-[#aa6be4] cursor-pointer">Technology Achievedt</a>
                </nav>


            </div>
        </header>





    )
}

export default Navbar
