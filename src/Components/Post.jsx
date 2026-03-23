import React, { useContext, useRef, useState } from 'react'
import { MdMoreVert, MdFavorite, MdThumbUp } from 'react-icons/md';
import { FaArrowRight } from "react-icons/fa";
import '../Styles/Post.css'
import { AppContext } from '../Store/DummyData';
import { Link } from 'react-router-dom';

export default function Post({ post, addcomment, friendpage, addcommentToTrend, trendpage }) {

    const { handlesetprofile } = useContext(AppContext);
    const [islike, setislike] = useState(false);
    const newcomment = useRef(null);
    const [showComments, setShowComments] = useState(false);


    const toggleComments = () => {
        setShowComments(!showComments);
    };


    const likehandler = () => {
        post.like = islike ? post.like - 1 : post.like + 1;
        setislike(!islike);

    }

    const handleCommentUpload = () => {
        const commentText = newcomment.current.value;
        if (commentText.trim() === '') {
            return
        }

        else if (friendpage) {
            addcomment(post.username, post.id, commentText, friendpage)
        }
        else if (trendpage) {
            addcommentToTrend(post.username, post.id, commentText)
        }
        else {
            addcomment(post.username, post.id, commentText)
        }

        newcomment.current.value = '';
    };


    return (
        <>
            <div className="post">
                <div className="post-wrapper">
                    <div className="post-top">
                        <div className="posttop-left">
                            <Link to='/friendpage' onClick={() => handlesetprofile(post, 'homeuser')}>        <img src={post.image} className='postprofileimage' alt="" /></Link>
                            <span className="postusername">{post.username}</span>
                            <span className="posttime">{post.time}</span>
                        </div>
                        <div className="posttop-right">
                            <MdMoreVert />
                        </div>
                    </div>

                    <div className="postcenter">
                        <span className="posttext">
                            {post.text}
                        </span>
                        <img src={post.photo} alt="postimage" className='postimage' style={{ display: post.photo ? 'block' : 'none' }} />
                    </div>

                    <div className="postbottom">
                        <div className="postbottom-left">
                            <div className="posticoncontainer likeicon" onClick={likehandler}>
                                <MdThumbUp className='posticon ' />
                            </div>

                            <div className="posticoncontainer hearticon" onClick={likehandler}>
                                <MdFavorite className='posticon' />
                            </div>

                            <span className="likecounter">
                                {post.like} people like it
                            </span>
                        </div>

                        <div className="postbottom-right">
                            <div className="commentText" onClick={toggleComments}>{post.comment} Comments</div>
                        </div>
                    </div>
                    
                    {showComments && (
                        <div className="commentsBox">
                            <h4>Comments</h4>
                            {(post.commentData || []).map((comment, index) => (
                                <div className="comment" key={index}>
                                    {comment}
                                </div>
                            ))}
                            <div className="commentinputBox">
                                <input type="text" placeholder='Add your comment' className='commentinput' ref={newcomment} />
                                <FaArrowRight className='commentinputIcon' onClick={handleCommentUpload} />
                            </div>
                        </div>

    
    )}

                </div>
            </div>

        </>
    )
}
