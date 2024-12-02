import { useState, useEffect } from 'react';

export default function AddTodo({ addTodo, redaktTodo, redaktTodoItem }) {
  const [header, setHeader] = useState('');
  const [description, setDescription] = useState('');

  
  useEffect(() => {
    setHeader(redaktTodo?.header || '');
    setDescription(redaktTodo?.description || '');
  }, [redaktTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todo = { header, description };

    redaktTodo
      ? redaktTodoItem({ ...redaktTodo, ...todo }) 
      : addTodo(todo); 

   
   
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Todo header"
        value={header}
        onChange={(e) => setHeader(e.target.value)}
      />
      <input
        type="text"
        placeholder="Todo description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">{redaktTodo ? 'Save changes' : 'Add todo'}</button>
    </form>
  );
}