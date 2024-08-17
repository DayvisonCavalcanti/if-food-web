import React from 'react';

const FormSelect = ({ options, value, onChange, label, id, name }) => {
  return (
    <div >
      {label && <label htmlFor={id} className="block text-gray-700 text-sm font-bold mb-2">{label}</label>}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className=" text-center  px-3 py-2 rounded-xl  "
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
