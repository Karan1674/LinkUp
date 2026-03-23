import React, { useContext } from 'react'
import Sidebar from './Sidebar'
import ProfileMainportion from './ProfileMainportion'
import Middlebar from './Middlebar'
import Rightbar from './Rightbar'
import { AppContext } from '../Store/DummyData'

export default function FriendPage() {
  const { profiledata } = useContext(AppContext)
 
  return (
    <>
      <div className="FriendProfile">
        <div className="HeroContainer">
          <Sidebar />
          {
            profiledata.name === 'PhoenixFlare' ?
              <div className="profileright">
                <div className="profilerighttop">
                  <ProfileMainportion screensize />
                </div>
                <div className="profilerightbottom">
                  <Middlebar profile />
                  <Rightbar profile />
                </div>
              </div>
              :
              <div className="profileright">
                <div className="profilerighttop">
                  <ProfileMainportion friendpage screensize />
                </div>
                <div className="profilerightbottom">
                  <Middlebar profile friendpage />
                  <Rightbar profile friendpage />
                </div>
              </div>
          }

        </div>
      </div>
    </>
  )
}
