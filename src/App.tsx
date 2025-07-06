import { Expense } from './components/Expense';
import { FormBuilder } from './components/FormBuilder';
import { Meals } from './components/Meals';
import { PasswordGenerator } from './components/PasswordGenerator';
import { RecipeApp } from './components/RecipeApp';
import { TodoList } from './components/TodoList';


function App() {

  return (
    <div>
      {/* <RecipeApp /> */}

      {/* <Expense /> */}

      <div className='flex items-center justify-center pt-10'>
        <PasswordGenerator />
      </div>

      {/* <Meals /> */}

      {/* <FormBuilder /> */}

      <TodoList />
    </div>
  )
}

export default App;
