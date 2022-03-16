import React from 'react';

function Filter({ id, text }) {
  return (
    <div className={id}>
      <label htmlFor={id}>
        <input defaultChecked id={id} name="filter" type="radio" value={id} />
        <span>{text}</span>
      </label>
    </div>
  );
}

export default Filter;
