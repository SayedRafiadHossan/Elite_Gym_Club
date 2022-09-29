import React from 'react';
import './Header.css'
import logo from "../../images/gym-1.png"
const Header = () => {
    return (
        <nav className='header'>
            <div className='header-right-site'>
            <img src={logo} alt="" />
            <h1>Elite-Gym-Club</h1>
            </div>

            <div>
                <a href="/Home">Home</a>
                <a href="/Exercise">Exercise</a>
                <a href="/Activity">Activity</a>
                <a href="/about">About</a>
            </div>        
        </nav>
    );
};
export default Header;