import React from 'react';

function Filter({ value, onChange }) {
  return (
    <div>
      <label htmlFor="filter">Find contacts by name:</label>
      <input
        type="text"
        id="filter"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Filter; 