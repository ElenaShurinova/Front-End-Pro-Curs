import {useEffect,useState} from "react"
import Productlist from "../components/productlist/ProductList";

export default function ProductsPage() {
    const[products, setProducts] =useState([]);
    useEffect( ()  => {
        fetch('https://dummyjson.com/products')
        .then (resp => resp.json())
        .then ( data => setProducts (data.products));
    }, [] );
    return(
        <div className ="productPage">
            <h2>See our great products!</h2>
            <Productlist products={products}/>
        </div>
    )
}