#### install nextJS app
1)
create-next-app@14.2.5
Ok to proceed? (y)
√ What is your project named? ... first
√ Would you like to use TypeScript? ... No / Yes       -->   No
√ Would you like to use ESLint? ... No / Yes        -->   Yes
√ Would you like to use Tailwind CSS? ... No / Yes        -->   Yes
√ Would you like to use `src/` directory? ... No / Yes        -->   No
√ Would you like to use App Router? (recommended) ... No / Yes        -->   Yes
√ Would you like to customize the default import alias (@/*)? ... No / Yes       -->   No
Creating a new Next.js app in E:\All_programe_new_folder\Next JS-CWH   Singma Web Devlopment\Setup Web\first.



# Note :- importand command
```
// this use for delployment
npm run build

// this command fire after firing 'npm run build' command 
npm start 

// fire this command when you have changes in your code or project code
npm run dev
```



1)
```
// start nextjs app command
npm run dev
```


2)
// create Docker file in ankushgupta-porfolio folder  and write command in Docker file



3)
// run this command in vs code terminal  and create images (nextjs-porfolio)
```
docker build -t nextjs-portfolio .
```


3)
// check you created images
```
docker images
```


4)
```
// images will be run on port 3000 inside docker  but not run in our system
docker run -it nextjs-portfolio
```


5)
// start nextjs app from this command and now also run in our system 
```
docker run -p 3000:3000 nextjs-portfolio
```

5)
//
```
docker exec -it  < id of container >  bash
ls
```


6)
// install nodmon 



7)
// command for updating images data 
```
Docker build .
```



#### responsive of tailwind css


1) sm  --> 640px   ( min width )  640 se bade px par ye apply ho jayenga
2) md  --> 768px  ( min width )
3) lg  --> 1024px  ( min width )
4) xl -->   1280px  ( min width )
5) 2xl --> 1536px  ( min width )





####  start type writter effect
// typewritter taken from chatgpt




#### replace  from <a></a> to  <Link></Link>  

1)
```
// import it in hadder
import Link from 'next/link'
```



#### set single page scroll in our next js project

1)
```
npm install react-scroll 
```




//old app.js page
```
import React from 'react'
import Image from 'next/image'
import Script from 'next/script.js';
import me from '@/public/Personal_Images/me.jpg'

import dynamic from 'next/dynamic';

const urlpdf = '@/public/Documents/ankushgupta.pdf'

import likedin from '@/public/SocialMedia_Icons/linkedin.png'
import instagram from '@/public/SocialMedia_Icons/instagram.png'
import github from '@/public/SocialMedia_Icons/github.png'
import twitter from '@/public/SocialMedia_Icons/twitter.png'


import development from '@/public/Document_Icons/development.png'
import document from '@/public/Document_Icons/document.png'
import project from '@/public/Document_Icons/project.png'
import Link from 'next/link';




const page = () => {

  console.log(process.env);
  console.log(process.env.PUBLIC_URL);

  const DynamicTypewriter = dynamic(() => import('../components/ClientsideTypeWritter.js'), {
    ssr: false,
  });



  return (
    <>
      <section className="bg-gray-900 text-white min-h-screen rounded-md ">
        {/* <div>
        <title>Ankush Gupta - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </div> 

      <nav className="bg-blue-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">
            <span className="text-white">My-Awesome</span>{' '}
            <span className="text-purple-400">Portfolio</span>
          </h1>
          <div className="space-x-4">
            <Link href="#" className="text-white">Home</Link>
            <Link href="#" className="text-white">About</Link>
            <Link href="#" className="text-white">Project</Link>
            <Link href="#" className="text-white">Contact Us</Link>
          </div>
        </div>
      </nav>  */}

        <main className="container mx-auto  p-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="md:col-span-1 space-y-6">
              <div className="bg-gray-800 rounded-lg p-4  text-center flex flex-col md:flex-row">
                <Image src={me} alt="Ankush Gupta" width={160} height={160} className="rounded-full mx-auto mb-4" />
                <div className='p-4' >
                  <h2 className="text-xl font-semibold">Name : Ankush Gupta</h2>
                  <p className="text-md font-bold">CSE - AI&DS</p>
                  <p className='mt-5 text-xs font-bold'>Sagar Institude Of Science & Technology  College</p>
                  <p className='text-xs font-bold'> Gandhi Nagar Bhopal [M.P]</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-purple-400">Skills</h3>
                <div className="bg-gray-700 rounded p-2 mb-2">
                  <h4 className="font-semibold">Technical Skills</h4>
                  <p>React JS, Django, JavaScript, Next JS, Python, C and C++</p>
                </div>
                <div className="bg-gray-700 rounded p-2 mb-2">
                  <h4 className="font-semibold">My Hobbies</h4>
                  <p>Communication, Team Work, Problem Solving, Time Management</p>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <h4 className="font-semibold">Languages Known</h4>
                  <p>Hindi, English</p>
                </div>
              </div>

              <button className="bg-yellow-400 text-black font-bold py-2 rounded w-full">
                DownloadCV
              </button>
            </div>

            <div className="md:col-span-2 ">

              <div className=' md:flex md:justify-between'>

                <div className='md:w-[70%] p-11 flex flex-col space-y-12' >
                  <div className='text-center '>

                    <h2 className="text-3xl font-bold mb-4">Hi, My name is <span className="text-purple-400">Ankush</span></h2>
                    <div className="mb-4 text-xl">And I am Passionate</div>
                    <p className="text-purple-400 text-2xl font-semibold mb-4 h-8"><DynamicTypewriter /></p>

                  </div>
                  <div className='w-full md:flex md:flex-row md:justify-around'>
                    <div className="flex space-x-4  justify-around">

                      <a href="https://github.com/ankushgupta05" target='_blank' className="text-2xl"><i className="fab fa-github"> <Image src={instagram} alt={'development'} width={40} height={40} className="mx-auto mb-2 bg-white rounded-lg " /> </i></a>
                      <a href="https://github.com/ankushgupta05" target='_blank' className="text-2xl"><i className="fab fa-instagram"> <Image src={github} alt={'development'} width={40} height={40} className="mx-auto   bg-white rounded-lg mb-2" /> </i></a>
                      <a href="https://github.com/ankushgupta05" target='_blank' className="text-2xl"><i className="fab fa-twitter"> <Image src={likedin} alt={'development'} width={40} height={40} className="mx-auto  bg-white rounded-lg  mb-2" /> </i></a>
                      <a href="https://github.com/ankushgupta05" target='_blank' className="text-2xl"><i className="fab fa-linkedin"> <Image src={twitter} alt={'development'} width={40} height={40} className="mx-auto  bg-white rounded-lg  mb-2" /> </i></a>
                    </div>

                    <div className='md:mt-0 mt-2'>
                      {/* <a href="/public/Documents/ankushgupta.pdf" download='ankushgupta.pdf' target='_blank' rel='noopener noreferrer'>  <button className="bg-blue-500 text-white font-bold py-2 w-full md:w-36 rounded-lg ">Hire Me</button></a> */}
                      <a href={urlpdf} download={urlpdf} target='_blank' rel='noopener noreferrer'>  <button className="bg-blue-500 text-white font-bold py-2 w-full md:w-36 rounded-lg ">Hire Me</button></a>
                      {/* <a href={urlpdf} onclick="download()" target='_blank' rel='noopener noreferrer'>  <button className="bg-blue-500 text-white font-bold py-2 w-full md:w-36 rounded-lg ">Hire Me</button></a> */}
                    </div>

                  </div>

                </div>

                <div className='md:w-[30%] flex items-center' >
                  <Image src={me} alt="Ankush Gupta" width={250} height={250} className="rounded-[10%] mx-auto mb-4" />
                </div>
              </div>

              <div className=' p-4'>
                <div className=" text-center">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-400">Some Project and Documentation</h3>
                  <p>These are the Spacilities and also You can Suggesth me For Collaboration any Project If Have any in Your Mind.</p>


                  {/* this is a for loop and you can learn something from it  */}
                  {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {['Web Development', 'Documents', 'Project'].map((item) => (
                      <div key={item} className="bg-gray-800 rounded-lg p-4 text-center">
                        <Image src={`/path_to_${item.toLowerCase().replace(' ', '_')}_icon.png`} alt={item} width={64} height={64} className="mx-auto mb-2" />
                        <h4 className="font-semibold mb-2">{item}</h4>
                        <button className="bg-blue-500 text-white py-1 px-3 rounded">
                          View More
                        </button>
                      </div>
                    ))}
                  </div> */}


                  <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10" >

                    <div className="bg-gray-800 rounded-lg p-4 text-center" >
                      <Image src={development} alt={'development'} width={90} height={90} className="mx-auto mb-2" />
                      <button className="bg-blue-500 text-white py-1 px-3 rounded">
                        View More
                      </button>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-4 text-center" >
                      <Image src={document} alt={'document'} width={90} height={90} className="mx-auto mb-2" />
                      <button className="bg-blue-500 text-white py-1 px-3 rounded">
                        View More
                      </button>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-4 text-center" >
                      <Image src={project} alt={'project'} width={90} height={90} className="mx-auto mb-2" />
                      <button className="bg-blue-500 text-white py-1 px-3 rounded">
                        View More
                      </button>
                    </div>

                  </section>



                </div>
              </div>

            </div>

          </div>
        </main>
      </section>



      {/* <Script>
        function download() {
          // window.location = 'images/download/Resume[1].pdf'
          window.location = urlpdf
      }
      </Script> */}

    </>

  )
}

export default page

```









// new app.js page
```
import React from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

import me from '@/public/Personal_Images/me.jpg'

import linkedin from '@/public/SocialMedia_Icons/linkedin.png'
import instagram from '@/public/SocialMedia_Icons/instagram.png'
import github from '@/public/SocialMedia_Icons/github.png'
import twitter from '@/public/SocialMedia_Icons/twitter.png'

import development from '@/public/Document_Icons/development.png'
import document from '@/public/Document_Icons/document.png'
import project from '@/public/Document_Icons/project.png'
import Link from 'next/link'

const page = () => {
  const DynamicTypewriter = dynamic(() => import('../components/ClientsideTypeWritter.js'), {
    ssr: false,
  })

  return (
    <>
      <section className="bg-gray-900 text-white min-h-screen rounded-md ">
        <main className="container mx-auto p-3">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-6">
              <div className="bg-gray-800 rounded-lg p-4 text-center flex flex-col md:flex-row">
                <Image
                  src={me}
                  alt="Ankush Gupta"
                  width={160}
                  height={160}
                  className="rounded-full mx-auto mb-4"
                />
                <div className="p-4">
                  <h2 className="text-xl font-semibold">Name : Ankush Gupta</h2>
                  <p className="text-md font-bold">CSE - AI&DS</p>
                  <p className="mt-5 text-xs font-bold">Sagar Institude Of Science & Technology College</p>
                  <p className="text-xs font-bold">Gandhi Nagar Bhopal [M.P]</p>
                </div>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <h3 className="text-lg font-semibold mb-2 text-purple-400">Skills</h3>
                <div className="bg-gray-700 rounded p-2 mb-2">
                  <h4 className="font-semibold">Technical Skills</h4>
                  <p>React JS, Django, JavaScript, Next JS, Python, C and C++</p>
                </div>
                <div className="bg-gray-700 rounded p-2 mb-2">
                  <h4 className="font-semibold">My Hobbies</h4>
                  <p>Communication, Team Work, Problem Solving, Time Management</p>
                </div>
                <div className="bg-gray-700 rounded p-2">
                  <h4 className="font-semibold">Languages Known</h4>
                  <p>Hindi, English</p>
                </div>
              </div>

              <button className="bg-yellow-400 text-black font-bold py-2 rounded w-full">
                <a href="/Documents/ankushgupta.pdf" download>
                  Download CV
                </a>
              </button>
            </div>

            <div className="md:col-span-2 ">
              <div className="md:flex md:justify-between">
                <div className="md:w-[70%] p-11 flex flex-col space-y-12">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold mb-4">
                      Hi, My name is <span className="text-purple-400">Ankush</span>
                    </h2>
                    <div className="mb-4 text-xl">And I am Passionate</div>
                    <p className="text-purple-400 text-2xl font-semibold mb-4 h-8">
                      <DynamicTypewriter />
                    </p>
                  </div>
                  <div className="w-full md:flex md:flex-row md:justify-around">
                    <div className="flex space-x-4 justify-around">
                      <a
                        href="https://www.linkedin.com/in/ankush-gupta-b734b025b/"
                        target="_blank"
                        className="text-2xl"
                      >
                        <Image
                          src={instagram}
                          alt="Instagram"
                          width={40}
                          height={40}
                          className="mx-auto mb-2 bg-white rounded-lg"
                        />
                      </a>
                      <a
                        href="https://github.com/ankushgupta05"
                        target="_blank"
                        className="text-2xl"
                      >
                        <Image
                          src={github}
                          alt="GitHub"
                          width={40}
                          height={40}
                          className="mx-auto bg-white rounded-lg mb-2"
                        />
                      </a>
                      <a
                        href="https://www.linkedin.com/in/ankush-gupta-b734b025b/"
                        target="_blank"
                        className="text-2xl"
                      >
                        <Image
                          src={linkedin}
                          alt="LinkedIn"
                          width={40}
                          height={40}
                          className="mx-auto bg-white rounded-lg mb-2"
                        />
                      </a>
                      <a
                        href="https://x.com/ankushgupta0510"
                        target="_blank"
                        className="text-2xl"
                      >
                        <Image
                          src={twitter}
                          alt="Twitter"
                          width={40}
                          height={40}
                          className="mx-auto bg-white rounded-lg mb-2"
                        />
                      </a>
                    </div>

                    <div className="md:mt-0 mt-2">
                      <a
                        href="/Documents/ankushgupta.pdf"
                        download
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button className="bg-blue-500 text-white font-bold py-2 w-full md:w-36 rounded-lg">
                          Hire Me
                        </button>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="md:w-[30%] flex items-center">
                  <Image
                    src={me}
                    alt="Ankush Gupta"
                    width={250}
                    height={250}
                    className="rounded-[10%] mx-auto mb-4"
                  />
                </div>
              </div>

              <div className="p-4">
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-400">
                    Some Project and Documentation
                  </h3>
                  <p>
                    These are my specialities, and you can suggest any project for collaboration if
                    you have one in mind.
                  </p>

                  <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <Image
                        src={development}
                        alt="Development"
                        width={90}
                        height={90}
                        className="mx-auto mb-2"
                      />
                      <button className="bg-blue-500 text-white py-1 px-3 rounded">View More</button>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <Image
                        src={document}
                        alt="Document"
                        width={90}
                        height={90}
                        className="mx-auto mb-2"
                      />
                      <button className="bg-blue-500 text-white py-1 px-3 rounded">View More</button>
                    </div>

                    <div className="bg-gray-800 rounded-lg p-4 text-center">
                      <Image
                        src={project}
                        alt="Project"
                        width={90}
                        height={90}
                        className="mx-auto mb-2"
                      />
                      <button className="bg-blue-500 text-white py-1 px-3 rounded">View More</button>
                    </div>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}

export default page



```