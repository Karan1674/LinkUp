import React from 'react';
import { FaHome, FaSearch, FaUserFriends, FaUser } from 'react-icons/fa';
import '../Styles/Footer.css'

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-icon">
                <FaHome className='footericondisplay'/>
            </div>
            <div className="footer-icon">
                <FaSearch className='footericondisplay'/>
            </div>
            <div className="footer-icon">
                <FaUserFriends className='footericondisplay'/>
            </div>
            <div className="footer-icon">
                <FaUser className='footericondisplay'/>
            </div>
        </footer>
    );
}
