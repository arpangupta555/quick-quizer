import React from 'react';

const Subquiz = ({ quizs }) => {

    const { id, options, question } = quizs



    return (
        <div>
            <p>{question}</p>
            {options.map(option => console.log(option))}

        </div>
    );
};

export default Subquiz;