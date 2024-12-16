import './App.css';

import { Route, Routes } from 'react-router';
import Home from './components/home/Home';
import About from './components/about/About';
import NavMenu from './components/navMenu/NavMenu';

function App() {

  return (
    <div className="App">
      <div className='mainPageContainer'>
        <NavMenu/>
      <h2>This header will be rendered in All cases, independently of the route</h2>
      <h2>This page uses react-router!</h2>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/paragraph" element={<p>This is just a paragraph!</p>}></Route>
      </Routes>
      </div>
  
 </div>
  );
}

export default App;