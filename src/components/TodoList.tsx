import { useState } from 'react';
import { useTodoListStore } from '../store';

export const TodoList = () => {

    const { todos, addTodo, removeTodo, toggleTodo } = useTodoListStore();
    const [inputValue, setInputValue] = useState('');
    
    const handleAddTodo = () => {
        if (inputValue.trim() === '') return;

        addTodo({
            id: Date.now(),
            text: inputValue,
            completed: false,
        });
    };

    return (
        <div>
            <h4>Todo List</h4>

            <div>
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />

                <button onClick={ handleAddTodo }>Add</button>
            </div>

            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <div>
                            <input type='checkbox' checked={todo.completed} onChange={() => toggleTodo(todo.id)} />
                            <span className={`${todo.completed ? 'line-through' : 'text-gray-700'}`}>{todo.text }</span>
                        </div>

                        <button onClick={ () => removeTodo(todo.id) }>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
};
