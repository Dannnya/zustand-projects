import React from 'react';

interface FormFieldProps {
    field: {
        label: string;
        type: 'text' | 'number' | 'password' | 'textarea' | 'date' | 'file';
        value: string;
    },
    index: number;
    onUpdate: (
        index: number,
        updateField: {
            label: string;
            type: 'text' | 'number' | 'password' | 'textarea' | 'date' | 'file';
            value: string;
        },
    ) => void;
    onRemove: (index: number) => void;
};


export const FormField: React.FC<FormFieldProps> = ({ field, index, onUpdate, onRemove }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        onUpdate( index, { ...field, value: e.target.value })
    };

    const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        onUpdate(index, {
            ...field, value: e.target.files ? Array.from(e.target.files)
                .map(file => file.name).join(', ') : '',
        })
    }

    return (
    <div>
          <label>{field.label}</label>
          {field.type === 'textarea' ? (
              <textarea value={field.value} onChange={ handleChange}/>
          ) : field.type === 'file' ? (
          <input type='file' onChange={ handleFileChange }/>
              ) : (
                      <input type={field.type} value={field.type === 'file' ? '' : field.value}
                      onChange={ handleChange }
                      />
          )}

          <button type='button' onClick={() => onRemove(index)}
          >
              Remove
          </button>
    </div>
  )
}

export default FormField
