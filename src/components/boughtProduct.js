import React from 'react';
import { useState } from 'react';
import "../Styling/Components/boughtProduct.css"

const BoughtProduct = (props) => {
   // const [Quantity, setQuantity] = useState();
    return (
        <div className='BoughtProdContainer' id={props.id}>
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
                {props.quantity}
            </div>
            <div>
                {props.price * props.quantity }
            </div>
            <div>
                <button onClick={props.test} >erase</button>
            </div>
        </div>
    );
}

export default BoughtProduct;
