import React from 'react'
import Image from 'next/image'
import me_2 from '@/public/Personal_Images/me_2.jpg'


const page = () => {
  return (
    <main className='bg-gray-900 rounded-md'>
      <section className="text-white font-sans body-font">
        <div className="container px-5 py-3 mx-auto">
          <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-400 mb-8" viewBox="0 0 975.036 975.036">
              <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
            </svg>
            <p className="leading-relaxed text-lg">Edison bulb retro cloud bread echo park,  taxidermy 90&apos;s cronut +1 kinfolk.cronut adaptogen squid fanny pack Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi quasi enim neque nemo rerum in. vaporware. Man bun next level coloring book skateboard four loko knausgaard!!.</p>
            <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-4 mb-2"></span>
            {/*<h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>*/}
            <p className=" text-[#aa6be4] font-bold font-serif">Fresher&apos;s Full-Stack Web-Devloper</p>
          </div>
        </div>
      </section>



      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-col px-5 justify-center items-center">

          <Image src={me_2} alt="Ankush Gupta" width={250} height={250} className="rounded-[10%] mx-auto mb-4" />
          {/* <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" /> */}
          <div className="w-full md:w-2/3 flex flex-col mb-16 items-center text-center">
            <h1 className="title-font font-serif sm:text-3xl text-2xl mb-4 font-medium  text-white">Ankush Gupta</h1>
            <div className="mb-8 leading-relaxed text-white text-xs">
              <p> Kickstarter biodiesel roof party wayfarers cold-pressed. Palo santo live-edge tumeric scenester copper mug flexitarian.</p>
              <p> Prism vice offal plaid everyday carry. Gluten-free chia VHS squid listicle artisan.
              </p>
            </div>

          </div>
        </div>
      </section>


    </main>
  )
}

export default page
