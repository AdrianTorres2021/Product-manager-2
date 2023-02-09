
import { Link } from 'react-router-dom';

const ProductList = props => {
    return(
        <div>
            <hr></hr>
            <h1>All Products</h1>
            {props.product.map((product, index)=>{
                //console.log(product);
                
                return( 
                <Link to={`/product/${product._id}`}>
                    <p>{product.title}</p>
                </Link>
                )
            }
            
            )}
        </div>
    )
}

export default ProductList