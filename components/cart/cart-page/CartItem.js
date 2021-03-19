import { useState } from 'react';
import { updateCart } from '../../../function';

const CartItem = ({item, setCart, handleRemoveProductClick}) => {

    const [productCount, setProductCount ] = useState(item.qty);

    const handleQtyChange = (event) => {
        if(process.browser) {
            const newQty = event.target.value;
            setProductCount(newQty);

            let existingCart = localStorage.getItem('woo-next-cart');
            existingCart = JSON.parse(existingCart);

            const updatedCart =  updateCart(existingCart, item, false, newQty);

            setCart(updatedCart);

        }
    };

    return (
        <tr className="woo-next-cart-item" key={item.databaseId}>
            <th className="woo-next-cart-element woo-next-cart-el-close">
                <span className="woo-next-cart-close-icon" onClick={(event) => handleRemoveProductClick(event, item.databaseId)}>
                    <i className="fa fa-times-circle"></i>
                </span>
            </th>
            <td className="woo-next-cart-element">
                <img width="64" src={item.image.sourceUrl} srcSet={item.image.srcSet} alt={item.image.alt} />
            </td>
            <td className="woo-next-cart-element">{item.name}</td>
            <td className="woo-next-cart-element">{item.price.toFixed(2)}</td>
            <td className="woo-next-cart-element">
                <input 
                    type="number"
                    min="1"
                    className="woo-next-cart-qty-input"
                    value={productCount}
                    onChange={handleQtyChange}
                    >
                </input>  
            </td>
            <td className="woo-next-cart-element">{item.totalPrice.toFixed(2)}</td>
        </tr>
    )
}

export default CartItem;