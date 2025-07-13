import React from 'react';
import Question from './Question';
import SidebarQuiz from './SidebarQuiz';
import { useQuizStore } from '../store';

function QiuzLayout() {

  return (
    <div>
          <SidebarQuiz />
          <div className="flex-1 flex flex-col items-center justify-center">
              <Question />
          </div>
    </div>
  )
}

export default QiuzLayout
