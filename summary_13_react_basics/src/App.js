import './App.css';

import Copyright from './components/copyright/Copyrgiht';
import Header from './components/Heder/Header';
import Managers from './components/Managers/Managers';
import { programe,detailed } from './data/persons';


function App() {

  const middleEartAreas = ['Moria', 'Rivendalle', 'Isengard', 'Rohan', 'Gondor', 'Hobbiton', 'Shire'];
  return (
    <div className="App simpleStyle">
      <Header />
      <Managers />

      <ul>
          {programe.map( el => <li key={el}>{el}</li>)
           }
        </ul>


      <div>
     { middleEartAreas.map ( el => <p key={el}>{el}</p> )}
        
     </div>
      
      <Copyright />
    
    </div>

  );
}

export default App;


//const strings = [
//   {name: 'Dvalin', race: 'Dwarf'},
//   {name: 'Balin', race: 'Dwarf'}
// ];

// return (
//   <div className="App simpleStyle">
//     <Header />
//     <Managers />
//     <Copyright/>
//     {
//       strings.map( el => {
//         return (
//           <div>
//             <h4>{el.name}</h4>
//             <p>{el.race}</p>
//           </div>
//         )
//       } )
//     }
//   </div>
// );