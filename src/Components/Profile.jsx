import React from 'react'
// import Topbar from './Topbar'
// import Footer from './Footer'
import Sidebar from './Sidebar'
import Rightbar from './Rightbar'
import Middlebar from './Middlebar'
import '../Styles/Profile.css'
import ProfileMainportion from './ProfileMainportion'
export default function Profile() {

    return (
        <>
            {/* <Topbar /> */}
            <div className="profilecontainer">
                <div className="HeroContainer">
                    <Sidebar />
                    <div className="profileright">
                        <div className="profilerighttop">
                            <ProfileMainportion screensize/>
                        </div>
                        <div className="profilerightbottom">
                            <Middlebar profile />
                            <Rightbar profile />
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}
