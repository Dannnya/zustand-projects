import { FaPlus } from 'react-icons/fa';
import { Modal } from './Modal';
import { useTaskStore } from '../store'

function SidebarTaskList() {

  const { openListModal, openWorkspaceModal } = useTaskStore();

  return (
    <div className='w-60 bg-gray-100 flex flex-col'>
      <div className="flex-1 overflow-y-auto">
        <div className="p-4">
          <h4 className="text-lg font-semibold flex items-center shadow-sm">
            Lists
          </h4>
          {/* Render Lists */}
          <button onClick={ openListModal } className='flex justify-center items-center mt-[1rem]'>
            <FaPlus className='mr-2' /> List
          </button>
        </div>
        <div className="p-4">
          <h4 className="text-lg font-semibold flex items-center shadow-sm">
            Workspaces
          </h4>

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
