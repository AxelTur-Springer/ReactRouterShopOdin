import React from 'react';
import { Link } from 'react-router-dom';
import "../Styling/Pages/home.css"
import speed from "../Assets/speed.png"
import security from "../Assets/padlock.png"
import shipping from "../Assets/shipping.png"

const Home = () => {
    return (
        <div className='HomeContainer'>
            <div className='greeting'>
                <div className='Welcome'>
                   <h1>Welcome to Mining Store Argentina</h1> 
                </div>
                <div className='descripcion'>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Distinctio quasi consequatur 
                        dignissimos quidem incidunt explicabo minima eaque 
                        tempore, vitae tenetur pariatur libero esse 
                        consequuntur voluptatem architecto neque, ullam 
                        fugiat modi!
                    </p>
                </div>
            </div>
            <div className='Features'>
                <div>
                    <div>
                     <img src={speed} alt="" />
                    </div>
                    <div>
                        <p>
                            Personalized Atencion
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={security} alt="" />
                    </div>
                    <div>
                        <p>Secure Service</p>
                    </div>
                </div>
                <div>
                    <div>
                        <img src={shipping} alt="" />
                    </div>
                    <p>Home Shipping</p>
                </div>
            </div>
            <div className='shopButton'>
               <Link to={"/products"}><button>Shop now !</button></Link> 
            </div>
        </div>
    );
}

export default Home;
