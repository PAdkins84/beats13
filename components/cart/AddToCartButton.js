import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import React from 'react';
import Link from 'next/link';
import { addFirstProduct } from '../../function';


const AddToCartButton = (props) => {

    const { product } = props;
    const [ cart, setCart ] = useContext(AppContext);

    const handleAddToCartClick = () => {
        if(process.browser) {
            let existingCart = localStorage.getItem('woo-next-cart');

            // If cart has item(s) already, then update the existing
            if(existingCart) {
                existingCart = JSON.parse( existingCart );
                const qtyToBeAdded = 1;
                const updatedCart = updateCart(existingCart, product, qtyToBeAdded);

            } else {
                // Add a new item.  Create empty array
                const newCart = addFirstProduct( product );
                setCart(newCart);
            }
        }
    };

    return(
        <React.Fragment>
            <button onClick={ handleAddToCartClick } className="btn btn-secondary">Add To Cart</button>
        </React.Fragment>
    )
};

export default AddToCartButton;