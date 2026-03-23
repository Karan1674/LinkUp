import React, { useContext } from 'react'
import { AppContext } from '../Store/DummyData'
import Middlebar from './Middlebar';


export default function ProfileMainportion({ friendpage ,screensize }) {
    const {profiledata}=useContext(AppContext);
    
    return (
        <>

            {friendpage ? <>
                <div className="profileCover">
                        <img src="Assets(Images)/d.png" alt="" className="profileCoverimage" />
                        <img src={profiledata.img} alt="" className="profileUserimage" />
                    </div>

                    <div className="profileInfo">
                        <h4 className='profileInfoName'>{profiledata.name}</h4>
                        <span className="profileInfodescription">"{profiledata.welcomeMessage}"</span>
                    </div>
                    {screensize?'':<Middlebar friendpage/>}
            </> :

                <>
                    <div className="profileCover">
                        <img src="Assets(Images)/anime.png" alt="" className="profileCoverimage" />
                        <img src="Assets(Images)/AccountImage.jpg" alt="" className="profileUserimage" />
                    </div>

                    <div className="profileInfo">
                        <h4 className='profileInfoName'>PhoenixFlare</h4>
                        <span className="profileInfodescription">"Welcome, everyone! I'm delighted to connect with you and share stories from my world."</span>
                    </div>
                    {screensize?'':<Middlebar/>}
                </>}
        </>
    )
}
