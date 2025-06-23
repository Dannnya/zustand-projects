import { useState } from 'react';
import { useStore } from '../store';

interface Recipe {
    id: number;
    name: string;
    ingredients: string;
    instructions: string;
}

export const RecipeApp = () => {

    const { recipes, addRecipe, removeRecipe } = useStore();
    const [ name, setName ] = useState<string>('');
    const [ ingredients, setIngredients ] = useState<string>('');
    const [ instructions, setInstructions ] = useState<string>('');
    const [ editingRecipe, setEditingRecipe ] = useState< Recipe | null> (null);
    
    return (
        <div className='min-h-screen flex items-center justify-center bg-green-100'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl'>
                <h4 className='text-3xl font-bold mb-6 text-center text-green-700'>
                    Recipe Book
                </h4>

                <div className="space-y-4 mb-4">
                    <input type='text'
                        placeholder='Recipe Name'
                        onChange={(e) => setName( e.target.value )}
                        value={ name }
                        className='w-full px-4 py-2 border rounded-lg border-gray-300'
                    />
                </div>
            </div>
        </div>
    )
};
