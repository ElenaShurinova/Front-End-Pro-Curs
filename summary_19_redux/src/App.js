import './App.css';
import { Routes, Route, Link } from "react-router";

import Copyright from './components/copyright/Copyrgiht.jsx';
import Home from './pages/Home.jsx';
import ProductsPage from './pages/ProductsPage.jsx';

import { useDispatch } from 'react-redux';
import { switchThemeAction } from './redux/actions/themeAction.js';

function App() {

  const theme = useSelector(state => state.theme.theme);  // Доступ к теме из Redux
  const dispatch = useDispatch();

  const switchThemeHandler = () => {
    dispatch(switchThemeAction());  // Переключение темы
  };

  return (
    <div className="App">
      <h2>Introduction into Redux state manager</h2>
      
      <button onClick={switchThemeHandler}>
          Переключить на {theme === 'light' ? 'темную' : 'светлую'} тему
        </button>
        <p>Текущая тема: {theme}</p>
      <div className='mainPageContainer'>
        <div className='navBlock'>
          <Link to='/'>Home</Link>
          <Link to='/products'>Products</Link>
        </div>

      
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </div>
      <Copyright />
    </div>
  );
}

export default App;