import React from 'react';
import { useQuizStore } from '../store';

function Question() {

    const { questions, currentQuestion, selectAnswer, answers, nextQuestion,
        prevQuestion, showScore, score, resetQuiz } = useQuizStore();

    const question = questions[currentQuestion];
    const currentAnswer = answers[currentQuestion];

    const handleSelect = (optionIndex: any) => {
        selectAnswer(optionIndex)
    };

    const handleSubmit = () => nextQuestion();


    return (
        <div className='w-3/4 p-6'>
            <h4 className='text-3xl font-semibold'>
                {question.question}
            </h4>
            <div className="mt-4">
                {question.options.map((option, index) => (
                    <div key={index} className='my-2'>
                        <label className='flex items-center'>
                            <input type='radio' name={`question-${currentQuestion}`}
                                checked={currentAnswer === index}
                                onChange={() => handleSelect(index)}
                                className='mr-2'
                            />
                            {option}
                        </label>
                    </div>
                ))}
            </div>

            <div className='flex gap-6'>
                 <div className="mt-6">
                {currentQuestion > 0 && (
                    <button
                        onClick={ prevQuestion } 
                        className='mr-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'
                    >
                        Previous
                    </button>
                )}
            </div>

            {currentQuestion < questions.length - 1 ? (
            <button  onClick={ handleSubmit } className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Next</button>
            ): (
                        <button
                            className='px-4 py-2 bg-green-500 hover:bg-green-600 text-white'
                        >
                            Submit
                        </button>
            )}
           </div>
        </div>
    )
}

export default Question;