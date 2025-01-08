import { useDispatch, useSelector } from 'react-redux';
import { dropTodo } from '../../redux/actions/todoActions';

export default function TodoList() {

  const todos = useSelector( state => state.todos.data );
  const dispatch =useDispatch();

  return (
    <div>
      {todos.map(el => <div key={el}>
      
      <p> {el}</p>
      <button onClick={() =>{dispatchEvent(dropTodo(el))}}>Drop</button>
     </div>)}
    </div>
  )
}