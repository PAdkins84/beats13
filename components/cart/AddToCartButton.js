import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import React from 'react';
import Link from 'next/link';
import { addFirstProduct, updateCart } from '../../function';


const AddToCartButton = (props) => {

    const { product } = props;
    const [ cart, setCart ] = useContext(AppContext);
    const [ showViewCart, setShowViewCart ] = useState(false);

    const handleAddToCartClick = () => {
        if(process.browser) {
            let existingCart = localStorage.getItem('woo-next-cart');

            // If cart has item(s) already, then update the existing
            if(existingCart) {
                existingCart = JSON.parse( existingCart );
                const qtyToBeAdded = 1;
                const updatedCart = updateCart(existingCart, product, qtyToBeAdded);
                setCart(updatedCart);
            } else {
                // Add a new item.  Create empty array
                const newCart = addFirstProduct( product );
                setCart(newCart);
            }
            setShowViewCart(true);
        }
    };

    return(
        <React.Fragment>
            <button onClick={ handleAddToCartClick } className="btn btn-secondary text-light">Add To Cart</button>
            { showViewCart ? (
                <Link href="/cart">
                    <button className="woo-next-view-cart-btn btn btn-secondary text-light ml-1">View Cart</button>
                </Link>
            ) : ''}
        </React.Fragment>
    )
};

export default AddToCartButton;