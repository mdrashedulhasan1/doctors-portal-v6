import React from 'react';
import { Link } from 'react-router-dom';
import footerBg from '../../assets/images/footer.png'
const Footer = () => {
    const bg = {
        backgroundImage: `url(${footerBg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }
    return (
        <section style={bg}>
            <footer className="footer p-28">
                <div>
                    <span className="footer-title">Services</span>
                    <Link to='/' className="link link-hover">Branding</Link>
                    <Link to='/' className="link link-hover">Design</Link>
                    <Link to='/' className="link link-hover">Marketing</Link>
                    <Link to='/' className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <Link to='/' className="link link-hover">About us</Link>
                    <Link to='/' className="link link-hover">Contact</Link>
                    <Link to='/' className="link link-hover">Jobs</Link>
                    <Link to='/' className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <Link to='/' className="link link-hover">Terms of use</Link>
                    <Link to='/' className="link link-hover">Privacy policy</Link>
                    <Link to='/' className="link link-hover">Cookie policy</Link>
                </div>
            </footer>
            <div className='text-center p-5'>
                <p>Copyright © 2022 - All right reserved by Rashedul IT</p>
            </div>
        </section>
    );
};

export default Footer;