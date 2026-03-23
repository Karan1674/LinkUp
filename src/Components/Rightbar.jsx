import React, { useContext } from 'react'
import '../Styles/Rightbar.css'
import OnlineFriend from './OnlineFriend'
import { AppContext } from '../Store/DummyData'
import { Link } from 'react-router-dom';


export default function Rightbar({ profile, friendpage }) {

  const { onlinefriends, closedFriends,friendclosedFriends, handlesetprofile, profiledata, followupdate } = useContext(AppContext);


  const homeRightbar = () => {
    return (
      <>
        <div className="birthday">
          <img src="Assets(Images)/Birthday.png" alt="birthday" className='birthdayimage' />
          <span className="birthdaytext">

            <b>David</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <img src="Assets(Images)/ad.jpg" alt="adimage" className="rightbarAdimage" />
        <h4 className="rightbarTitle">Online Friends</h4>

        <ul className="rightbarfriendlist">

          {onlinefriends.length>0 && onlinefriends.map((online, index) =>
            <Link to='/friendpage' key={index} style={{ textDecoration: 'none', color: "black" }} onClick={() => handlesetprofile(online)}><OnlineFriend online={online} /></Link>
          )}

        </ul>
      </>
    )
  }


  const profileRightbar = () => {
    return (
      <>

        {friendpage ?
          <>
            <button className="follow-unfollow" onClick={() => followupdate(profiledata)}>
              {profiledata.folow ? 'Unfollow' : 'Follow'}
            </button>
            <h4 className="rightbaretitle">{profiledata.name} Infomation</h4>

            <div className="rightbarinfo">
              <div className="rightbarinfoItem">
                <span className="infoKey">City : </span>
                <span className="infoValue">{profiledata.city} </span>

              </div>

              <div className="rightbarinfoItem">
                <span className="infoKey">From : </span>
                <span className="infoValue">{profiledata.from} </span>
              </div>

              <div className="rightbarinfoItem">
                <span className="infoKey">Relationship : </span>
                <span className="infoValue">{profiledata.relationship}</span>
              </div>
            </div>

            <h4 className="rightbaretitle">{profiledata.name} Friends</h4>
            <div className="rightbarFollowings">
          {friendclosedFriends.length > 0 &&  friendclosedFriends.map((friend, index) =>
            <Link to='/friendpage' key={index} style={{ textDecoration: 'none', color: "black" }} onClick={() => handlesetprofile(friend)}>
              <div className="following">
                <img src={friend.img} alt="" className="followingFriend" />
                <span className="followingName">{friend.name}</span>
              </div>
            </Link>
          )}
        </div>

          </>
          :
          <>
            <h4 className="rightbaretitle">User Infomation</h4>
            <div className="rightbarinfo">
              <div className="rightbarinfoItem">
                <span className="infoKey">City : </span>
                <span className="infoValue">Sahlon, Punjab </span>

              </div>

              <div className="rightbarinfoItem">
                <span className="infoKey">From : </span>
                <span className="infoValue">India </span>
              </div>

              <div className="rightbarinfoItem">
                <span className="infoKey">Relationship : </span>
                <span className="infoValue">Single </span>
              </div>
            </div>

       <h4 className="rightbaretitle">User Friends</h4>
        <div className="rightbarFollowings">
          {closedFriends.length > 0 && closedFriends.map((friend, index) =>
            <Link to='/friendpage' key={index} style={{ textDecoration: 'none', color: "black" }} onClick={() => handlesetprofile(friend)}>
              <div className="following">
                <img src={friend.img} alt="" className="followingFriend" />
                <span className="followingName">{friend.name}</span>
              </div>
            </Link>
          )}
        </div>
          </>}



      </>
    )
  }

  return (
    <div className='rightbar'>
      <div className="rightbarwrapper">
        {profile ? profileRightbar() : homeRightbar()}
      </div>
    </div>
  )
}
