import React, { useContext } from 'react'
import '../Styles/Middlebar.css'
import Share from './Share'
import Post from './Post'
import { AppContext } from '../Store/DummyData'

export default function Middlebar({ profile, friendpage }) {

  const { posts, addPost, addcomment, Photos } = useContext(AppContext);

  return (
    <div className='middlebar'>

      <div className="middle-wrapper">
        {friendpage ? '' : <Share addPost={addPost} />}
        {profile || friendpage?
          friendpage ?
            Photos.map((post, index) => (<Post post={post} addPost={addPost} addcomment={addcomment} key={index} friendpage />))
            :
             posts.filter((p) => p.username === 'PhoenixFlare').map((post, index) => (<Post post={post} addPost={addPost} addcomment={addcomment} key={index} />))
          :
          posts.map((post, index) =>
            <Post post={post} addcomment={addcomment} key={index} />
          )}
      </div>
    </div>
  )
}
