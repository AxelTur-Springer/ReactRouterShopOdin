import React from 'react';
import { useState } from 'react';
import ProductCard from '../components/productCard';
import ExportProducts from '../Utilities/AllProducts';
import "../Styling/Pages/products.css"
import Arrow from "../Assets/down-arrow.png"
const Products = () => {
    let products = ExportProducts()
    const [FilterParam, setFilterParam] = useState("All");

    let filtered = products.filter((a)=>{
        if(FilterParam === "All"){
            return a
        }else{
            return a.category === FilterParam
        }
    })

    function displayCategoryMenu(){
        const menu = document.getElementsByClassName("categorieList")
        const arrow = document.getElementsByClassName("ArrowContainerImg")
        menu[0].style.display ="flex"
        arrow[0].style.display = "flex"

    }
    function HideCategoryMenu(){
        const menu = document.getElementsByClassName("categorieList")
        const arrow = document.getElementsByClassName("ArrowContainerImg")
       menu[0].style.display ="none"
       arrow[0].style.display = "none"

    }
    function manageCategory(e){
        let value = e.target.innerText
        setFilterParam(value)
    }
    return (
        <div>
            <div className='CategoriaContainer'>
                <div className='ProductDescripcionShowing'>
                    <h2>{FilterParam}</h2>
                </div>
                <div onMouseOver={displayCategoryMenu} 
                onClick={displayCategoryMenu}
                onMouseOut={HideCategoryMenu}>
                    <div className='CategoriesDiv'>
                        <div>
                            <h3>Categorias</h3>
                        </div>
                        <div className='ArrowContainerImg'>
                            <img src={Arrow} alt="" />
                        </div>
                    </div>
                    <div className='categorieList'>
                        <ul onClick={manageCategory}>
                            <li>
                                <button>All</button>
                            </li>
                            <li>
                                <button>Gpu</button>
                            </li>
                            <li>
                                <button>Cpu</button>
                            </li>
                            <li>
                                <button>Mother Board</button>
                            </li>
                            <li>
                                <button>Accesories</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='GridContainer'>
                <div className = "ProductsGrid">
                    {filtered.map((product)=>{
                        return <ProductCard Name = {product.name} 
                        key = {product.id}
                        Img = {product.img} 
                        Id = {product.id} 
                        ImgPrev = {product.imgPrev}
                        Price = {product.price}
                        Category = {product.category}/>
                    })}
                </div>
            </div>
       
        </div>
    );
}

export default Products;
