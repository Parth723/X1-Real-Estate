'use client';

import React, { useState } from 'react';

interface DropdownProps {
  options: { id: number | string; label: string }[];
  selectedValue: number | string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  placeholder?: string;
}

const Dropdown = ({ options, selectedValue, onChange, placeholder = '-- Select an option --' }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionSelect = (id: number | string) => {
    onChange({ target: { value: id } } as React.ChangeEvent<HTMLSelectElement>);
    setIsOpen(false); 
  };

  return (
    <div className="dropdown ">
      <div tabIndex={0} role="button" className="btn m-1 w-40" onClick={toggleDropdown}>
        {selectedValue ? options.find(option => option.id === selectedValue)?.label : placeholder}
      </div>
      {isOpen && (
        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
          {options.map(option => (
            <li key={option.id}>
              <a
                href="#"
                className="text-black hover:bg-blue-100"
                onClick={() => handleOptionSelect(option.id)}
              >
                {option.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;
