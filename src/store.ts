import { create } from 'zustand';

type CounterStore = {
    count: number;
    increment: () => void;
    decrement: () => void;
};

// interface RecipeType {
//     id: number;
//     name: string;
//     ingrediens: string[];
//     instruction: string;
// };

// interface RecipeStore {
//     recipes: RecipeType[];
//     addRecipe: (recipe: RecipeType) => void;
//     removeRecipe: (id: number) => void;
// };

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

interface Note {
    text: string;
    color: string;
};

interface NoteStateStore {
    notes: Note[],
    search: string;
    editorContent: string;
    noteColor: string;
    currentNoteIndex: number | null;
    setNotes: (updatedNotes: Note[]) => void;
    setSearch: (searchValue: string) => void;
    setEditorContent: (content: string) => void;
    setNoteColor: (color: string) => void;
    setCurrentNoteIndex: (index: number | null) => void;
    addOrUpdateNote: () => void;
    selectNote: (index: number) => void;
};

interface List {
    name: string;
    emoji: string;
};

interface Workspace {
    name: string;
    emoji: string;
};

interface Todo {
    text: string;
    list: string;
    workspace: string;
};

interface TaskState {
    lists: List[];
    workspaces: Workspace[];
    todos: Todo[];
    editIndex: number | null;
    editText: string;
    dropdownIndex: number | null;
    isListModalOpen: boolean;
    isWorkspaceModalOpen: boolean;
    selectedList: string;
    selectedWorkspace: string;
    todoText: string;
    modalName: string;
    modalEmoji: string;
    modalType: "List" | "Workspace" | null;
    addList: (name: string, emoji: string) => void;
    addWorkspace: (name: string, emoji: string) => void;
    addTodo: (todo: Todo) => void;
    updateTodo: (index: number, updatedTodo: Todo) => void;
    deleteTodo: (index: number) => void;
    handleEdit: (index: number) => void;
    handleUpdate: (index: number) => void;
    handleDropdownClick: (index: number) => void;
    setEditText: (text: string) => void;
    setEditIndex: (index: number | null) => void;
    openListModal: () => void;
    closeListModal: () => void;
    openWorkspaceModal: () => void;
    closeWorkspaceModal: () => void;
    setSelectedList: (list: string) => void;
    setSelectedWorkspace: (workspace: string) => void;
    setTodoText: (text: string) => void;
    handleAddTodo: () => void;
    setModalName: (name: string) => void;
    setModalEmoji: (emoji: string) => void;
    setModalType: (type: "List" | "Workspace") => void;
    handleSaveModal: () => void;
};

interface Quiz {
  question: string;
  options: string[];
  correctAnswer: number;
};

interface QuizStore {
  currentQuestion: number;
  answers: (number | null)[];
  score: number;
  showScore: boolean;
  questions: Quiz[];
  selectAnswer: (optionIndex: number) => void;
  nextQuestion: () => void;
  prevQuestion: () => void;
  resetQuiz: () => void;
};

import { create } from "zustand";

interface ProductState {
  productStates: Record<
    string,
    {
      currentImage: string;
      hover: boolean;
    }
  >;
  setProductImage: (productId: string, image: string) => void;
  setProductHover: (productId: string, hover: boolean) => void;
  initializeProduct: (productId: string, initialImage: string) => void;
}

interface FilterState {
  selectedCountries: string[];
  selectedColors: string[];
  selectedPriceRange: { min: number; max: number } | null;
  setSelectedCountries: (countries: string[]) => void;
  setSelectedColors: (colors: string[]) => void;
  setSelectedPriceRange: (range: { min: number; max: number } | null) => void;
  clearFilters: () => void;
}

export const useCounter = create<CounterStore>((set) => ({
    count: 0,

    increment: () => set((state) => ({ count: state.count + 1 })),
    decrement: () => set((state) => ({ count: state.count - 1 })),

}));

// export const useStore = create<RecipeStore>((set) => ({
//     recipes: [],
//     addRecipe: (recipe) => set((state) => ({ recipes: [...state.recipes, recipe] })),
//     removeRecipe: (id) => set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id) })),
// }));

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

export const useNotesStore = create<NoteStateStore>((set) => ({
    notes: [],
    search: '',
    editorContent: '',
    noteColor: '#fff',
    currentNoteIndex: null,
  
    setNotes: (notes) => set({ notes }),
    setSearch: (search) => set({ search }),
    setEditorContent: (content) => set({ editorContent: content }),
    setNoteColor: (color) => set({ noteColor: color }),
    setCurrentNoteIndex: (index) => set({ currentNoteIndex: index }),
  
    addOrUpdateNote: () => set((state) => {
      const { editorContent, noteColor, currentNoteIndex, notes } = state;
      if (!editorContent.trim()) return {};
      if (currentNoteIndex !== null) {
        const updatedNotes = [...notes];
        updatedNotes[currentNoteIndex] = { text: editorContent, color: noteColor };
        return {
          notes: updatedNotes,
          editorContent: '',
          noteColor: '#fff',
          currentNoteIndex: null,
        };
      }
      return {
        notes: [...notes, { text: editorContent, color: noteColor }],
        editorContent: '',
        noteColor: '#fff',
        currentNoteIndex: null,
      };
    }),
  
    selectNote: (index) => set((state) => ({
      currentNoteIndex: index,
      editorContent: state.notes[index].text,
      noteColor: state.notes[index].color,
    })),
}));

export const useTaskStore = create<TaskState>((set) => ({
  lists: [],
  workspaces: [],
  todos: [],
  editIndex: null,
  editText: "",
  dropdownIndex: null,
  isListModalOpen: false,
  isWorkspaceModalOpen: false,
  selectedList: "",
  selectedWorkspace: "",
  todoText: "",
  modalName: "",
  modalEmoji: "",
  modalType: null,
  addList: (name, emoji) =>
    set((state) => ({
      lists: [...state.lists, { name, emoji }],
    })),
  addWorkspace: (name, emoji) =>
    set((state) => ({
      workspaces: [...state.workspaces, { name, emoji }],
    })),
  addTodo: (todo) =>
    set((state) => ({
      todos: [...state.todos, todo],
    })),
  updateTodo: (index, updatedTodo) =>
    set((state) => {
      const newTodos = [...state.todos];
      newTodos[index] = updatedTodo;
      return {
        todos: newTodos,
        editIndex: null,
        editText: "",
      };
    }),
  deleteTodo: (index) =>
    set((state) => ({
      todos: state.todos.filter((_, i) => i !== index),
      dropdownIndex: null,
    })),
  handleEdit: (index) =>
    set((state) => ({
      editIndex: index,
      editText: state.todos[index].text,
      dropdownIndex: null,
    })),
  handleUpdate: (index) =>
    set((state) => {
      const updatedTodo = {
        ...state.todos[index],
        text: state.editText,
      };
      const newTodos = [...state.todos];
      newTodos[index] = updatedTodo;
      return {
        todos: newTodos,
        editIndex: null,
        editText: "",
      };
    }),
  handleDropdownClick: (index) =>
    set((state) => ({
      dropdownIndex: index === state.dropdownIndex ? null : index,
    })),
  setEditText: (text) => set({ editText: text }),
  setEditIndex: (index) => set({ editIndex: index }),
  openListModal: () => set({ isListModalOpen: true, modalType: "List" }),
  closeListModal: () =>
    set({ isListModalOpen: false, modalName: "", modalEmoji: "" }),
  openWorkspaceModal: () =>
    set({ isWorkspaceModalOpen: true, modalType: "Workspace" }),
  closeWorkspaceModal: () =>
    set({ isWorkspaceModalOpen: false, modalName: "", modalEmoji: "" }),
  setSelectedList: (list) => set({ selectedList: list }),
  setSelectedWorkspace: (workspace) => set({ selectedWorkspace: workspace }),
  setTodoText: (text) => set({ todoText: text }),
  handleAddTodo: () =>
    set((state) => {
      const { todoText, selectedList, selectedWorkspace } = state;
      if (todoText.trim() === "") {
        alert("Todo cannot be empty");
        return state;
      }
      const newTodo = {
        text: todoText,
        list: selectedList,
        workspace: selectedWorkspace,
      };
      return {
        todos: [...state.todos, newTodo],
        todoText: "",
        selectedList: "",
        selectedWorkspace: "",
      };
    }),
  setModalName: (name) => set({ modalName: name }),
  setModalEmoji: (emoji) => set({ modalEmoji: emoji }),
  setModalType: (type) => set({ modalType: type }),
  handleSaveModal: () =>
    set((state) => {
      const { modalName, modalEmoji, modalType } = state;
      if (modalName.trim() === "") return state;

      if (modalType === "List") {
        state.addList(modalName, modalEmoji);
      } else if (modalType === "Workspace") {
        state.addWorkspace(modalName, modalEmoji);
      }

      return {
        modalName: "",
        modalEmoji: "",
        modalType: null,
        isListModalOpen: false,
        isWorkspaceModalOpen: false,
      };
    }),
}));

export const useQuizStore = create<QuizStore>((set) => ({
  currentQuestion: 0,
  answers: Array(3).fill(null),
  score: 0,
  showScore: false,

  questions: [
    {
      question: "What does CSS stand for?",
      options: [
        "Computer Style Sheets",
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Colorful Style Sheets",
      ],
      correctAnswer: 2,
    },
    {
      question: "What does HTTP stand for?",
      options: [
        "Hypertext Technical Protocol",
        "Hypertext Transfer Protocol",
        "High Transfer Text Protocol",
        "Hyper Transfer Text Protocol",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which language is primarily used for web scripting?",
      options: ["JavaScript", "Python", "C++", "Java"],
      correctAnswer: 0,
    },
    {
      question: "What does SQL stand for?",
      options: [
        "Standard Question Language",
        "Simple Query Language",
        "Sequential Query Language",
        "Structured Query Language",
      ],
      correctAnswer: 3,
    },
    {
      question: "What is the main function of a web server?",
      options: [
        "To store data",
        "To run applications",
        "To serve web pages to clients",
        "To protect networks",
      ],
      correctAnswer: 2,
    },
    {
      question: "Which company developed the Java programming language?",
      options: ["Sun Microsystems", "Microsoft", "IBM", "Apple"],
      correctAnswer: 0,
    },
    {
      question: "What is the purpose of the <title> tag in HTML?",
      options: [
        "To create a new section",
        "To define the title of the web page",
        "To add a comment",
        "To include a script",
      ],
      correctAnswer: 1,
    },
    {
      question: "What does API stand for?",
      options: [
        "Application Program Interface",
        "Advanced Programming Interface",
        "Application Programming Interface",
        "Automated Program Interface",
      ],
      correctAnswer: 2,
    },
    {
      question: "What is the purpose of a database index?",
      options: [
        "To store large files",
        "To create backups",
        "To manage user permissions",
        "To speed up data retrieval",
      ],
      correctAnswer: 3,
    },
    {
      question:
        "Which protocol is commonly used for secure communication over the internet?",
      options: ["HTTPS", "FTP", "HTTP", "SMTP"],
      correctAnswer: 0,
    },
  ],

  selectAnswer: (optionIndex) =>
    set((state) => {
      const answers = [...state.answers];
      answers[state.currentQuestion] = optionIndex;
      return { answers };
    }),

  nextQuestion: () =>
    set((state) => {
      const isLastQuestion =
        state.currentQuestion === state.questions.length - 1;

      if (isLastQuestion) {
        let score = 0;

        state.questions.forEach((question, index) => {
          if (state.answers[index] === question.correctAnswer) {
            score++;
          }
        });

        return { showScore: true, score, currentQuestion: state.currentQuestion + 1 };
      }

      return { currentQuestion: state.currentQuestion + 1 };
    }),

  prevQuestion: () =>
    set((state) => ({
      currentQuestion: Math.max(state.currentQuestion - 1, 0),
    })),

  resetQuiz: () =>
    set(() => ({
      currentQuestion: 0,
      answers: Array(3).fill(null),
      score: 0,
      showScore: false,
    })),
}));

export const useProductStore = create<ProductState>((set) => ({
  productStates: {},
  setProductImage: (productId, image) => set((state) => ({
    productStates: {
      ...state.productStates,
      [productId]: { ...state.productStates[productId], currentImage: image }
    }
  })),

  setProductHover: (productId, hover) => set((state) => ({
    productStates: {
      ...state.productStates, [productId]: { ...state.productStates[productId], hover }
    }
  })),
  
  initializeProduct: (productId, initialImage) => set((state) => ({
    productStates: {
      ...state.productStates, [productId]: { currentImage: initialImage, hover: false }
    }
  })),
}));

export const useFilterStore = create<FilterState>((set) => ({
  selectedCountries: [],
  selectedColors: [],
  selectedPriceRange: null,

  setSelectedCountries: (countries) => set({ selectedCountries: countries }),
  setSelectedColors: (colors) => set({ selectedCololrs: colors }),
  setSelectedPriceRange: (range) => set({ selectedPriceRange: range }),

  clearFilters: () => set({
    selectedCountries: [],
    selectedColors: [],
    selectedPriceRange: null,
  }),
}));
    