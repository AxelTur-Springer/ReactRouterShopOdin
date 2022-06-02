import React from 'react';
import "../Styling/Components/boughtProduct.css"

const BoughtProduct = (props) => {
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
                {props.quantity}
            </div>
            <div>
                {props.subtotal}
            </div>
            <div>
                <button>erase</button>
            </div>
        </div>
    );
}

export default BoughtProduct;
