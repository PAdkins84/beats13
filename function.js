export const getFloatVal = (string) => {
    let floatValue = string.match(/[+-]?\d+(\.\d+)?/g)[0];
    return (null !== floatValue) ? parseFloat(parseFloat(floatValue).toFixed(2)) : '';
}

export const addFirstProduct = (product) => {
    let productPrice = getFloatVal(product.price)

    let newCart = {
        products: [],
        totalProductsCount: 1,
        totalProductsPrice: productPrice
    }

    const newProduct = createNewProduct(product, productPrice, 1);
    newCart.products.push( newProduct );

    localStorage.setItem('woo-next-cart', JSON.stringify( newCart ));
    return newCart;
};

export const createNewProduct = (product, productPrice, qty) => {
    return {
        databaseId: product.databaseId,
        image: product.image,
        name: product.name,
        price: productPrice,
        qty,
        totalPrice: parseFloat(( productPrice * qty ).toFixed(2))
    }
};

export const updateCart = (existingCart, product, qtyToBeAdded, newQty = false) => {
    const updatedProducts = getUpdatedProducts(existingCart.products, product, qtyToBeAdded, newQty);
    
    const addPrice = (total, item) => {
        total.totalPrice += item.totalPrice;
        total.qty += item.qty;

        return total;
    }
    let total = updatedProducts.reduce(addPrice, {totalPrice: 0, qty: 0});

    const updatedCart = {
        products: updatedProducts,
        totalProductsCount: parseInt(total.qty),
        totalProductsPrice: parseFloat(total.totalPrice)
    }
    console.warn(updatedCart)
    localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));

    return updatedCart;

};

export const getUpdatedProducts = (existingProductsInCart, product, qtyToBeAdded, newQty = false) => {
    const productExistsIndex = isProductInCart(existingProductsInCart, product.databaseId);

    if(-1 < productExistsIndex) {
        let updatedProducts = existingProductsInCart;
        let updatedProduct = updatedProducts[productExistsIndex];

        updatedProduct.qty = (newQty) ? parseInt(newQty) : parseInt(updatedProduct.qty + qtyToBeAdded);
        updatedProduct.totalPrice = parseFloat((updatedProduct.price * updatedProduct.qty).toFixed(2));

        return updatedProducts;
    } else {
        let productPrice = getFloatVal(product.price);
        const newProduct = createNewProduct(product, productPrice, qtyToBeAdded);
        existingProductsInCart.push(newProduct);
        return existingProductsInCart;
    }
};

export const isProductInCart = (existingProductsInCart, databaseId) => {
    const returnItemThatExists = (item, index) => {
        if(databaseId === item.databaseId) {
            return item;
        }
    };

    const newArray = existingProductsInCart.filter(returnItemThatExists);

    return existingProductsInCart.indexOf(newArray[0]);
};

export const removeItemFromCart = (databaseId) => {
    let existingCart = localStorage.getItem('woo-next-cart');
    existingCart = JSON.parse(existingCart);

    if(1 === existingCart.products.length) {
        localStorage.removeItem('woo-next-cart');
        return null;
    }
    const productExistsIndex = isProductInCart(existingCart.products, databaseId);

    if(-1 < productExistsIndex) {
        const productToBeRemoved = existingCart.products[productExistsIndex];
        const qtyToBeRemoveFromTotal = productToBeRemoved.qty;
        const priceToBeDeductedFromTotal = productToBeRemoved.totalPrice;

        let updatedCart = existingCart;
        updatedCart.products.splice(productExistsIndex, 1);
        updatedCart.totalProductsCount = updatedCart.totalProductsCount - qtyToBeRemoveFromTotal;
        updatedCart.totalProductsPrice = updatedCart.totalProductsPrice - priceToBeDeductedFromTotal;

        localStorage.setItem('woo-next-cart', JSON.stringify(updatedCart));

        return updatedCart;
    } else {
        return existingCart;
    }
}