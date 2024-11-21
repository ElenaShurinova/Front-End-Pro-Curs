
export default function DwarfForm() {

    

    const handleSubmit = (event) => {
      event.preventDefault();
      console.log('Заявка принята!');
    };
  
    return (
      <div className="dwarfFormContainer">
        <form onSubmit={handleSubmit}>
          <div>
            <input 
              type="text" 
              name="name" 
              placeholder="Имя гнома" 
              maxLength="10" 
            />
          </div>
          <div>
            <input 
              type="number" 
              name="age" 
              placeholder="Возраст" 
            />
          </div>
          <div>
            <input 
              type="text" 
              name="weapon" 
              placeholder="Оружие" 
            />
          </div>
          <button type="submit">Подать заявку</button>
        </form>
      </div>
    );
  }
