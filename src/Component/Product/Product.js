import React from 'react';
import './Product.css'

const Product = (props) => {
    const {img, title, describe, age, time} = props.product;
    return (
        <div className='product'>
            <img src={img} alt=""/>
            <div className='product-info'>
                <h1 className='product-name'>{title}</h1>
                <p>{describe}</p>
                <h5>For age: {age}</h5>
                <h5>Time required: {time}s</h5>
            </div>
            <button onClick={ ()=> props.handleAddToCart(props.product)} className='btn-cart'>
                <p>Add To List</p>
            </button>
        </div>
    );
};

export default Product;