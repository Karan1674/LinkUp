import React, { useContext, useRef } from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../Store/DummyData';

export default function Friends() {
    const scrollRef = useRef(null);

    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);

    const startDrag = (e) => {
        isDragging.current = true;
        startX.current = e.pageX || e.touches[0].pageX;
        scrollLeft.current = scrollRef.current.scrollLeft;
    };

    const onDrag = (e) => {
        if (!isDragging.current) return;
        const x = e.pageX || e.touches[0].pageX;
        const walk = (x - startX.current) * 1;
        scrollRef.current.scrollLeft = scrollLeft.current - walk;
    };

    const stopDrag = () => {
        isDragging.current = false;
    };


const {friends,handlesetprofile}=useContext(AppContext);

    return (
        <>

            <ul className="sidebarfriends"
                ref={scrollRef}
                onMouseDown={startDrag}
                onMouseMove={onDrag}
                onMouseUp={stopDrag}
                onMouseLeave={stopDrag}
                onTouchStart={startDrag}
                onTouchMove={onDrag}
                onTouchEnd={stopDrag}
            >

                {friends.slice(0, 10).map((friend, index) => (
                    <Link to='/friendpage' style={{ textDecoration: "none", color: "white" }} key={index} onClick={()=>handlesetprofile(friend)}>

                        <li className="friend" >
                            <img src={friend.img} alt="friendimage" className='friendimage' />
                            <span className="friendname">{friend.name}</span>
                        </li>
                    </Link>

                ))}
            </ul>
        </>
    )
}
