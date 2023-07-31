/**
 author : Menaka Lakshan
 created : 27/07/2023
 */

import React from 'react';

const FormInput = ({label,type,placeHolder,onChange,value,name}) => {
    return (
        <div>
            <label htmlFor={label} className="block text-sm font-medium leading-6 text-gray-900">
                {label}
            </label>
            <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                        type={type || "text"}
                        name={name}
                        id="username"
                        value={value}
                        onChange={(e)=>onChange(e)}
                        autoComplete="username"
                        className="block flex-1 border-0 bg-transparent py-1.5 pl-2 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6 outline-none"
                        placeholder={placeHolder || "Place Holder"}
                    />
                </div>
            </div>
        </div>
    );
};

export default FormInput;