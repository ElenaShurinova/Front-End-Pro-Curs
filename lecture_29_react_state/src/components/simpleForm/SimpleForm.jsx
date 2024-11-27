import  { useState } from 'react';

export default function SimpleForm  ()  {
  
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');

  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePositionChange = (event) => {
    setPosition(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(` ИМЯ: ${name}, ДОЛЖНОСТЬ: ${position}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Имя:
          <input value={name} onChange={handleNameChange} />
        </label>
      </div>
      <div>
        <label>
          Должность:
          <input  value={position} onChange={handlePositionChange} />
        </label>
        
      </div>
      
      <button>Отправить</button>
    </form>
  )
}

