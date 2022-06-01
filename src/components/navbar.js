import React from 'react';
import { Link } from 'react-router-dom';
import Products from '../Styling/Components/navbar.css';

const Navbar = () => {
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
            </div>
           
        </div>
    );
}

export default Navbar;
