import 'semantic-ui-css/semantic.min.css';
import React, { useState, useEffect } from 'react';


const ProductList = () =>{
  const [products,setProducts] = React.useState([]);
  useEffect(() => {
    setProducts(Seed.products);
  }, []);

  const handleVote =(id)=>{
    const updatedProducts = products.map((product)=>{
      if (product.id===id){
        return {...product,votes:product.votes+1};
      }
      return product;
    })
    setProducts(updatedProducts);
  }
  const sortedProducts = [...products].sort((a,b)=>b.votes-a.votes);
  const productComponents = sortedProducts.map((product)=>(
    <Product 
    key={'product-'+product.id}
    id={product.id}
    title={product.title}
    description = {product.description}
    url={product.url}
    votes={product.votes}
    submitterAvatarUrl={product.submitterAvatarUrl}
    productImageUrl={product.productImageUrl}
    handleVote = {handleVote}/>
  )); 
  return(
    <div className = "centered-container">
      <div className = 'ui unstackable items'>
        {productComponents}
      </div>
    </div>
    
  )
}

const Product =({id,title,description,url,votes,submitterAvatarUrl,productImageUrl,handleVote})=>{
  
  return(
    <div className = 'item'>
        <div className = 'image'>
          <img src ={productImageUrl}/>
        </div>
        <div className = 'middle aligned content'>
          <div className ='header'>
            <a>
              <i className = 'large caret up icon' onClick = {()=>handleVote(id)}/>
            </a>
            {votes}
          </div>
          <div className='description'>
            <a href = {url}>
              {title}
              </a>
            <p>
              {description}
            </p>
          </div>
          <div className='extra'>
            <span>Submitted by:</span>
            <img className = 'ui avatar image'src={submitterAvatarUrl}/>
          </div>
        </div>
      </div>
    );
}

export default ProductList;