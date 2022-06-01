import React from 'react'
import "../Styling/Components/productCard.css"

export default function ProductCard(props) {
  function previewImg(e){
    console.log()
    e.currentTarget.children[0].children[0].src = props.ImgPrev
  }
  function originalImg(e){
    console.log()
    e.currentTarget.children[0].children[0].src = props.Img
  }
  return (
    <div id={props.Id} onMouseOver={previewImg} onMouseLeave = {originalImg}>
      <div className='ImgContainer'> 
        <img src={props.Img} alt="" />       
      </div>
      <div>
        {props.Name}
      </div>
    </div>
  )
}
