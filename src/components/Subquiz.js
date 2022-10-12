import React from 'react';

const Subquiz = ({ quizs }) => {

    const { id, options, question } = quizs



    return (

        <div className='px-52 py-20'>
            <div class="shadow-lg mt-5">

                <h1 class="font-bold text-xl mb-2"> Question : {question.slice(3, -4)}</h1>
                {

                    options.map(option => <div>

                        <div class="px-6 py-4">
                            <div > <input type="radio" /> {options}</div>

                        </div>

                    </div>)
                }


            </div>
        </div>
    );
};

export default Subquiz;