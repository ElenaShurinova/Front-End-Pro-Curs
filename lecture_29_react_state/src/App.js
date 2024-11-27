import './App.css';

import Copyright from './components/copyright/Copyrgiht';
import SimpleCounter from './components/copyright/simpleCounter/SimpleCounter';

import SimpleInput from './components/simpleInput/SimpleInput';
import SimpleForm from './components/simpleForm/SimpleForm';

function App() {

  return (
    <div className="App simpleStyle">
      <SimpleCounter/>
      <Copyright/>
      <SimpleInput/>
      <SimpleForm/>
    </div>
  );
}

export default App;