import { useEffect } from 'react';
import { useStoreMeals } from '../store';

export const Meals = () => {

    const { meals, searchQuery, setMeals, setSearchQuery } = useStoreMeals();
    return (
        <div>
      
        </div>
    )
};
