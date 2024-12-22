import React from 'react';
import TodoInput from './features/TodoInput';
import TodoList from './features/TodoList';

const App = () => {
  return (
    <div>
      <h1>Todo List</h1>
      <TodoInput />
      <TodoList />
    </div>
  );
};

export default App;
