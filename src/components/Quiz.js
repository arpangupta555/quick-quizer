import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subquiz from './Subquiz';

const Quiz = () => {


    const loaderData = useLoaderData()
    const quizData = loaderData.data


    return (
        <div>


            <div><h1 className='text-2xl mt-4'> Quiz of {quizData.name}  </h1></div>


            {

                quizData.questions.map(quizs => (<Subquiz key={quizs.id} quizs={quizs}></Subquiz>))
            }
        </div>
    );
};

export default Quiz;