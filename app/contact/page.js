import React from 'react'
import Image from 'next/image'

import contact from '@/public/Contact_Icons/contect5.gif'


const page = () => {
  return (


      <section className="bg-gray-900 text-white min-h-screen p-4  rounded-md">
      <h1 className="text-3xl md:text-4xl font-bold text-[#aa6be4] mb-2">Contact US</h1>
      <hr className='p-2 px-4'/>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="w-full md:w-1/2">
          <Image
            src={contact}
            alt="Contact Illustration"
            width={500}
            height={500}
            className="w-full h-auto"
          />
        </div>
        
        <div className="w-full md:w-1/2">
        <div className='text-center'>
          <p  className="">Looks like you need some help!!!</p>
          <h2 className="text-[#aa6be4] font-serif text-2xl md:text-3xl  font-semibold mb-4">Reach Out!</h2>
          <p className=" mb-6">
            I usually respond within an hour, but developers do sleep four to five hours a night, so it might take a bit 
          </p>
          <p>longer. Thank you and I am looking forward to hearing from you.</p>
          
        </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="John Doe"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@mail.com"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                placeholder="Write Your Message!!!"
                className="w-full p-2 rounded bg-gray-800 border border-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>

  )
}

export default page
