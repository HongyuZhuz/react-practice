import 'semantic-ui-css/semantic.min.css';
function generateVoteCount() {
  return Math.floor((Math.random() * 50) + 15);
}
const products = [
  {
    id: 1,
    title: 'Yellow Pail',
    description: 'On-demand sand castle construction expertise.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: '/images/avatars/daniel.jpg',
    productImageUrl: '/images/products/image-aqua.png',
  },
  {
    id: 2,
    title: 'Supermajority: The Fantasy Congress League',
    description: 'Earn points when your favorite politicians pass legislation.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/kristy.png',
    productImageUrl: 'images/products/image-rose.png',
  },
  {
    id: 3,
    title: 'Tinfoild: Tailored tinfoil hats',
    description: 'We already have your measurements and shipping address.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/veronika.jpg',
    productImageUrl: 'images/products/image-steel.png',
  },
  {
    id: 4,
    title: 'Haught or Naught',
    description: 'High-minded or absent-minded? You decide.',
    url: '#',
    votes: generateVoteCount(),
    submitterAvatarUrl: 'images/avatars/molly.png',
    productImageUrl: 'images/products/image-yellow.png',
  },
];

const ProductList = () =>{
  const productComponents = products.map((product)=>(
    <Product 
    key={'product-'+product.id}
    id={product.id}
    title={product.title}
    description = {product.description}
    url={product.url}
    votes={product.votes}
    submitterAvatarUrl={product.submitterAvatarUrl}
    productImageUrl={product.productImageUrl}/>
  )); 
  return(
    <div className = 'ui unstackable items'>
      {productComponents}
    </div>
  )
}

const Product =({title,description,url,votes,submitterAvatarUrl,productImageUrl})=>{
  return(
    <div className = 'item'>
        <div className = 'image'>
          <img src ={productImageUrl}/>
        </div>
        <div className = 'middle aligned content'>
          <div className ='header'>
            <a>
              <i className = 'large caret up icon'/>
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