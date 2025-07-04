import { useState, type ChangeEvent } from 'react';
import { useFormFields } from '../store';

interface FieldsType {
    label: string;
    type: 'text' | 'number' | 'password' | 'textarea' | 'date' | 'file';
    value: string;
}

export const FormBuilder = () => {

    const { formFields, addField, removeField, updateField, resetForm } = useFormFields();
    const [ newFields, setNewFields ] = useState<FieldsType>({
        label: '',
        type: 'text',
        value:'',
    });

    const handleAddField = () => {
        addField(newFields);
        setNewFields({ label: '', type: 'text', value: '' });
    };

    const handleFieldChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setNewFields(prev => ({
            ...prev, [name]: value
        }));
    };

    return (
        <div>
            <h4>Form Builder</h4>
            <div>
                <input
                    type='text'
                    name='label'
                    placeholder='Field label'
                    value={newFields.label}
                    onChange={ handleFieldChange }
                />

                <select
                    name='type'
                    value={newFields.type}
                    onChange={ handleChange }
                    
                >
                    <option value='text'>Text</option>
                    <option value='number'>Number</option>
                    <option value='password'>Password</option>
                    <option value='textarea'>Textarea</option>
                    <option value='date'>Date</option>
                    <option value='file'>File</option>
                </select>

                <div>
                    <button type='button' onClick={handleAddField}>Add Field</button>
                    <button type='button' onClick={resetForm}>Reset Form</button>
                </div>
            </div>

            <form>
                {formFields.map((field, index) => (
                    <FormField
                        key={index}
                        field={field}
                        onUpdate={handleFieldUpdate}
                        onRemove={ handleFieldRemove }
                    />
                ))}
            </form>
        </div>
    )
};
