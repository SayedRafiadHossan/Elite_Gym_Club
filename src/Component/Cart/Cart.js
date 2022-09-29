import React from 'react';

const Cart = () => {
    return (
        <nav>
        <div className='flex'>
            <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white m-5" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
            <div className='my-5'>
            <h1 className='font-bold'>Zahid Hossain</h1>
            <p>Sydney, Australia</p>
            </div>
        </div>
        <div className='flex bg-slate-100 m-10 rounded-md'>
            <div className='mx-8 my-2'>
                <h1><span className='font-extrabold'>75</span>Kg</h1>
                <p>Weight</p>
            </div>
            <div className='mx-8 my-2'>
                <h1 className='font-extrabold'>6.5</h1>
                <p>Height</p>
            </div>
            <div className='mx-8 my-2'>
                <h1><span className='font-extrabold'>25</span>yrs</h1>
                <p>Age</p>
            </div>
        </div>
        </nav>

    );
};

export default Cart;