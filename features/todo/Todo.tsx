import React, { useState } from 'react';

export const Todo = () => {
  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([{ id: 0, body: 'nix da', done: false }]);

  const add = () => {
    value
      ? setTodos(() => [
          ...todos,
          { id: Math.random(), body: value, done: false },
        ])
      : null;
    setValue('');
  };

  const remove = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    setTodos([
      ...todos.slice(0, index),
      ...todos.slice(index + 1, todos.length),
    ]);
  };

  const toggle = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    todos[index].done = !todos[index].done;
    setTodos(() => [...todos]);
  };
  return (
    <div>
      <input onChange={(e) => setValue(e.target.value)} value={value} />
      <button onClick={(e) => add()}>add</button>
      <ul>
        {todos.map((item) => {
          return (
            <li key={item.id}>
              <span
                onClick={(e) => toggle(item.id)}
                style={{ textDecoration: item.done ? 'line-through' : '' }}
              >
                {item.body}
              </span>
              <button onClick={(e) => remove(item.id)}>rem</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
