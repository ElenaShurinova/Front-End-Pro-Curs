import TodoCard from "./TodoCard";

export default function TodoList( {todos,dropTodo,deleteTodo,toggleTodoStatus} ) {

  return (
    <div>
      { todos.map( todo => <TodoCard todo={todo} key={todo.id} deleteTodo={deleteTodo} toggleTodoStatus={toggleTodoStatus}/> ) }
      <button onClick={dropTodo}>Drop last todo</button>
      
    </div>
  );
}