import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Exercise.css"

const Exercise = () => {
        const [exercises, setExercises] = useState([]);

        useEffect(() =>{
            fetch('data.json')
            .then(res => res.json())
            .then(data => setExercises(data))
        }, [])

        const handleAddToCart = (product) => {
            console.log(product);
        }

    return (
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
                <Cart></Cart>
            </div>
        </div>
        </div>
    );
};

export default Exercise;