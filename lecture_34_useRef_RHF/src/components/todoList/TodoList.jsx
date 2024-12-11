import React, { useRef, useEffect } from 'react';
import TodoCard from "../todoCard/TodoCard";

export default function TodoList( {todos, todosHeader, dropTodoById, checkTodo} ) {


  const containerRef = useRef(null);

  useEffect(() => {
     console.log('Container sizes:', containerRef.current.offsetWidth, containerRef.current.offsetHeight);
    }, []);

  return (
    <div className='todoListContainer'>
      <h3>{todosHeader}</h3>
      <div className='todosContainer' ref={containerRef}>
      <div className='todosContainer'>
        { todos.map( todo => <TodoCard dropTodoById={dropTodoById} checkTodo={checkTodo} key={todo.id} todo={todo}/>)}
      </div>
      </div>
    </div>
  );
}