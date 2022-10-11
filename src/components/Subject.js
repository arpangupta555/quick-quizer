import React from 'react';
import { Link } from 'react-router-dom';

const Subject = ({ subjects }) => {

    const { id, name, logo, total, questions } = subjects
    console.log(subjects)

    return (

        <div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg 
        hover:-translate-y-2 hover:shadow-2xl'>
            <img
                className='object-cover w-full h-56 md:h-64 xl:h-80'
                src={logo}
                alt=''
            />

            <p className='mb-4 text-lg font-bold text-black-100'>{name}</p>
            <p className='mb-4 text-lg font-bold text-black-100'>{questions}</p>

            <p className='text-sm tracking-wide text-black-300 pb-3'>Total Quiz: {total}</p>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-3"> <Link to={`/home/${id}`}> Get Started 🡲 </Link>

            </button>


        </div >


    );
};

export default Subject;