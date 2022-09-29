import React from 'react';

const Qna = () => {
    return (
        <div className='text-center mx-10 my-5'>
            <h1 className='font-extrabold m-5 underline'>Frequently Question & Answer</h1>
            <div>
                <h1 className='font-semibold'>1. What does React actually do?</h1>
                <p><span className='text-red-600'>Answer: </span> What does React actually do?
                    React is a JavaScript library developed by Facebook which, among other things, was used to build Instagram.com. Its aim is to allow developers to easily create fast user interfaces for websites and applications alike. The main concept of React. js is virtual DOM.</p>
            </div>
            <div>
                <h1 className='font-semibold'>2. What is difference between props and state in React?</h1>
                <p><span className='text-red-600'>Answer: </span>State is the local state of the component which cannot be accessed and modified outside of the component. It's equivalent to local variables in a function. Props, on the other hand, make components reusable by giving components the ability to receive data from their parent component in the form of props.</p>
            </div>
            <div>
                <h1 className='font-semibold'>3. Without useEffect dataload how many way we can use useEffect?</h1>
                <p><span className='text-red-600'>Answer: </span> We can use the useEffect Hook Usages.The callback function we pass to the useEffect hook runs the side effects.React runs it on every render of a component by default.</p>
            </div>
        </div>
    );
};

export default Qna;