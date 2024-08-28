import React from 'react'
import Image  from 'next/image'
import product1 from '@/public/project/Imge1.jpg'
import product2 from '@/public/project/Imge2.jpg'
import product3 from '@/public/project/Imge3.jpg'


const page = () => {
  return (
    <section class="text-gray-600 bg-gray-900 body-font rounded-md">
    <div class="container px-5 py-16 mx-auto">
      <div class="flex flex-wrap w-full mb-20">
        <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
          <h1 class="sm:text-3xl text-2xl font-bold title-font mb-2 text-white font-serif"><p>Project&apos;s! Devloped By </p><p className='text-[#aa6be4]'> Ankush Gupta</p></h1>
          <div class="h-1 w-20 bg-[#aa6be4] rounded"></div>
        </div>
        <p class="lg:w-1/2 w-full leading-relaxed text-white font-bold
        ">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven&apos;t heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
      </div>
      <div class="flex flex-wrap -m-4">
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-800 p-6 rounded-lg">
            <Image src={product1} alt="Ankush Gupta" width={250} height={250} className="h-40 rounded w-full object-cover object-center mb-6" />

           {/* <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" /> */}
            <h3 class="tracking-widest text-[#aa6be4] text-xs  font-bold title-font">Title</h3>
            <h2 class="text-lg text-white font-bold title-font mb-4">Chichen Itza</h2>
            <p class="leading-relaxed text-base text-white  ">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <div className='text-center'>
          <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        </div>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-800 p-6 rounded-lg">
          <Image src={product2} alt="Ankush Gupta" width={250} height={250} className="h-40 rounded w-full object-cover object-center mb-6" />
            {/* <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" /> */}
            <h3 class="tracking-widest text-[#aa6be4] text-xs  font-bold title-font">Title</h3>
            <h2 class="text-lg text-white font-bold title-font mb-4">Chichen Itza</h2>
            <p class="leading-relaxed text-base text-white  ">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <div className='text-center'>
          <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        </div>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
          <div class="bg-gray-800 p-6 rounded-lg">
          <Image src={product3} alt="Ankush Gupta" width={250} height={250} className="h-40 rounded w-full object-cover object-center mb-6" />
            {/* <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" /> */}
            <h3 class="tracking-widest text-[#aa6be4] text-xs  font-bold title-font">Title</h3>
            <h2 class="text-lg text-white font-bold title-font mb-4">Chichen Itza</h2>
            <p class="leading-relaxed text-base text-white  ">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
            <div className='text-center'>
          <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        </div>
          </div>
        </div>
        <div class="xl:w-1/4 md:w-1/2 p-4">
         <div class="bg-gray-800 p-6 rounded-lg">
          <Image src={product2} alt="Ankush Gupta" width={250} height={250} className="h-40 rounded w-full object-cover object-center mb-6" />
            {/* <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content" /> */}
            <h3 class="tracking-widest text-[#aa6be4] text-xs  font-bold title-font">Title</h3>
            <h2 class="text-lg text-white font-bold title-font mb-4">Chichen Itza</h2>
            <p class="leading-relaxed text-base text-white  ">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
          <div className='text-center'>
          <a class="text-indigo-500 inline-flex items-center mt-3">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
        </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  )
}

export default page
