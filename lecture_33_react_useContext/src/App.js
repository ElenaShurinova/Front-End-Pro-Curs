import './App.css';


import Copyright from './components/copyright/Copyrgiht'
import { ThemeContext } from './context/ThemeContext';
import SimpleCounter from './components/simpleCounter/SimpleCounter';
import { CounterContext } from './context/CounterContext';
import TodoList from './components/todoList/TodoList';
import { useEffect, useState } from 'react';
import Button from './components/button/Button';

function App() {

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
  }, []);
  const [counter, setCount] =useState(0);
  const incrementCount = () => setCount(counter + 1);
  const decrementCount = () => setCount(counter - 1);
  



  const [theme, setTheme]= useState('light');
  const switchTheme = () => {
    setTheme(old => old === 'light' ? 'dark' : 'light');
  }



  return (
    <div className="App simpleStyle">
       <ThemeContext.Provider value={theme}>
        <Button clickHandler={switchTheme} btnText='Switch theme'></Button>
        <CounterContext.Provider value={counter}>
        <SimpleCounter />
          <button onClick={incrementCount}>Increment</button>
          <button onClick={decrementCount}>Decrement</button>
        <TodoList todos={todos} dropTodoById={dropTodoById} checkTodo={checkTodo}/>
        </CounterContext.Provider>
        <Copyright />
        <Button btnText="Simple btn" clickHandler={() =>{}}/>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;