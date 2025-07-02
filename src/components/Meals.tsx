import { useEffect } from 'react';
import { useStoreMeals } from '../store';

export const Meals = () => {

    const { meals, searchQuery, setMeals, setSearchQuery } = useStoreMeals();

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch('https:/www.themealdb.com/api/json/v1/1/filter.php?c=Seafood');
                const data = await response.json();
                setMeals(data.meals)
            } catch (error) {
                console.error('Error:', error);
            };
        };

        fetchMeals();
    }, [setMeals]);

    const filteredMeals = meals.filter(meal => meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase()));
    return (
        <div>
            <h4>Seafood Recipes</h4>
            
            <input type='text' placeholder='Search for a meal...' value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
            />

            <div>
                {filteredMeals.length >= 0 ? (
                    filteredMeals.map(meal => (
                        <div key={meal.idMeal}>
                            <img src={meal.strMealThumb} alt={meal.strMeal} width={300} className='pt-5' />
                            
                            <h4 className='font-bold'>{meal.strMeal}</h4>
                            <p>Seafood Menu</p>
                        </div>
                    ))
                ): (
                    <p>No meals found</p>
                ) }
            </div>
        </div>
    )
};
