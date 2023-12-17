import 'semantic-ui-css/semantic.min.css';
import * as React from 'react';


const ProductList = () =>{
  const p = Seed.products.sort((a,b)=>(b.votes-a.votes));
  const [products,setProducts] = React.useState(p);

  const handleVote =(id)=>{
    console.log(id);
    const p = products.map((product)=>{
      if (product.id ===id) {
        return Object.assign({},product,{
          votes:product.votes+1,
        });
      }
      else return product;
    });

    setProducts(p)

  }
  const productComponents = products.map((product)=>(
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
    <div className = 'ui unstackable items'>
      {productComponents}
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