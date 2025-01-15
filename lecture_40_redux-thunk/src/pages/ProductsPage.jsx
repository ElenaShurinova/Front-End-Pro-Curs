import { useEffect, useState } from "react"

import { useDispatch, useSelector } from "react-redux";  // импортируем useDispatch и useSelector
import { fetchProducts } from "../redux/slices/productsSlice";  // импортируем экшен
import ProductList from "../components/productList/ProductList";
import ProductFilter from "../components/productList/ProductFilter";

export default function ProductsPage() {

  const dispatch = useDispatch();  // создаем dispatch
 

  // MOCK DATA! SHOULD BE CHANGED!
  const status = 'loading';
  const fetching = false;
  const products = [];
  const error = '';

  useEffect( () => {
    fetch('https://dummyjson.com/products')
      .then(resp => resp.json())
      .then(data => {dispatch (fetchProducts(data.products))});
     
  }, [])

  return (
    <div className="productPage">
      <h2>See our great products!</h2>
      { fetching && <p>Please wait!</p>}
         {/* Показываем сообщение при загрузке */}
         {status === 'loading' && <p>Please wait, loading products...</p>}

         {/* Показываем ошибку, если она произошла */}
          {error && <p>Error: {error}</p>}
      <ProductFilter />
      <ProductList products={products} />
      {error && <p>Error: {error}</p>}
    </div>
  )
}