import './App.css';


import Copyright from './components/copyright/Copyrgiht'
import SimpleForm from './components/simpleForm/SimpleForm';
import TodoList from './components/todoList/TodoList';
import { useEffect,useRef, useState } from 'react';

function App() {

  const inputRef = useRef(null);

  const [todos, setTodos] = useState([]);

  const dropTodoById = (todoId) => {
    setTodos( old => old.filter(todo => todo.id !== todoId ) );
  }

  const checkTodo = (todoId) => {
    setTodos( old => old.map( todo => {

      if (todo.id === todoId) {
        return {...todo, completed: !todo.completed}
      }
      return todo;
    }));
  }

 

  useEffect( () => {
    fetch('https://dummyjson.com/todos')
      .then( resp => resp.json())
      .then( data => {
        setTodos(data.todos)
      });
      inputRef.current.focus();
  }, []);


  const handleButtonClick = () => {
    console.log( inputRef.current.value);
  }

 
 const counterRef = useRef(0)
  const counterref = () => {
    counterref.current += 1;  
    console.log('нажми:', counterref.current);
  }


  return (
    <div className="App simpleStyle">
    < input placeholder='new todo' type='text' ref={inputRef}/>
    <button onClick={handleButtonClick}> Input Value</button>
    
    <button clickHandler={counterref}>Click me!</button>  
    
        <div style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
          <input type='text' placeholder='Enter your name' name='name'/>
          <input type='phone' placeholder='Enter your phone' name='phone'/>
          <button>Click me!</button>
        </div>
        <SimpleForm/>
        <TodoList todos={todos} dropTodoById={dropTodoById} checkTodo={checkTodo}/>
        <Copyright/>
    </div>
  );
}

export default App;