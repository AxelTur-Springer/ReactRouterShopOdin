import React from 'react';
import "../Styling/Pages/Shoppingcart.css"
import { ProductsSelected } from '../components/productCard';
import Cart from "../Assets/shopping-cart.png"
import Lock from "../Assets/lock.png"
import BoughtProduct from '../components/boughtProduct';
import AllProducts from "../Utilities/AllProducts"

function ShoppingCart(props){
   let idproductsBought= ProductsSelected();
   const Products = AllProducts();
   let boughtProducts; 
   
   let test = Products.map((product)=>{
        return <BoughtProduct 
        key = {product.id} 
        name={product.name} 
        price={product.price}
        img={product.img}
        quantity={idproductsBought.filter((a)=>{return a=== product.id}).length}
        />
        }).filter((a)=>{
            if(idproductsBought.includes(a.key)){
                return a.key 
            }
        }) 
        console.log(idproductsBought,test)
    return (
        
        <div className='ShoppingCartContainer'>
            <div className='Header'>
                <div className='cartAndcart'>
                    <div>
                        <img src={Cart}alt="" />
                    </div>
                    <div>
                        <p>SHOPPING CART</p>
                    </div>
                </div>
                <div className='SafeBuy'>
                    <div>
                        <img src={Lock} alt="" />
                    </div>
                    <div>
                        <p>Safe Site</p>
                        <p>Your Data is protected</p>
                    </div>
                </div>
            </div>
            <div className='ShoppingCartDetails'>
                <div> 
                    <p>Order details:</p>
                </div>
                <div className='priceQuantitySubContainer'>
                    <div>
                        <p>Product</p>
                    </div>
                    <div className='priceQuantitySub'>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>SubTotal</p>
                    </div>
                </div>
            </div>
          {test}
        </div>
    );
}

export default ShoppingCart;
