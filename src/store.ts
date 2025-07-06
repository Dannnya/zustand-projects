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
};

interface Meals {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
};

interface StoreStateMeals {
    meals: Meals[];
    searchQuery: string;
    setMeals: (meals: Meals[]) => void;
    setSearchQuery: (query: string) => void;
};

interface FormFields {
    label: string;
    type: 'text' | 'number' | 'password' | 'textarea' | 'date' | 'file';
    value: string;
};

interface FormStoreState {
    formFields: FormFields[];
    addField: (field: FormFields) => void;
    removeField: (index: number) => void;
    updateField: (index: number, updatedField: FormFields) => void;
    resetForm: () => void;
};

interface Todo {
    id: number;
    text: string;
    completed: boolean;
};

interface TodoStore {
    todos: Todo[],
    addTodo: (todo: Todo) => void;
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
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

export const useStoreMeals = create<StoreStateMeals>((set) => ({
    meals: [],
    searchQuery: '',
    setMeals: (meals: Meals[]) => set({ meals }),
    setSearchQuery: (query: string) => set({ searchQuery: query }),
}));

export const useFormFields = create<FormStoreState>((set) => ({
    formFields: [],

    addField: (field) => set((state) => ({
        formFields: [...state.formFields, field]
    })),
    removeField: (index) => set((state) => ({ formFields: state.formFields.filter((_, i) => i !== index) })),
    updateField: (index, updatedField) => set((state) => ({
        formFields: state.formFields.map((field, i) => i === index ? updatedField : field)
    })),
    resetForm: () => set({ formFields: [] })
}));

export const useTodoListStore = create<TodoStore>((set) => ({
    todos: [],

    addTodo: (todo) => set((state) => ({ todos: [...state.todos, todo] })),
    removeTodo: (id) => set((state) => ({ todos: state.todos.filter(todo => todo.id !== id) })),
    toggleTodo: (id) => set((state) => ({ todos: state.todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo) }))
}));