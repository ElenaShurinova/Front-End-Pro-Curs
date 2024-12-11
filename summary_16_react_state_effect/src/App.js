import './App.css';


import Copyright from './components/copyright/Copyrgiht'
import ProductList from './components/productList/ProductList'
import ProductFilter from './components/productFilter/ProductFilter'
function App() {

  return (
    <div className="App simpleStyle">
      <h2>Products in the Store</h2>
      <ProductList />
      <ProductFilter />
      <Copyright/>
    </div>
  );
}

export default App;