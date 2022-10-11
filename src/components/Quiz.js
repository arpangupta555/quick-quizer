import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subquiz from './Subquiz';

const Quiz = () => {


    const loaderData = useLoaderData()
    const quizData = loaderData.data.questions


    return (
        <div>
            {

                quizData.map(quizs => (<Subquiz key={quizs.id} quizs={quizs}></Subquiz>))
            }
        </div>
    );
};

export default Quiz;