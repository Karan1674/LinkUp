import React, { useRef, useState } from 'react'
import { FaPhotoVideo, FaTag, FaMapMarkerAlt, FaHeart } from 'react-icons/fa'

export default function Share({addPost}) {

  const inputdata = useRef(null);
  const [sharedata, setShareData] = useState(null);

  const fileInputRef = useRef(null);

  const handleDivClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    if (files.length > 0) {
      setShareData(files[0]); 
    }
  };

  const uploaddata = () => {
    if (inputdata.current.value || sharedata) {
      const newPost = {
        id:(Math.random()*10000),
        username: 'PhoenixFlare',
        text: inputdata.current.value,
        photo: sharedata ? URL.createObjectURL(sharedata) : null, 
        time: '1 min ago',
        setlike:false,
        like: 0,
        comment: 0,
        image: 'Assets(Images)/AccountImage.jpg',
        commentData:[]
      };
      addPost(newPost);
      inputdata.current.value = null;
      setShareData(null);
    }
  };

  return (
    <>
      <div className="share">
        <div className="share-wrapper">
          <div className="share-top">
            <img src="Assets(Images)/AccountImage.jpg" alt="shareprofileimage" className="shareprofileimage" />
            <input type="text" placeholder="What's in your mind friend?" className='shareinput' ref={inputdata} />
          </div>
          <hr className="shareline" />
          <div className="share-bottom">
            <div className="share-options">
              <div className="option" onClick={handleDivClick}>
                <FaPhotoVideo color='tomato' className='shareicon' />
                <span className='option-text'>Photos or Videos</span>
                <input type="file"
                  ref={fileInputRef}
                  style={{ display: 'none' }}
                  onChange={handleFileChange}
                />
              </div>

              <div className="option">
                <FaTag color="blue" className='shareicon' />
                <span className='option-text'>Tag</span>
              </div>

              <div className="option">
                <FaMapMarkerAlt color='green' className='shareicon' />
                <span className='option-text'>Location</span>
              </div>

              <div className="option">
                <FaHeart color='goldenrod' className='shareicon' />
                <span className='option-text'>Feelings</span>
              </div>
            </div>
            <button className="sharebutton" onClick={uploaddata}>Share</button>
          </div>
        </div>
      </div>
    </>
  )
}
