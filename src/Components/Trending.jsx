import React, { useEffect, useState } from 'react'
import Rightbar from '../Components/Rightbar'
import '../Styles/Hero.css'
import Sidebar from './Sidebar'
import '../Styles/Trending.css'
import { users } from '../Store/DummyData'
import Post from './Post'

export function Trendingdata() {

    const trend = ["Mountain", "Food", "Travel", "Fashion","Movies", "Technology", "Books", "Science", "Music", "Games",
        "Fitness", "Art", "Education"];
    const [trendData, setTrendData] = useState(null);


    const fetchdata = async (item) => {
        try {
          const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;
          const url = `https://free-images-api.p.rapidapi.com/v2/${item}/1`;
          const options = {
            method: 'GET',
            headers: {
              'x-rapidapi-key': apiKey,
              'x-rapidapi-host': 'free-images-api.p.rapidapi.com'
            }
          };
  
  
          const response = await fetch(url, options);
          const result = await response.json();
  
          let trend = [];
          for (let i = 0; i < 20; i++) {
             let random = Math.floor(Math.random() * 20);
            let data = {
              id: (Math.random() * 10000),
              text: result.results[i].description,
              photo: result.results[i].image,
              username:users[random].username ,
              like: Math.floor(Math.random() * 100),
              comment: 4,
              time: `${Math.floor(Math.random() * 12)} hours ago`,
              image: users[random].image,
              commentData: [
                'Fantastic!',
                'Good!',
                'Exploration at its best!',
                'Amazing!'
              ]
            }
            trend.push(data)
          }
          setTrendData(trend)
  
        }
        catch (error) {
          console.log(error);
        }
      }

      useEffect(()=>{
          fetchdata('Mountain')
      },[]);

    
const addcommentInTrend=(username,id,newcomment)=>{
  setTrendData(trendData.map((post) => {
    if (post.username === username && post.id === id) {
      return {
        ...post,
        commentData: [...post.commentData, newcomment],
        comment: post.comment + 1
      };
    }
    return post;
  }))
}

    return (
        <>
            <div className="trending">
                <div className="trend-wrapper">
                  <div className="trend-items">
                  {trend.map((item, index) => 
                        <p onClick={()=>{fetchdata(item)}} key={index}>{item}</p>
                    )}
                  </div>
                    {trendData ? trendData.map((post,index)=><Post post={post} addcomment={addcommentInTrend} key={index}  trendage/>) : ""}
                </div>
            </div>
        </>
    )
}


export default function Trending() {
    return (
        <>
            <div className="HeroContainer">
                <Sidebar />
                <Trendingdata />
                <Rightbar />
            </div>
        </>
    )
}
