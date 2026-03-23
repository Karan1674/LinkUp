import React from 'react'

export default function OnlineFriend({ online }) {


  
  return (
    <>
      <li className="rightbarFriend">
        <div className="rightImageContainer">
          <img src={online.img} alt="" className='rightProfileImage' />
          <span className="online"></span>
        </div>
        <span className="rightbarUsername">{online.name}</span>
      </li>

    </>
  )
}
