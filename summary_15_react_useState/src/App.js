import { useState } from 'react';
import './App.css';
import TodoList from './components/todoList/TodoList';
import TodoStats from './components/todoList/TodoStats';
import AddTodo from './components/addTodo/AddTodo';
import Copyright from './components/copyright/Copyrgiht';
import {todos as todoArray} from './data/todos.js';
function App() {

  const [todos, setTodos] = useState(todoArray);

  const [redaktTodo, setRedaktTodo] = useState(null);

  const dropTodo = () => {
    setTodos( oldTodos => {
      return oldTodos.slice(0, -1);
    });
  }

  const deleteTodo = (id) => {
    setTodos((oldTodos) => oldTodos.filter(todo => todo.id !== id));
  };

  const addTodo = (newTodo) => setTodos((oldTodos) => [
    ...oldTodos,
    { ...newTodo, id: Date.now(), done: false }
  ]);

  const redaktTodoItem = (updatedTodo) => {
    setTodos((oldTodos) =>
      oldTodos.map((todo) =>
        todo.id === updatedTodo.id ? updatedTodo : todo
      )
    );
    setRedaktTodo(null); 
  };

 

  const toggleTodoStatus = (id) => {
    setTodos((oldTodos) =>
      oldTodos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <div className="App simpleStyle">

      <h2>Simple TodoList Project</h2>

      <AddTodo addTodo={addTodo} redaktTodo={redaktTodo} redaktTodoItem={redaktTodoItem} />
   

      <TodoList todos={todos} dropTodo={dropTodo} deleteTodo={deleteTodo}  toggleTodoStatus={toggleTodoStatus} />
      <TodoStats todos={todos}/>
     

      <Copyright />
    </div>
  );
}

export default App;