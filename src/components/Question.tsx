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

    if (showScore) {
        return (
            <div className='w-3/4 p-6'>
                <h4 className='text-2xl font-semibold'>Your Score</h4>
                <p className="mt-4 text-lg">
                    You scored { score } out of { questions.length }
                </p>

                <button
                    onClick={ resetQuiz }
                    className='mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
                >
                    Restart
                </button>
            </div>
        )
    }


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

            <div className='flex'>
                <div className="mt-6">
                {currentQuestion > 0 && (
                    <button
                        onClick={ prevQuestion } 
                        className='mr-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600'
                    >
                        Previous
                    </button>
                )}

            { currentQuestion < questions.length - 1  ? (
            <button  onClick={ handleSubmit } className='px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'>Next</button>
            ) : (
                        <button
                            onClick={ handleSubmit }
                            className='px-4 py-2 bg-green-500 hover:bg-green-600 text-white'
                        >
                            Submit
                        </button>
                    )}
                </div>
           </div>
        </div>
    )
}

export default Question;