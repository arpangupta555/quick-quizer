import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subquiz from './Subquiz';

const Quiz = () => {


    const loaderData = useLoaderData()
    const quizData = loaderData.data.questions


    return (
        <div>


            <h1 className='text-2xl'> {quizData.name}  </h1>
            {

                quizData.map(quizs => (<Subquiz key={quizs.id} quizs={quizs}></Subquiz>))
            }
        </div>
    );
};

export default Quiz;