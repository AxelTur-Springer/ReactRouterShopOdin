import React from 'react';
import { ProductsSelected } from '../components/productCard';
function ShoppingCart(props){
   let productsBought= ProductsSelected()
    return (
        <div >
            <button onClick={props.OnclickShowCart}>sdaf</button>
        {productsBought}
        </div>
    );
}

export default ShoppingCart;
