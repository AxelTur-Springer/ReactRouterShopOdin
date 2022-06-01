import React from 'react';
import ProductCard from '../components/productCard';
import ExportProducts from '../Utilities/AllProducts';
import "../Styling/Pages/products.css"
const Products = () => {
    let products = ExportProducts()
    console.log(products)
    return (
        <div className = "ProductsGrid">
            {products.map((product)=>{
               return <ProductCard Name = {product.name} 
               Img = {product.img} 
               Id = {product.id} 
               ImgPrev = {product.imgPrev}/>
            })}
        </div>
    );
}

export default Products;
