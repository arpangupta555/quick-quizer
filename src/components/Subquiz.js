import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer, toast } from 'react-toastify';

const Subquiz = ({ quizs }) => {

    const { id, options, question, correctAnswer } = quizs



    // const alart = () => {
    //     alert("I am an alert box!");
    // }
    const notify = () => toast(correctAnswer);






    return (

        <div className='px-6 py-4'>
            <div class="shadow-lg mt-5">

                <div className=''>

                    <h1 class="font-bold text-xl mb-2 px-15"> Question : {question.slice(3, -4)}</h1>

                    <FontAwesomeIcon icon={faEye} onClick={notify} />
                    <ToastContainer />

                </div>


                <div className="radio-buttons">
                    {options.map(option => <div > <input
                        id="windows"
                        value="windows"
                        name="platform"
                        type="radio"

                    /> {option}</div>)}



                </div>


            </div>
        </div >
    );
};

export default Subquiz;