import React from 'react';
import { useState,useEffect } from 'react';
import "../Styling/Pages/Shoppingcart.css"
import { ProductsSelected } from '../components/productCard';
import Cart from "../Assets/shopping-cart.png"
import Lock from "../Assets/lock.png"
import BoughtProduct from '../components/boughtProduct';
import AllProducts from "../Utilities/AllProducts"

function ShoppingCart(props){
    const [idproductsBought, setidproductsBought] = useState(ProductsSelected());
    const Products = AllProducts();
 
  function ProductsAddedCart(){
      console.log(ProductsSelected())
      return (
      Products.map((product)=>{
        return <BoughtProduct 
        key = {product.id} 
        id ={product.id}
        name={product.name} 
        price={product.price}
        img={product.img}
        quantity={idproductsBought.filter((a)=>{return a=== product.id}).length}
        test = {test}
        />
        }).filter((a)=>{
            if(idproductsBought.includes(a.key)){
                return a.key 
            }
        }) 
      )
    }

        function test(e){
            let target = e.target.parentNode.parentNode.id
            let spliced = idproductsBought.splice(idproductsBought.indexOf(target),1)
            setidproductsBought( 
              spliced 
            )
            console.log(idproductsBought)
            //ProductsAddedCart()
        }
        
        function EraseProduct(e){
            console.log(e.target.parentNode.parentNode)
            e.target.parentNode.parentNode.remove()
        }
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
          {ProductsAddedCart()}
        </div>
    );
}

export default ShoppingCart;
