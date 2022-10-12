import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';

const Subquiz = ({ quizs }) => {

    const { id, options, question, correctAnswer } = quizs




    const notify = () => toast(correctAnswer);




    return (

        <div className='px-6 py-10'>
            <div class="shadow-lg mt-3 px-6 py-10">

                <div className=''>

                    <h1 class="font-bold text-xl mb-2 px-15"> Question : {question.slice(3, -4)}</h1>

                    <FontAwesomeIcon icon={faEye} onClick={notify} />
                    <ToastContainer />

                </div>


                <div className="radio-buttons">
                    {options.map(option => <div >  <input
                        type="radio"
                        name="radio"
                        onChange={() => {
                            if (correctAnswer === option) {

                                toast("Your Answer is Right!");
                            } else {
                                toast("Sorry! Your Answer is wrong!");
                            }
                        }}
                        className="radio checked:bg-red-500"
                    /> {option} </div>)}
                    <ToastContainer />



                </div>








            </div>
        </div >
    );
};

export default Subquiz;