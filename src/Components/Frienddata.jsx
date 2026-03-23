import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../Store/DummyData';

export default function Frienddata() {
    const { friends, followupdate ,handlesetprofile} = useContext(AppContext);

    const Frienddatause = ({ friend, connection, suggestion }) => {
        return (
            <>
                {friend.folow && connection ? (
                    <div className='singleFriend'>
                        <Link to='/friendpage' style={{ textDecoration: "none", color: "white" }}  onClick={()=>handlesetprofile(friend)}>
                            <li className="friendpage-friend">
                                <img src={friend.img} alt="friendimage" className='friendpage-friendimage' />
                                <span className="friendpage-friendname">{friend.name}</span>
                            </li>
                        </Link>
                        <button className="follow-unfollow" onClick={() => followupdate(friend)}>
                            {friend.folow ? 'Unfollow' : 'Follow'}
                        </button>
                    </div>
                ) : ''}

                {!friend.folow && suggestion ? (
                    <div className='singleFriend'>
                        <Link to='/friendpage' style={{ textDecoration: "none", color: "white" }} onClick={()=>handlesetprofile(friend)}>
                            <li className="friendpage-friend">
                                <img src={friend.img} alt="friendimage" className='friendpage-friendimage' />
                                <span className="friendpage-friendname">{friend.name}</span>
                            </li>
                        </Link>
                        <button className="follow-unfollow" onClick={() => followupdate(friend)}>
                            {friend.folow ? 'Unfollow' : 'Follow'}
                        </button>
                    </div>
                ) : ''}
            </>
        );
    };

    return (
        <>
            <div className="connection">
                <h4>Connections</h4>
                <ul className="friendpage-friends">
                    {friends.map((friend, index) => (
                        <Frienddatause friend={friend} key={index} connection />
                    ))}
                </ul>
            </div>

            <div className="connection">
                <h4>Suggestions</h4>
                <ul className="friendpage-friends">
                    {friends.map((friend, index) => (
                        <Frienddatause friend={friend} key={index} suggestion />
                    ))}
                </ul>
            </div>
        </>
    );
}