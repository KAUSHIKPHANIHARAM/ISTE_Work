import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import '../Style/Footer.css';

function Footer() {
    return (
        <footer className="footer-container">
            <div className='icons-section'>
                <h3 className='d-flex justify-content-start'>
                    <img src="https://cdn-icons-png.flaticon.com/128/7650/7650580.png" alt="ACME"
                        style={{ width: "60px", height: "30px", color: "white" }} />
                </h3>
                <div className="social-links">
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/25/25347.png"
                            alt="Twitter"
                        />
                    </a>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/1384/1384005.png"
                            alt="Facebook"
                        />
                    </a>
                    <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-icon"
                    >
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/4138/4138164.png"
                            alt="Instagram"
                        />
                    </a>
                </div>
            </div>


            <div className="footer-sections">
                <div className="footer-section">
                    <h4>Get to Know Us</h4>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="about">About Us</NavLink></li>
                        <li><NavLink to="contact">Contact</NavLink></li>
                        <li>Blog</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Connect with Us</h4>
                    <ul>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                        <li><a href="https://x.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Make Money with Us</h4>
                    <ul>
                        <li>Sell on Our Platform</li>
                        <li>Become an Affiliate</li>
                        <li>Advertise Your Products</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Let Us Help You</h4>
                    <div className='d-flex justify-content-start'>
                        <ul>
                            <li>Your Account</li>
                            <li>Your Orders</li>
                            <li>Shipping Rotes & Policies</li>
                            <li>Returns & Replacements</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="footer-bottom">
                <p>© 2024, ACME Company, All rights reserved</p>
                <div className="footer-bottom-links">
                    <a href="#">Conditions of Use</a>
                    <a href="#">Privacy Notice</a>
                    <a href="#">Interest-Based Ads</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
