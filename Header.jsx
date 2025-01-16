import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Style/Header.css'

function Header() {
    return (
        <div className='header-container'>
            <div className="header-content">
                <h1 className="header-logo text-white">
                    <img src="https://cdn-icons-png.flaticon.com/128/7650/7650580.png" alt="ACME"
                        style={{ width: "60px", height: "30px", color: "white" }} />
                </h1>
                {/* <h1 className='text-white fs-6 d-flex-justify-content-start'>ACME</h1> */}
                <ul className="nav justify-content-end fs-4">
                    <li className="nav-item">
                        <NavLink to="" exact className='nav-link text-white'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="about" className='nav-link text-white'>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="contact" className='nav-link text-white'>Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="products" className='nav-link text-white'>Products</NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to="register" className='nav-link text-white'>Sign-Up</NavLink>
                    </li>
                    <li className='nav-item'>
                        <button className='cart-btn nav-link bg-black' >🛒</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
