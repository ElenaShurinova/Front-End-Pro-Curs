import todosList from "../../TodoList";
import Styles from './TaskContainer.module.css'


function TaskContainer() {
  return (
    
        <div className='todoEl'>
       {todosList.map(elem =>(
        <div>
        <h2>{elem.title}</h2>
        <p>{elem.deadline}</p>
        <p>{elem.description}</p>
    
        </div>
      ))}
       </div>
      );
  
}

export default TaskContainer