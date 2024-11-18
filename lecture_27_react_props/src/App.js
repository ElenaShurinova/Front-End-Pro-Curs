import logo from './logo.svg';
import './App.css';

import Copyright from './components/copyright/Copyrgiht';
import SimpleParagraph from './components/simpleParagraph/SimpleParagraph';
import DrafCardContainer from './components/drafCardContainer/DrafCardContainer';
import { dwarwesArray } from './data/dwarwes';
import SimpleHeader from './components/simpleHeader/SimpleHeader';

function App() {
  return (
    <div className="App simpleStyle">
      
      <SimpleHeader
      headerText="Simple header text"/>
      
      {dwarwesArray.map( el => {
      return(

      <DrafCardContainer
      key={`${el.age.name} ${el.nickname}`}
       name={el.name} nickname={el.nickname} age={el.age} primaryWeapon={el.weapon}/> 
      )
})}
<SimpleParagraph textContent="Staticstring" textColor='green'/>
<Copyright/>
    </div>
    

  );
}

export default App;
