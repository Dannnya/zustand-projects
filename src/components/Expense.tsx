import { useState } from 'react';
import { useStoreExpense } from '../store';

export const Expense = () => {
    const { expenses, addExpense, removeExpense } = useStoreExpense();
    const [description, setDescription] = useState<string>('');
    const [amount, setAmount] = useState<number | ''>('');
    
    const handleAddExpense = () => {
        if (description.trim() === '' || amount === '') return;

        addExpense({
            id: Date.now(),
            description,
            amount: +amount,
        });

        setDescription('');
        setAmount('')
    }
    
    return (
        <div className='min-h-screen flex items-center justify-center bg-gradient-to-r
        from-purple-400 to-blue-500'>
            <div className='bg-white p-8 rounded-lg shadow-xl w-full max-w-lg'>
                <h1 className='text-4xl font-extrabold mb-6 text-center text-purple-700'
                >
                    Expense
                </h1>

                <div className="space-y-4 mb-6">
                    <input
                        type='text'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                        placeholder='Expense Description'
                        className='w-full px-4 py-3 border-2 border-purple-300 rounded-lg
                        focus: outline-none focus: ring-2 focus: ring-purple-500 transition duration-300'
                    />

                    <input
                        type='number'
                        value={amount}
                        onChange={e => setAmount(e.target.value == '' ? '' : +e.target.value)}
                        placeholder='Amount'
                        className='w-full px-4 py-3 border-2 border-purple-300 rounded-lg
                        focus: outline-none focus: ring-2 focus: ring-purple-500 transition duration-300'
                    />

                    <button
                        onClick={ handleAddExpense }
                        className='w-full px-4 py-3 border-2 rounded-lgfocus: outline-none focus: ring-2 
                        focus: bg-purple-500 transition duration-300'
                    >
                        Add Expense
                    </button>
                </div>

                <ul className="space-y-4 mb-6">
                    {expenses.map((expense) => (
                        <li
                            key={expense.id}
                            className='flex justify-between items-center bg-purple-100 p-4 rounded-lg shadow-sm
                            transition-transform transform hover:scale-105'
                        >
                            <span className="text-gray-300 font-semibold">
                                {expense.description} : {' '}
                                <span className='text-purple-600'
                                >
                                    {expense.amount.toFixed(2)} UAH
                                </span>
                            </span>

                            <button
                                className='bg-red-400 text-white px-3 py-1 rounded-lg shadow-md hover:bg-red-600
                                transition duration-300 focus:outline-none focus:ring-2 focus: ring-red-400'
                                onClick={() => removeExpense(expense.id)}>Delete</button>
                        </li>
                    ))}
                </ul>

                <div className="text-center">
                    <h4 className='text-2xl font-semibold text-purple-600'>
                        Total: {' '}
                        <span>
                            { expenses.reduce((total, expense) => total + expense.amount, 0).toFixed(2)} UAH
                        </span>
                    </h4>
                </div>
            </div>
        </div>
    )
};