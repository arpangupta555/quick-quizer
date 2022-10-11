import React from 'react';

const Subquiz = ({ quizs }) => {

    const { id, options, question } = quizs
    console.log(quizs)


    return (
        <div>
            <p>{question}</p>
        </div>
    );
};

export default Subquiz;