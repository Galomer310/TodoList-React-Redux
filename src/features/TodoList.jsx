import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from './actions';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          <span onClick={() => dispatch(toggleTodo(index))}>{todo.text}</span>
          <button onClick={() => dispatch(removeTodo(index))}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
