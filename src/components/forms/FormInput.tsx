/* This example requires Tailwind CSS v2.0+ */
import { useState } from 'react';

type FormInputProps = {
  label: string;
  id: string;
  placeholder: string;
}

export default function Example({label, id, placeholder}: FormInputProps) {
  const [input, setInput] = useState('')
  return (
    <div>
      <label htmlFor="name" className="block text-sm font-medium text-gray-700">
      {label}
      </label>
      <div className="mt-1 border-b border-gray-300 focus-within:border-rose-600">
        <input
          type="text"
          name={id}
          id={id}
          className="block w-full border-0 border-b border-transparent bg-gray-50 focus:border-rose-600 focus:ring-0 sm:text-sm"
          placeholder={placeholder}
          value={input}
          onChange={(e) => setInput(e.target.value)}kk
        />
      </div>
    </div>
  );
}