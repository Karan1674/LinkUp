import React, { useState } from 'react'
import '../Styles/Sidebar.css'


import Friends from './Friends';
import Icons from './Icons';
import { Link } from 'react-router-dom';

export default function Sidebar() {

    const [showAllIcons, setShowAllIcons] = useState(false);

    const handleIconToggle = () => {
        setShowAllIcons(!showAllIcons);
    };

    return (
        <>
            <div className="sidebar">
                <div className="wrapper">
                    <Icons showAllIcons={showAllIcons} />
                    <button className="showmore" onClick={handleIconToggle}>
                        {showAllIcons ? 'Show Less' : 'Show More'}
                    </button>
                    <hr className="sidebarline" />
                    <div className="sidebarfrienddata">
                        <Friends/>
                    </div>
                    <Link to='/Friends'><button className="showmore">Show More</button></Link>
                </div>
            </div>
        </>
    )
}
