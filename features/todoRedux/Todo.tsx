import React, { Fragment, useState } from 'react';
import type { RootState } from '../../app/store';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, toggleItem } from './todoSlice';

export const Todo = () => {
  const state = useSelector((state: RootState) => state.todo);
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const handleAdd = (e) => {
    e.preventDefault;
    value ? dispatch(addItem(value)) : '';
    setValue('');
  };

  return (
    <Fragment>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={(e) => handleAdd(e)}>Add Item</button>
      <ul>
        {state.map((item) => {
          return (
            <li key={item.id}>
              <span
                onClick={() => dispatch(toggleItem(item.id))}
                style={{
                  textDecoration: item.done ? 'line-through' : 'none',
                }}
              >
                {item.value}
              </span>
              <button onClick={() => dispatch(removeItem(item.id))}>
                Remove Item
              </button>
            </li>
          );
        })}
      </ul>
    </Fragment>
  );
};
