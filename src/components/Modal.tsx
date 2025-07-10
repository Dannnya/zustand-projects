import { FaTimes } from 'react-icons/fa';
import { useTaskStore } from '../store';

export const Modal = () => {
    const { 
        isListModalOpen,
        isWorkspaceModalOpen,
        modalName,
        modalEmoji,
        modalType,
        setModalEmoji,
        setModalName,
        handleSaveModal,
        closeListModal,
        closeWorkspaceModal,
    } = useTaskStore();

    const handleSave = () => {
        handleSaveModal()
    };

    const handleClose = () => {
        if (modalType === 'List') { 
            closeListModal();
        } else if (modalType === 'Workspace') {
            closeWorkspaceModal();
        }
    }

    if (!isListModalOpen && !isWorkspaceModalOpen) return null;

    return (
        <div className='fixed inset-0 flex items-center justify-center bg-gray-900
        bg-opacity-50 z-50'>
            <div className="bg-white p-6 rounded-lg w-80">
                <div className="flex justify-between items-center mb-4">
                    <h4 className='text-xl font-bold'>{`Create New ${modalType}`}
                    </h4>
                    <button onClick={ handleClose }><FaTimes/></button>
                </div>
                <input
                    type='text'
                    value={modalName}
                    onChange={e => setModalName(e.target.value)}
                    placeholder={`Enter ${modalType} name`}
                    className="border border-gray-300 p-2 rounded-lg w-full mb-4"
                />

                <input
                    type='text'
                    value={modalEmoji}
                    onChange={e => setModalEmoji(e.target.value)}
                    placeholder='Enter emoji (optional)'
                    className="border border-gray-300 p-2 rounded-lg w-full mb-4"                    
                />

                <button onClick={ handleSave }>Save</button>


            </div>
        </div>
    )
};
