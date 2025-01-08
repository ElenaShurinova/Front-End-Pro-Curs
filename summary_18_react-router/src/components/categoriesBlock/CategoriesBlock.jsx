import React, { useEffect, useState } from 'react';
import {useNavigate} from "react-router";

import styles from'./CategoriesBlock.css';

export default function CategoriesBlock  ()  {
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(response => response.json())
            .then(data => {
                setCategories(data.slice(0, 10));
            },[])})
 
            return (
                <div className={styles.categoriesContainer}>
                    {  categories.map(el => <div key={el.slug} className={styles.categoryChip}
                    onClick={()=> navigate('/products/' + el.slug)}>
                        <p>{el.name}</p>
                        </div>)

                    }
                   
                </div>
            )
        }

    
    


    