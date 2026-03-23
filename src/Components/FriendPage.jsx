import React from 'react'
import Sidebar from './Sidebar'
import Rightbar from './Rightbar'
import '../Styles/FriendPage.css'
import Frienddata from './Frienddata'


export default function FriendPage() {
    return (
        <>
            <div className="FriendPage">
                <div className="HeroContainer">
                    <Sidebar />
                    <div className="friendpageRight">
                        <div className="friendpageRight-left">
                           <Frienddata/>
                        </div>
                        <div className="friendpageRight-right">
                            <Rightbar/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
