import React from 'react';
import ProductCard from '../components/productCard';
import ExportProducts from '../Utilities/AllProducts';
import "../Styling/Pages/products.css"
const Products = () => {
    
    let products = ExportProducts()
    let filtered = products.filter((a)=>{
        return a.category === "GPU"
    })
    
    function displayCategoryMenu(){
        const menu = document.getElementsByClassName("categorieList")
        menu[0].style.display ="flex"
    }
    function HideCategoryMenu(){
        const menu = document.getElementsByClassName("categorieList")
       // menu[0].style.display ="none"
    }
    return (
        <div>
            <div className='CategoriaContainer'>
                <div>
                    <h2>All Products</h2>
                </div>
                <div onMouseOver={displayCategoryMenu} onMouseOut={HideCategoryMenu}>
                    <div>
                        <h2>categorias</h2>
                    </div>
                    <div className='categorieList'>
                        <ul>
                            <li>
                                <button>Gpu</button>
                            </li>
                            <li>
                                <button>Cpu</button>
                            </li>
                            <li>
                                <button>MotherBoard</button>
                            </li>
                            <li>
                                <button>Accesories</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className = "ProductsGrid">
                {products.map((product)=>{
                return <ProductCard Name = {product.name} 
                Img = {product.img} 
                Id = {product.id} 
                ImgPrev = {product.imgPrev}
                Price = {product.price}
                Category = {product.category}/>
                })}
            </div>
        </div>
    );
}

export default Products;
