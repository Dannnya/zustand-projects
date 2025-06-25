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

interface PasswordState {
    length: number;
    includeNumbers: boolean;
    includeSymbols: boolean;
    includeUppercase: boolean;
    includeLowercase: boolean;
    generatedPassword: string;
  
    setLength: (length: number) => void;
    toggleNumbers: () => void;
    toggleSymbols: () => void;
    toggleUppercase: () => void;
    toggleLowercase: () => void;
    generatePassword: () => void;
}

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

export const usePasswordStore = create<PasswordState>((set) => ({
    length: 12,
    includeNumbers: true,
    includeSymbols: false,
    includeUppercase: true,
    includeLowercase: true,
    generatedPassword: '',

    setLength: (length => set({ length })),
    toggleNumbers: () => set((state => ({ includeNumbers: !state.includeNumbers }))),
    toggleSymbols: () => set((state => ({ includeSymbols: !state.includeSymbols }))),
    toggleUppercase: () => set((state => ({ includeUppercase: !state.includeUppercase }))),
    toggleLowercase: () => set((state => ({ includeLowercase: !state.includeLowercase }))),

    generatePassword: () => set((state) => {
        const numbers = '0123456789';
        const symbols = '!@#$%^&*()_+{}[]';
        const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const lowercase = 'abcdefghijklmnopqrstuvwxyz';

        let characters = '';

        if (state.includeNumbers) characters += numbers;
        if (state.includeSymbols) characters += symbols;
        if (state.includeUppercase) characters += uppercase;
        if (state.includeLowercase) characters += lowercase;

        let password = '';

        for (let i = 0; i < state.length; i++) {
            password += characters[Math.floor(Math.random() * characters.length)]
        };

        return { generatedPassword: password };
    }),
}));