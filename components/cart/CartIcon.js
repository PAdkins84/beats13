import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Link from 'next/link';

const CartIcon = () => {
    const [cart, setCart ] = useContext( AppContext );
    const productCount = (null !== cart && Object.keys(cart).length) ? cart.totalProductsCount : '';
    const totalPrice = (null !== cart && Object.keys(cart).length) ? cart.totalProductsPrice : '';

    return (
        <React.Fragment>
            <Link href="cart">
                <a>
                    <div class="woo-next-cart-wrap">
                        {totalPrice ? <span className="woo-next-cart-price">£{totalPrice.toFixed(2)}</span> : ''}
                        <span className="woo-next-cart-icon-container">
                            <i className="fa fa-shopping-cart woo-next-cart-icon" />
                            {productCount ? <span className="woo-next-cart-count">{productCount}</span> : ''}
                        </span>
                    </div>
                </a>
            </Link>
        </React.Fragment>
    )

}

export default CartIcon;