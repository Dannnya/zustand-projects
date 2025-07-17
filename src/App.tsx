// import { Expense } from './components/Expense';
// import { FormBuilder } from './components/FormBuilder';
// import { Meals } from './components/Meals';
// import { MdMoreVert } from 'react-icons/md';
// import { MainArea } from './components/MainArea';
// import { Note } from './components/Note';
// import SidebarTaskList from './components/SidebarTaskList';
// import { PasswordGenerator } from './components/PasswordGenerator';
// import { RecipeApp } from './components/RecipeApp';
// import { TodoList } from './components/TodoList';
// import { useTaskStore } from './store'
// import QiuzLayout from './components/QiuzLayout';
import ProductCart from './components/ProductCart.js';
import SidebarProducts from './components/SidebarProducts';
import { data } from './db/data.js';
import { useFilterStore } from './store.js';

interface Product {
  id: string;
  country: string;
  img: Record<string, string>;
  price: number;
};

function App() {
  // const { todos, editIndex, editText, dropdownIndex, handleEdit, handleDropdownClick,
  //   deleteTodo, setEditIndex, setEditText, handleUpdate } = useTaskStore();
    const {
      selectedCountries,
      selectedColors,
      selectedPriceRange
    } = useFilterStore((state) => state);
  
    const filteredData = data.filter((item: Product) => {
    const matchesColor =
      selectedColors.length === 0 ||
      Object.keys(item.img).some((color) => selectedColors.includes(color));

    const matchesCountry =
      selectedCountries.length === 0 ||
      selectedCountries.includes(item.country);

    const matchesPrice = selectedPriceRange
      ? item.price >= selectedPriceRange.min &&
        item.price <= selectedPriceRange.max
      : true;

    return matchesColor && matchesCountry && matchesPrice;
  });
  return (
    <>
    {/* <div className='flex h-screen'> */}
      {/* <RecipeApp /> */}

      {/* <Expense /> */}

      {/* <div className='flex items-center justify-center pt-10'>
        <PasswordGenerator />
      </div> */}

      {/* <Meals /> */}

      {/* <FormBuilder /> */}

      {/* <TodoList /> */}

      {/* <Note /> */}

      {/* <SidebarTaskList />

      <div className="flex-1 p-6">
        <MainArea />
        <div className="mt-6">
          <h4 className='text-xl font-semibold mb-4 ml-[2rem]'>
            Todo List
          </h4>

          <ul className="dist pl-5">
            {todos.map((todo, index) => (
              <li key={index} className='mb-2 ml-[2rem]'>
                {editIndex === index ? (
                  <div className='flex items-center'>
                    <input
                      type='text'
                      value={editText}
                      onChange={(e) => setEditText(e.target.value)}
                      className='border border-300 p-1 rounded-lg mr-3'
                    />

                    <button
                      className='bg-green-500 text-white px-2 py-1 rounded-lg mr-2'
                      onClick={() => handleUpdate(index)}
                    >
                      Update
                    </button>

                    <button
                      className='bg-gray-500 text-white px-2 py-1 rounded-lg'
                      onClick={() => setEditIndex(null)}
                    >
                      Remove
                    </button>
                  </div>
                ) : (
                    <div className="relavite flex justify-between items-center">
                      <div>
                        <span className='mr-4'>
                          <strong>{todo.text}</strong> ( List: {todo.list} )
                          Workspace: { todo.workspace }
                        </span>
                      </div>

                      <div className="flex items-center">
                        <MdMoreVert className='cursor-pointer' size={24} onClick={() => handleDropdownClick(index)} />
                        {dropdownIndex === index && (
                          <div className="absolute right-0 mt-3 bg-white border rounded-lg shadow-lg">
                            <button
                              onClick={() => handleEdit(index)}
                              className='block px-4 py-2 text-gray-700 hover: bg-gray-100 w-full text-left'>
                              Update
                            </button>

                            <button
                              className='block px-4 py-2 text-gray-700 hover: bg-gray-100 w-full text-left'
                              onClick={() => deleteTodo(index)}
                            >
                              Delete
                            </button>
                          </div>
                        )} 
                      </div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>

      <QiuzLayout /> */}
      
      <SidebarProducts />
      <div className="p-4 flex flex-wrap justify-center items-center">
        {filteredData.map((product: any) => (
          <ProductCart key={product.id} product={product} />
        ))}
      </div>
    </>
  )
}

export default App;
