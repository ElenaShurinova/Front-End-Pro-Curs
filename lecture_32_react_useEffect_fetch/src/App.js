import './App.css';


import Greeting from './components/greeting/Greeting';
import Copyright from './components/copyright/Copyrgiht'
import TodoList from './components/todoList/TodoList';
import TodoStats from './components/todoList/TodoStats';
import { useState,useEffect } from 'react';

function App() {

  const [todos, setTodos] = useState( []);

  const [isCatch, setIsCatch] = useState(false);

  const [error, setError] = useState(null); // Добавляем состояние для ошибки

  useEffect(() => {
    setIsCatch (true);
    fetch('https://dummyjson.com/todos')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setIsCatch (false);
        // Устанавливаем полученные дела в состояние
        setTodos(data.todos);
      })

        .catch(error => {
          setError(true);
        
      })
      .finally (() => {
        setIsCatch(false);
      })
      
  }, []); // Пустой массив зависимостей означает, что эффект выполнится только один раз при монтировании



  const dropTodoById = (todoId) => {
    setTodos( old => old.filter(todo => todo.id !== todoId ) );
  }

  const checkTodo = (todoId) => {
    setTodos( old => old.map( todo => {

      if (todo.id === todoId) {
        return {...todo, done: !todo.done}
      }
      return todo;
    }));
  }

  return (
    <div className="App simpleStyle">
      <Greeting />
      {isCatch ? (
        <p>Пожалуйста, подождите - идет загрузка</p>
      ) : error ? ( 
        <p>{error}</p>
      ) : (
        <>
          <TodoList
            todosHeader={'Simple TodoList'}
            todos={todos}
            dropTodoById={dropTodoById}
            checkTodo={checkTodo}
          />
          <TodoStats todos={todos} />
        </>
      )}
      <Copyright />
    </div>
  );
}

export default App;