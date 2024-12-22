import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from './actions';

const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo({ text, completed: false }));
      setText('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo..."
      />
      <button onClick={handleAddTodo}>Add</button>
    </div>
  );
};

export default TodoInput;
