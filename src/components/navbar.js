import React from 'react';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Products from '../Styling/Components/navbar.css';
import { ProductsSelected } from '../components/productCard';

const Navbar = () => {
    const [Amout,setAmout] = useState(0)
    
    useEffect(() => {   
        setInterval(() => {
            setAmout(ProductsSelected().length)
        }, 500);
    },[Amout]);


    return (
        <div className='NavBarContainer'>
            <div className='logo'>
                <div>
                    <img src="" alt="" />
                </div>
                <div>
                    <p> Mining Store </p>
                </div>
                
            </div>
            <div className='sections'>
                <button><Link className='test' to={"/"}>Home </Link></button>
                <button><Link to={"/products"}>Products </Link></button>
                <button><Link to={"/contact"}>Contact </Link></button>
                 <div className='navBarCartAndAmountCont'>
                 <div><button><Link to={"/shoppingCart"}>Cart </Link></button></div>
                 <div><p>{Amout} </p></div>
                </div>
            </div>
           
        </div>
    );
}

export default Navbar;
