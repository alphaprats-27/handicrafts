import React,{useState, useEffect} from 'react';

import axios from 'axios';

function HomeScreen(props){

  const [products, setProduct]  = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axios.get("api/products");
      console.log(data);
      setProduct(data);
    }
    fetchData();
    return () => {
      //
    }
  }, [])
    return (
        
        <div>
        <ul className="products">
   
            {
              products.map(product => 
              <li key={product._id}>
             
              
              <div className="product">
              <a href={'/product/' + product._id}>
              <img
                className="product-image"
                src={product.image}
                alt="product"
              />
            </a>
                  <div className="product-name">
                  <a href={'/product/' + product._id}>{product.name}</a>
                </div>
                  <div className="product-brand">{product.brand}</div>
                   <div className="product-price"> ${product.price}</div>
                   <div className="product-rating">{product.rating} Stars {product.numReviews}</div>
              </div>
              
          </li>)}
          
               

               
            </ul>
            
            </div>
            
    );


}

export default HomeScreen;