import axios from "axios";
import React, {useEffect, useState} from "react";
import style from '../css/productList.module.css'
import NavBar from "../navigation/nav";
import { Buffer } from "buffer";



function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchAllImages = async () => {
        try {
          const response = await axios.get('https://mern-server-khaki.vercel.app/api/product-list');
          setProducts(response.data);
        } catch (error) {
          console.error(error);
        }
      };
  
      fetchAllImages();
    }, []);
  
    return (
      <>
        <NavBar/>
        <p className={style.daily}>Daily Discover</p>
       <div className={style.main}>
       <div className={style.gridcontainer}>


       {products.map((product) => (
             <div key={product.id}>
       <div className={style.griditem}>
        <img className={style.image} src={`data:image/jpeg;base64,${product.data}`} alt={product.title} />
            <p className={style.title}>{product.title}</p>
            <p className={style.price}>$ {product.price}</p>
        </div>
        </div>
))}
    </div>
    </div>
</>
)

        
    
}

export default ProductList