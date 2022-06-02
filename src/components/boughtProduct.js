import React from 'react';
import { useState } from 'react';
import "../Styling/Components/boughtProduct.css"

const BoughtProduct = (props) => {
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
            <div className='priceQuanSubEraseCont'>
                <div className='price'>
                    ${props.price}
                </div>
                <div className='quantity'>
                    {props.quantity}
                </div>
                <div className='SubTotals'>
                    ${props.price * props.quantity }
                </div>
                <div>
                    <button onClick={props.test} >erase</button>
                </div>
            </div>
        </div>
    );
}

export default BoughtProduct;
