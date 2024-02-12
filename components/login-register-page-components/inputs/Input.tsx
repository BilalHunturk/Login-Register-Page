import clsx from 'clsx';
import React from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

interface InputProps {
    label: string;
    id: string;
    type?: string;
    required: boolean;
    pattern? : RegExp;
    message: string;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors
    disabled?: boolean
}

const Input: React.FC<InputProps> = ({ label, id, errors, pattern = undefined ,message,
    register, disabled, required, type }) => {
    return (
        <div>
            <label className='block text-sm font-medium text-gray-900'>{label}</label>
            <input
                id={id}
                type={type}
                autoComplete={id}
                disabled={disabled}
                
                {...register(id, { required , 
                    pattern : pattern ? { value: pattern, message: message } : undefined})}
                
                className={clsx(`block w-full rounded-md mt-2 border py-1.5 px-2.5
                text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300
                placeholder:text-gray-500`,
                    errors[id] && `focus:ring-red-600`,
                    disabled && `opacity-45 cursor-default`)}>

                </input>
                <p className='text-red-700'><small>{errors[id] && errors[id]?.message && `*${errors[id]?.message}`}</small></p>
        </div>
    )
}

export default Input