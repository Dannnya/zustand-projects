import React from 'react';
import { useQuizStore } from '../store';
import { FaCheckCircle } from 'react-icons/fa';

function SidebarQuiz() {

    const { questions, currentQuestion } = useQuizStore();

  return (
    <div>
          <h4 className='text-xl font-bold mb-3'>Quiz Progress</h4>
          <ul>
              {questions.map((_, index) => (
                  <li key={index} className='mb-2 items-center'>
                      <FaCheckCircle
                        className={`mr-2 ${index < currentQuestion ? 'text-green-500' : 'text-gray-500'}`}
                      />
                      
                      <span>Question { index + 1 }</span>
                  </li>
              )) }
          </ul>
    </div>
  )
}

export default SidebarQuiz;
