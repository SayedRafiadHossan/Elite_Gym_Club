import React, { useEffect, useState } from 'react';
import {addToDb, getStoredCart} from '../../Utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import Qna from '../Qna/Qna';
import "./Exercise.css"

const Exercise = () => {
        const [exercises, setExercises] = useState([]);
        const [cart, setCart] = useState([])

        useEffect(() =>{
            fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
        }, []);
        useEffect(() =>{
            const storedCart = getStoredCart();
            const savedCart = [];
            for(const id in storedCart){
                const addedProduct = exercises.find(exercise => exercise.id === id);
                if(addedProduct){
                    const quantity = storedCart[id];
                    addedProduct.quantity = quantity;
                    savedCart.push(addedProduct);
                }
            }
            setCart(savedCart);
        }, [exercises])
    
        const handleAddToCart = (selectedProduct) => {
            let newCart = []
            const exists = cart.find(exercise => exercise.id === selectedProduct);
            if(!exists){
                selectedProduct.quantity = 1;
                newCart = [...cart, selectedProduct];
            }
            else{
                const rest = cart.filter(exercise => exercise.id !== selectedProduct.id);
                exists.quantity = exists.quantity + 1;
                newCart = [...rest, exists];
            }
            setCart(newCart);
            addToDb(selectedProduct.id)
        }

    return (
        <nav>
        <div>
        <div className='main-container'>
        <div>
            <h1 className='select-exercise'>Select today's exercise</h1>
                <div className="exercise-container">
                {
                exercises.map(exercise => <Product
                key={exercise.id}
                product={exercise}
                handleAddToCart={handleAddToCart}
                ></Product>)
                }
                </div>
        </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
        </div>
        <div>
            <Qna></Qna>
        </div>
        </nav>
        
    );
};

export default Exercise;