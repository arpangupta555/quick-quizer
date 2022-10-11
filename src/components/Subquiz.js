import React from 'react';

const Subquiz = ({ quizs }) => {

    const { id, options, question } = quizs



    return (
        <div>

            {options.map(option => console.log(option))}

        </div>
    );
};

export default Subquiz;