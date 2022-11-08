import * as React from 'react';
import { Todo } from './features/todoRedux/Todo';
import { Counter } from './features/counterRedux/Counter';
import { useSelector } from 'react-redux';
import type { RootState } from './app/store';

export default function App() {
  const todos = useSelector((state: RootState) => state.todo);
  const count = useSelector((state: RootState) => state.count.count);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {todos.map((item) => {
        return <div key={item.id}>{item.id}</div>;
      })}
      <p>Start editing to see some magic happen :)</p>
      <Todo />
      {count}
      <Counter />
    </div>
  );
}
