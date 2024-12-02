export default function TodoCard({ todo,deleteTodo,toggleTodoStatus }) {

    const cardStyle = {
        backgroundColor: todo.done ? 'lightgreen' : 'none',
       
      };
    return (
      <div style={cardStyle} className='todoCard'>
        <h4>{todo.header}</h4>
        <p>{todo.description}</p>
        
          
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodoStatus(todo.id)}
           />
           <button onClick={() => deleteTodo(todo.id)}>Delete</button>
           


       
      </div>
    );
  }