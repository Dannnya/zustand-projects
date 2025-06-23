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
    const [editingRecipe, setEditingRecipe] = useState<Recipe | null>(null);
    
    const handleAddRecipe = () => {
        if (name.trim() === '' || ingredients.trim() === '' || instructions.trim() === '') {
            return;
        };

        addRecipe({
            id: Date.now(),
            name,
            ingredients: ingredients.split(',').map(ingredients => ingredients.trim()),
            instructions,
        });

        setName('');
        setIngredients('');
        setInstructions('');
    };

    const handleEditRecipe = (recipe: Recipe) => {
        setEditingRecipe(recipe);
        setName(recipe.name);
        setIngredients(recipe.ingredients.join(', '));
        setInstructions(recipe.instructions);
    };

    const handleUpdateRecipe = () => {
        if (name.trim() === '' || ingredients.trim() === '' || instructions.trim() === '') {
            return;
        };

        if (editingRecipe) {
            removeRecipe(editingRecipe.id);

            addRecipe({
                id: Date.now(),
                name,
                ingredients: ingredients.split(',').map(ingredients => ingredients.trim()),
                instructions,
            });

            setEditingRecipe(null);
        };

        setName('');
        setIngredients('');
        setInstructions('');
    };

    const handleDenyRecipe = () => {
        setEditingRecipe(null);
        setName('');
        setIngredients('');
        setInstructions('');
    }
    
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
                        className='w-full px-4 py-2 border rounded-lg border-gray-300
                        focus: outline-none focus: ring-2 focus: ring-green-300'
                    />

                    <input type='text'
                        placeholder='Ingredients'
                        onChange={(e) => setIngredients( e.target.value )}
                        value={ ingredients }
                        className='w-full px-4 py-2 border rounded-lg border-gray-300
                        focus: outline-none focus: ring-2 focus: ring-green-300'
                    />

                    <textarea
                        placeholder='Instructions'
                        onChange={(e) => setInstructions( e.target.value )}
                        value={ instructions }
                        className='w-full px-4 py-2 border rounded-lg border-gray-300
                        focus: outline-none focus: ring-2 focus: ring-green-300'
                    />

                    <div className="flex justify-center">
                        {editingRecipe ? (
                            <>
                                <button
                                    onClick={handleUpdateRecipe}
                                    className='bg-yellow-300 text-white px-4 py-2 rounded-lg
                                    hover:bg-yellow-500 focus: outline-none focus: ring-yellow-500'
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={handleDenyRecipe}
                                    className='bg-yellow-300 text-white px-4 py-2 ml-9 rounded-lg
                                    hover:bg-yellow-500 focus: outline-none focus: ring-yellow-500'
                                >
                                    Deny
                                </button>
                            </>
                        ) : (
                                <>
                                    <button
                                        onClick={handleAddRecipe}
                                        className='bg-yellow-300 text-white px-4 py-2 rounded-lg
                                        hover:bg-yellow-500 focus: outline-none focus: ring-yellow-500'
                                    >
                                        Add
                                    </button>
                                </>
                        ) }
                    </div>
                </div>

                <ul className='space-y-4'>
                    {recipes.map((recipe) => (
                            <li key={recipe.id}
                            className='p-4 bg-green-50 rounded-lg shadow-sm'
                            >
                            <h4 className='text-xl font-semibold text-green-900 mb-2'>
                                { recipe.name }
                            </h4>
                            
                            <p className='text-gray-700 mb-2'>
                                <strong>Ingredients: </strong>{ recipe.ingredients.join(', ') }
                            </p>

                            <div className="flex justify-between">
                                <button onClick={() => handleEditRecipe(recipe)}
                                        className='bg-yellow-300 text-white px-4 py-2 rounded-lg
                                        hover:bg-yellow-500 focus: outline-none focus: ring-yellow-500'
                                >
                                    Edit
                                </button>

                                <button onClick={() => removeRecipe(recipe.id)}
                                    className='bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600
                                    focus: outline-none focus: ring-2 focus: ring-red-500'
                                >
                                    Detele
                                </button>
                            </div>
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
};
