import { create } from 'zustand';

type CounterStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
};

interface RecipeType {
    id: number;
    name: string;
    ingrediens: string[];
    instruction: string;
};

interface RecipeStore {
    recipes: RecipeType[];
    addRecipe: (recipe: RecipeType) => void;
    removeRecipe: (id: number) => void;
};

interface ExpenseType {
    id: number;
    description: string;
    amount: number;
};

interface ExpenseStore {
    expenses: ExpenseType[];
    addExpense: (expense: ExpenseType) => void;
    removeExpense: (id: number) => void;
};

export const useCounter = create<CounterStore>((set) => ({
    count: 0,

    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),

}));

export const useStore = create<RecipeStore>((set) => ({
    recipes: [],
    addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
    removeRecipe: (id) => set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id) })),
}));

export const useStoreExpense = create<ExpenseStore>((set) => ({
    expenses: [],
    addExpense: (expense) => set((state) => ({
        expenses: [...state.expenses, expense],
    })),
    removeExpense: (id) => set((state) => ({
        expenses: state.expenses.filter((expense) => expense.id !== id),
    })),
}));