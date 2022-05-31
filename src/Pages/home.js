import React from 'react';
import "../Styling/Pages/home.css"
import speed from "../Assets/speed.png"
import security from "../Assets/padlock.png"
import shipping from "../Assets/shipping.png"

const Home = () => {
    fetch('https://api.storerestapi.com/products')
	.then(response => response.json())
	.then(json => console.log(json))
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
                </div>
                <div>
                    <div>
                        <img src={security} alt="" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src={shipping} alt="" />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Home;
