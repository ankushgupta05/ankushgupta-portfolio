import React from 'react'
import Image from 'next/image'

import devloper from '@/public/Developer_Icons/development.png'

const page = () => {




    const timelineData = [
        {
            title: 'Full Stack Devlo..',
            period: '(2022-2023)',
            description: 'This is my achievement that I am full stack Developer. I can work with JS and React JS Project and also I Expert on MongoDB database (MERN STACK)...'
        },
        {
            title: 'Machine Learning',
            period: '(Cu)',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optio iusto quis placerat dolor similique obcaecati animi quo quis consequatur, possimus minima ea qui!'
        },
        {
            title: 'HTML Developer',
            period: '(2023-2024)',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optio iusto quis placerat dolor similique obcaecati animi quo quis consequatur, possimus minima ea qui!'
        },
        {
            title: 'HTML Developer',
            period: '(2023-2024)',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optio iusto quis placerat dolor similique obcaecati animi quo quis consequatur, possimus minima ea qui!'
        },
        {
            title: 'HTML Developer',
            period: '(2023-2024)',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optio iusto quis placerat dolor similique obcaecati animi quo quis consequatur, possimus minima ea qui!'
        },
        {
            title: 'Full Stack Devlo..',
            period: '(2022-2023)',
            description: 'This is my achievement that I am full stack Developer. I can work with JS and React JS Project and also I Expert on MongoDB database (MERN STACK)...'
        },
        {
            title: 'Machine Learning',
            period: '(Cu)',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optio iusto quis placerat dolor similique obcaecati animi quo quis consequatur, possimus minima ea qui!'
        },
        {
            title: 'HTML Developer',
            period: '(2023-2024)',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Optio iusto quis placerat dolor similique obcaecati animi quo quis consequatur, possimus minima ea qui!'
        }
    ];




    return (

        <div className="bg-gray-900 text-white min-h-screen pt-20 md:p-12  rounded-md">
            <div className='px-3'>
                <h2 className="text-lg mb-3">My Achievement</h2>
                <h1 className="text-3xl md:text-4xl font-bold  text-purple-400 mb-4">Future Goal</h1>
                <hr className='md:w-[15%] w-[50%] border-purple-700' />
            </div>

            <div className="relative md:mt-32 mt-40 ">
                {/* Horizontal line */}
                <div className="absolute h-1 w-full bg-white top-8 left-0"></div>

                {/* Timeline items */}
                <div className="flex flex-nowrap overflow-x-auto pb-20  md:pb-32">
                    {timelineData.map((item, index) => (
                        <div key={index} className="flex-none w-64 mx-4 first:ml-0 last:mr-0">
                            <div className="flex flex-col items-center">
                                <div className="w-16 h-16 bg-gray-800 rounded-full flex  items-center justify-center z-10 mb-4">
                                    <Image src={devloper} alt="Icon" width={32} height={32} />
                                </div>
                                <h3 className="text-lg font-semibold text-center mb-2">{item.title}</h3>
                                <p className="text-sm text-center text-gray-400">{item.period}</p>
                                <p className="text-xs text-center text-gray-500 mt-2">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default page
