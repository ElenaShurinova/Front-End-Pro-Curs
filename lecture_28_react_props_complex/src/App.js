import './App.css';
import SimpleHeader from './components/simpleHeader/SimpleHeader';

import Copyright from './components/copyright/Copyrgiht';
import DwarfCard from './components/dwarfCard/DwarfCard';
import{dwarwersAttay, dwarwesArray} from './data/dwarwes.js'
import DwarfList from './components/dwarfList/DwarfList.jsx';
import DwarfForm from './components/dwarfForm/DwarfForm.jsx';


function App() {
  return (
    <div className="App simpleStyle">

<SimpleHeader
customStyles={{fontSize:'20px',color:'blue'}}
/>

<DwarfCard
dwarfData={{
  name:'Torin',
  nickname:'The Oakshield',
  age: 127,
  weapon: 'Sword'
}}
/>

<DwarfList
listHeaderText='brave dwarwes'

/>

<DwarfForm/>

      <Copyright/>
    </div>
  );
}

export default App;
