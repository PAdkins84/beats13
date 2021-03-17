import Link from 'next/link'
import AddToCartButton from '../components/cart/AddToCartButton';

const Products = ( props ) => {
    const { product } = props;
    return (
            <div className="row card mb-3">
                <h3 className="card-header">{product.name}</h3>
                <Link as={`/product/${product.slug}-${product.databaseId}`} href={`/product?slug=${product.slug}-${product.databaseId}`}>
                    <a>
                        <img style={{height: '200px', width: '300px', display: 'block'}}
                            src={product.image.sourceUrl}
                            alt="Product image"/>
                    </a>
                </Link>
                <div className="card-body text-center">       
                    <h6 className="card-subtitle text-muted mb-2">{product.price}</h6>
                    <AddToCartButton product={product} />
                </div>              
            </div>
    )
}

export default Products