import React from 'react';
import { useState,useEffect } from 'react';
import "../Styling/Pages/Shoppingcart.css"
import { ProductsSelected } from '../components/productCard';
import Cart from "../Assets/shopping-cart.png"
import Lock from "../Assets/lock.png"
import BoughtProduct from '../components/boughtProduct';
import AllProducts from "../Utilities/AllProducts"

function ShoppingCart(props){
    const Products = AllProducts();
    const idproductsBought = ProductsSelected()
    const [count, setCount] = useState(0);

    useEffect(() => {
        ProductsAddedCart()
    },[count]);


  function ProductsAddedCart(){
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
            let target = e.target.parentNode.parentNode.parentNode.id
            idproductsBought.splice(idproductsBought.indexOf(target),1)  
            setCount(count+1)
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
                    <div className='Productp'>
                        <p>Product</p>
                    </div>
                    <div className='priceQuantitySub'>
                        <div> <p>Price</p> </div>
                        <div> <p>Quantity </p></div>
                        <div> <p>SubTotal</p> </div>
                    </div>
                </div>
            </div>
            <div className='ProdcutsInCartAndTotal'>
                <div className='ProductsInCart'>
                    {ProductsAddedCart()}
                </div>
                <div className='ResumOfTotal'>
                    <div>
                        <p>Resume of your order</p>
                    </div>
                    <div>
                        Total:$ {totalPrice()}
                    </div>
                    <div>
                        <button>Confirm Order</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCart;

function totalPrice(){
    const Products = AllProducts();
    const idproductsBought = ProductsSelected()
    let algo = 
        Products.map((product)=>{
          return <BoughtProduct 
          key = {product.id} 
          id ={product.id}
          price={product.price}
          quantity={idproductsBought.filter((a)=>{return a=== product.id}).length}
          />
          }).filter((a)=>{
              if(idproductsBought.includes(a.key)){
                  return a.key 
              }
          }) 
          let Total = 0;
          for (let i = 0; i < algo.length; i++) {
              Total += (algo[i].props.quantity * algo[i].props.price )
          }

return Total
}
export function  totalProductsBoought(){
return BoughtProduct().length
}
