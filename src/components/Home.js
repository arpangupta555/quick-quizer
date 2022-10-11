import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Subject from './Subject'



const Home = () => {

    const loaderData = useLoaderData()
    const subData = loaderData.data


    return (
        <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
            <div className='flex flex-col items-center justify-between lg:flex-row'>
                <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
                    <div className='max-w-xl mb-6 lg:mt-8'>
                        <div>

                        </div>
                        <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                            Quick
                            <span className='inline-block text-blue-400'>Quizer</span>
                        </h2>
                        <p className='text-base text-gray-700 md:text-lg'>
                            It’s Quiz Time is a great way to spend some time with family and mates with plenty of questions and categories that will keep it fresh for a long while.
                        </p>
                    </div>


                    {/* <p>et Started: <Link to={`/home/${id}`}> ID </Link> */}



                </div>
                <div>
                    <img className='rounded-full' src="https://i.ibb.co/fr1RPX5/quiz-img.png" alt="..." />
                </div>
            </div>

            <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
                <div className='grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2'>
                    {subData.map(subjects => (
                        <Subject key={subjects.id} subjects={subjects} />
                    ))}
                </div>
            </div>
        </div>



    )
}

export default Home