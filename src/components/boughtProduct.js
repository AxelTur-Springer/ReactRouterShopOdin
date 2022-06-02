import React from 'react';
import { useState } from 'react';
import "../Styling/Components/boughtProduct.css"

const BoughtProduct = (props) => {
    const [Quantity, setQuantity] = useState(props.quantity);

    function test(){
        return Quantity !== 1 ? setQuantity(Quantity-1):setQuantity(1)
       
    }
    return (
        <div className='BoughtProdContainer'>
            <div className='imgAndNameCont'>
                <div className='imgproductCont'>
                    <img src={props.img} alt="" />
                </div>
                <div className='BoughtProdName'>
                    {props.name}
                </div>
            </div>
            <div className='price'>
                {props.price}
            </div>
            <div>
                {Quantity}
            </div>
            <div>
                {props.price * Quantity }
            </div>
            <div>
                <button onClick={test}>erase</button>
            </div>
        </div>
    );
}

export default BoughtProduct;
