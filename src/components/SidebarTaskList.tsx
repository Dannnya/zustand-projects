import { FaPlus } from 'react-icons/fa';
import { Modal } from './Modal';
import { useTaskStore } from '../store'

function SidebarTaskList() {

  const { lists, workspaces, openListModal, openWorkspaceModal } = useTaskStore();

  return (
    <div className='w-60 bg-gray-100 flex flex-col'>
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h4 className="text-lg font-semibold flex items-center shadow-sm">
            Lists
          </h4>
          {/* Render Lists */}

          <ul>
            {lists.map((list, index) => (
              <li key={index}>
                <span>{list.emoji}</span>
                { list.name }
              </li>
            ))}
          </ul>

          <button onClick={ openListModal } className='flex justify-center items-center mt-[1rem]'>
            <FaPlus className='mr-2' /> List
          </button>
        </div>
        <div className="p-4">
          <h4 className="text-lg font-semibold flex items-center shadow-sm">
            Workspaces
          </h4>

          <ul>
            {workspaces.map((workspace, index) => (
              <li key={index}>
                <span>{workspace.emoji}</span>
                { workspace.name }
              </li>
            ))}
          </ul>

          {/* Render Workspaces */}
          <button onClick={ openWorkspaceModal } className='flex justify-center items-center mt-[1rem]'>
            <FaPlus className='mr-2' /> Workspaces
          </button>
        </div>
      </div>
      <Modal/>
    </div>
  )
}

export default SidebarTaskList
