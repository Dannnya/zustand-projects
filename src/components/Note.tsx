import { useState } from 'react';
import { useNotesStore } from '../store';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { AiOutlinePlus } from 'react-icons/ai';
import { Sidebar } from './Sidebar';

export const Note = () => {

  const { editorContent, noteColor, currentNoteIndex, setEditorContent, setNoteColor, addOrUpdateNote } = useNotesStore();

  return (
    <div className='h-screen'>
      {/* Sidebar */}
      <Sidebar />
      {/* Main Area */}
      <div className="w-2/3 p-8">
        {/* Text editor React Quill */}
        <ReactQuill
          placeholder='Write your note here...'
          theme='snow'
          className='h-96 bg-white mb-[3rem]'
          value={editorContent}
          onChange={setEditorContent}
        />
      </div>

      <div className="flex ml-[1rem] items-center mt-4 space-4">
        <input
          type='color'
          value={noteColor}
          onChange={e => setNoteColor(e.target.value)}
          className='w-10 h-10 p-1 border rounded-full'
        />
        <p>Choose a note color</p>
      </div>
      {/* Save Button */}
      <button
        onClick={addOrUpdateNote}
        className='ml-[1rem] text-white bg-blue-500 py-2 px-3 mt-4 rounded-lg hover:bg-blue-600 flex'>
        <AiOutlinePlus className='mr-3 mt-1' />
        {currentNoteIndex !== null ? 'Update Node' : 'Save Node'}
      </button>
    </div>
  )
};