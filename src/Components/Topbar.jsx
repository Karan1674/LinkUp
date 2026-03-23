import React, { useState } from 'react'
import '../Styles/Topbar.css'
import { FaSearch } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { BsChatRightTextFill } from "react-icons/bs";
import { IoNotifications } from "react-icons/io5";
// import Menu from './Menu';
import { Link } from 'react-router-dom';
// import Sidebar from './Sidebar';

export default function Topbar() {
    const [show, sethamburger] = useState(false);

    const hamburger = () => {
        sethamburger(!show);
    }

    const closed = () => {
        sethamburger(!show);
    }
    return (
        <>
            <div className="topbar-container">
                <div className="topbar-left">
                  <Link to="/Home" style={{textDecoration:"none", color:"#fff"}}>  <span className="logo">LinkUp</span></Link>
                </div>


                <div className="topbar-center">
                    <div className="serach-bar">
                        <FaSearch className='serach-icon' />
                        <input type="text" className="serachinput" placeholder='Search for friends, post or video' />
                    </div>
                </div>


                <div className="topbarIcons">
                    <div className="topbar-icon">
                        <IoPersonSharp className='icon' />
                        <span className="topbar-badge">1</span>
                    </div>
                    <div className="topbar-icon">
                        <BsChatRightTextFill className='icon' />
                        <span className="topbar-badge">2</span>
                    </div>
                    <div className="topbar-icon">
                        <IoNotifications className='icon' />
                        <span className="topbar-badge">1</span>
                    </div>
                </div>




                <div className="hamburger" onClick={hamburger}>
                    <div className={`line ${show ? 'active' : ''}`}></div>
                    <div className={`line ${show ? 'active' : ''}`}></div>
                    <div className={`line ${show ? 'active' : ''}`}></div>
                </div>


                <div className={`topbar-right ${show ? 'active' : ''}`}>
                    <div className="topbarLinks">

                        <Link to='/Home' onClick={closed} className="topbar-link">
                            <span>Home</span>
                        </Link>


                        <Link to='/iconsdata' onClick={closed} className="topbar-link menu">
                            <span>Menu</span>
                        </Link>
                        <span className="topbar-link" onClick={closed}>Timeline</span>

                    </div>

                    <Link to='/account' onClick={closed} className='profile'>
                        <span>Logout</span>
                    </Link>
                     <Link to='/Profile'>   <img src="Assets(Images)/AccountImage.jpg" alt=""  className='accountimage'/></Link>

                </div>


            </div>

        </>
    )

}
