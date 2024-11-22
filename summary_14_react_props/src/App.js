import './App.css';

import Copyright from './components/copyright/Copyrgiht';
import TextField from './components/copyright/textField/TextField';
import Button from './components/button/Button';
import SimpleForm from './components/simpleForm/SimpleForm'
function App() {
const handleClick = () => {
  console.log('click');
};
  return (
    <div className="App simpleStyle">

    <TextField placeholder="some text" helpText='wow' errorText='helptext' label='text'saze='small'/>
    <Button buttonText="Click me" clickHandler={handleClick} />
    <SimpleForm />
      <Copyright/>
    </div>
  );
}

export default App;
