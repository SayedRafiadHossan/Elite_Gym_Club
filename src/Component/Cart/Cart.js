import React from 'react';
import QNA from '../QNA/QNA';
import './Cart.css'

const Cart = () => {
    return (
        <nav>
        <div className='flex'>
            <img class="inline-block h-12 w-12 rounded-full ring-2 ring-white my-5 mx-10" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
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
        
        {/* Add A Break */}

        <div>
            <h1 className='font-bold mx-10'>Add A Break</h1>
        <div className='bg-slate-100 flex mx-10 my-5 rounded-md'>
        <div className='bg-white mx-3 my-2 rounded-full hover:bg-blue-500'>
                <p className='m-2'>10s</p>
            </div>
            <div className='bg-white mx-3 my-2 rounded-full hover:bg-blue-500'>
                <p className='m-2'>20s</p>
            </div>
            <div className='bg-white mx-3 my-2 rounded-full hover:bg-blue-500'>
                <p className='m-2'>30s</p>
            </div>
            <div className='bg-white mx-3 my-2 rounded-full hover:bg-blue-500'>
                <p className='m-2'>40s</p>
            </div>
            <div className='bg-white mx-3 my-2 rounded-full hover:bg-blue-500'>
                <p className='m-2'>50s</p>
            </div>
        </div>
        </div>

        {/* Exercise Details */}

        <div>
            <h1 className='font-bold mx-10'>Exercise Details</h1>
            <div className='bg-slate-100 mx-10 my-5  rounded-md '>
                <p className='mx-5 p-2'>Exercise time: </p>
            </div>
            <div className='bg-slate-100 mx-10  rounded-md'>
                <p className='mx-5 p-2'>Break time: </p>
            </div>
        </div>

        {/* avtivity btn */}

        <div>
        <button className='active-btn'>
            <p>Activity Completed</p>
        </button>
        </div>
        </nav>

    );
};

export default Cart;