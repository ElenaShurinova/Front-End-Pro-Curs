import {useState} from 'react'; 
// import { addTodo } from '../../redux/actions/todoActions.js'; 
import { useDispatch } from 'react-redux'; 
import { addTodo } from '../../redux/slices/todosSlice'; 
 
export default function AddTodo() { 
 
  const [todo, setTodo] = useState(''); 
 
  const handleTodoChange = (e) => { 
    setTodo(e.target.value); 
  } 
 
  const dispatch = useDispatch(); 
 
  const btnClickHandler = () => { 
    if (todo) dispatch(addTodo()); 
  } 
 
  return ( 
    <div> 
      <input type='text' placeholder='Todo name' value={todo} onChange={handleTodoChange}/> 
      <button onClick={btnClickHandler}>Add Todo</button> 
    </div> 
  ) 
}