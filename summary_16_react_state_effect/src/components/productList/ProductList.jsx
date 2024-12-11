import { useEffect, useState } from "react";
import ProductCard from "../productCard/ProductCard";
import styles from './ProductList.module.css'

import { filterProducts } from "../utils/productUtils";
import ProductFilter from "../productFilter/ProductFilter";

export default function ProductList() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect( () => {
    fetch('https://dummyjson.com/products')
      .then(resp => resp.json())
      .then(data => setProducts(data.products));
      setProducts(data.products);
      setFilteredProducts(data.products);
    
  }, [])

  const applyFilters = (filters) => {
    const filtered = filterProducts(products, filters);
    setFilteredProducts(filtered);
  };


  return (
    <div className={styles.ProductListContainer}>
       <ProductFilter controlledFilters={applyFilters} />
      {filteredProducts.map( (prod) => <ProductCard key={prod.id} product={prod}/>)}
    </div>
  );
}