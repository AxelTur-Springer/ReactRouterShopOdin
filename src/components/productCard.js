import React from 'react'
import ShoppingCart from '../Pages/shoppingCart'
import "../Styling/Components/productCard.css"

export default function ProductCard(props) {
  function previewImg(e){
    if(props.ImgPrev !== undefined){
      e.currentTarget.children[0].children[0].src = props.ImgPrev
    }
  }
  function originalImg(e){
    console.log()
    e.currentTarget.children[0].children[0].src = props.Img
  }
  return (
    <div className='productsContainer' id={props.Id} onMouseOver={previewImg} onMouseLeave = {originalImg}>
      <div className='ImgContainer'> 
        <img src={props.Img} alt="" />       
      </div>
      <div className='PriceAndContent'>
        <div className='Price'>
          <p>
            $ {props.Price} 
          </p>
        </div>
        <div className='nameAndDescrip'>
          -{props.Category} {props.Name}
        </div>
      </div>
      <div>
        <button onClick={pushProducts}>
          Add to Cart
        </button>
      </div>
    </div>
  )
}
let arrayItems=[];
function pushProducts(e){
  let selected = e.target.parentNode.parentNode.id
  arrayItems.push(selected)
}
export function ProductsSelected(){
  return arrayItems
}