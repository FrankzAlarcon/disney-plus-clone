import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '@actions/actions';

function Filter({ id, text }) {
  const dispatch = useDispatch();
  return (
    <div className={id} onClick={() => dispatch(setFilter(id))} role="button">
      <label htmlFor={id}>
        <input defaultChecked={id === 'all'} id={id} name="filter" type="radio" value={id} />
        <span>{text}</span>
      </label>
    </div>
  );
}

export default Filter;
