import React from 'react';
import { useTaskStore } from '../store';
import { FaPlus } from 'react-icons/fa';

export const MainArea = () => {

    const {
        lists, workspaces, selectedList, selectedWorkspace,
        todoText, setSelectedList, setSelectedWorkspace, setTodoText,
        handleAddTodo
    } = useTaskStore();
    return (
        <div className='flex-1 p-6'>
            <div className="mb-4">
                <input type='text'
                    value={todoText}
                    onChange={e => setTodoText(e.target.value)}
                    placeholder='Add a new task'
                    className='border border-gray-300 p-2 rounded-lg w-full'
                />

                <div className="mt-2 flex items-center">
                    <select
                        value={selectedList}
                        onChange={(e) => setSelectedList(e.target.value)}
                        className='border border-gray-300 p-2 rounded-lg mr-2'
                    >
                        <option value='' disabled>Selected list</option>

                        {lists.map((list, index) => (
                            <option key={index} value={list.name}>
                                { list.emoji} { list.name }
                            </option>
                        ))}
                    </select>

                    <select
                        value={selectedWorkspace}
                        onChange={e => setSelectedWorkspace(e.target.value)}
                        className='border border-gray-300 p-2 rounded-lg mr-2'
                    >
                        <option value='' disabled>Selected Workspace</option>

                        {workspaces.map((workspaces, index) => (
                            <option key={index}>
                                { workspaces.name} { workspaces.emoji }
                            </option>
                        ))}
                    </select>

                    <button
                        className='bg-black text-white gap-3 px-4 py-2 rounded-lg flex items-center'
                        onClick={handleAddTodo}
                    >
                        <FaPlus/> Add Task
                    </button>
                </div>
            </div>
        </div>
    )
};
