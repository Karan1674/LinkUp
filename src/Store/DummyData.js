import { createContext, useEffect, useState } from "react";
import friendlistdata from './Friendslist.js';
import postsdata from "./postsdata.js";


export const users = [
  { id: 1, username: 'TechWhizKid', image: 'Assets(Images)/friend13.jpg' },
  { id: 2, username: 'PixelPioneer', image: 'Assets(Images)/friend12.jpg' },
  { id: 3, username: 'ByteGuru', image: 'Assets(Images)/friend5.jpg' },
  { id: 4, username: 'CodeNinjaX', image: 'Assets(Images)/friend3.jpg' },
  { id: 5, username: 'CyberVoyager', image: 'Assets(Images)/friend4.jpg' },
  { id: 6, username: 'QuantumCoder', image: 'Assets(Images)/friend6.jpg' },
  { id: 7, username: 'NeonSpark', image: 'Assets(Images)/friend2.png' },
  { id: 8, username: 'VirtuosoVortex', image: 'Assets(Images)/friend14.jpg' },
  { id: 9, username: 'BinaryBeast', image: 'Assets(Images)/friend11.jpg' },
  { id: 10, username: 'TechnoWanderer', image: 'Assets(Images)/friend7.jpg' },
  { id: 11, username: 'CosmicCoder', image: 'Assets(Images)/friend10.jpg' },
  { id: 12, username: 'PixelatedPro', image: 'Assets(Images)/friend9.jpg' },
  { id: 13, username: 'CircuitSage', image: 'Assets(Images)/friend15.jpg' },
  { id: 14, username: 'DigitalDreamer', image: 'Assets(Images)/friend1.png' },
  { id: 15, username: 'TechSavvySoul', image: 'Assets(Images)/friend8.jpg' },
  { id: 16, username: 'CodeWarrior', image: 'Assets(Images)/friend13.jpg' },
  { id: 17, username: 'InnovativeIcon', image: 'Assets(Images)/friend12.jpg' },
  { id: 18, username: 'DevMaven', image: 'Assets(Images)/friend5.jpg' },
  { id: 19, username: 'DigitalNomad', image: 'Assets(Images)/friend3.jpg' },
  { id: 20, username: 'AlgorithmAce', image: 'Assets(Images)/friend4.jpg' }
];





export const AppContext = createContext();

export const Appprovider = ({ children }) => {
  const [posts, setposts] = useState(postsdata);
  const [friends, setfriends] = useState(friendlistdata);
  const [profiledata, setprofile] = useState({
    name: 'Sid',
    img: 'Assets(Images)/friend10.jpg',
    folow: false,
    city: 'Los Angeles',
    from: 'USA',
    relationship: 'In a relationship',
    welcomeMessage: 'Hello! Check out my page and let’s stay in touch.'
  });


  const addPost = (newPost) => {
    setposts([newPost, ...posts]);
  };

  const addcomment = (username, id, newcomment, friendpage) => {
    if (friendpage) {
      setPhotos(Photos.map((post) => {
        if (post.username === username && post.id === id) {
          return {
            ...post,
            commentData: [...post.commentData, newcomment],
            comment: post.comment + 1
          };
        }
        return post;
      }))
    } else {
      setposts(posts.map((post) => {
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
  };


  const getonlinefriend = () => {
    const online = [];
    const max = 60;
    let attempts = 0;
    let random = 0;
    while (online.length < 10 && attempts <= max) {

      if (friends[random] && !online.includes(friends[random]) && friends[random].folow) {
        online.push(friends[random]);
      }
      random++;
      attempts++;
    }
     return online;
  }

  const getclosedfriend = () => {
     const closed = [];
    const max = 60;
    let attempts = 0;
    let random = 0;
    while (closed.length < 15 && attempts <= max) {
      if (friends[random] && !closed.includes(friends[random]) && friends[random].folow) {
        closed.push(friends[random]);
      }
      random++;
      attempts++;
    }

     return closed;
  }

  const [onlinefriends, setonlinefriends] = useState(getonlinefriend());
  const [closedFriends, setclosedfriends] = useState(getclosedfriend());
  const [friendclosedFriends, setfriendclosedfriends] = useState(getclosedfriend());
  const [Photos, setPhotos] = useState([]);

  const followupdate = (friend) => {

    setfriends((prevFriends) =>
      prevFriends.map((singlefriend) =>
        singlefriend.name === friend.name
          ? { ...singlefriend, folow: !singlefriend.folow }
          : singlefriend
      )
    );
  }


  useEffect(() => {
    const updatedProfile = friends.find(f => f.name === profiledata.name) || {};
    setprofile(updatedProfile);
    setonlinefriends(getonlinefriend());
    setclosedfriends(getclosedfriend());
  }, [friends]);


  useEffect(() => {
    const closed = [];
    const max = 60;
    let attempts = 0;

    while (closed.length < 15 && attempts <= max) {
      let random = Math.floor(Math.random() * 60);
      if (friends[random] && !closed.includes(friends[random]) && friends[random].folow) {
        if (friends[random].name === profiledata.name) {
          continue;
        }
        else {
          closed.push(friends[random]);
        }
      }
      attempts++;
    }
    setfriendclosedfriends(closed);
  }, [profiledata.name])

  useEffect(() => {
    const fetchbackgroundimage = async () => {
      try {
        const apiKey = process.env.REACT_APP_RAPIDAPI_KEY;
        const url = 'https://free-images-api.p.rapidapi.com/v2/Mountain/1';
        const options = {
          method: 'GET',
          headers: {
            'x-rapidapi-key': apiKey,
            'x-rapidapi-host': 'free-images-api.p.rapidapi.com'
          }
        };


        const response = await fetch(url, options);
        const result = await response.json();

        let photos = [];
        for (let i = 0; i < 20; i++) {
          let data = {
            id: (Math.random() * 10000),
            text: result.results[i].description,
            photo: result.results[i].image,
            username: profiledata.name,
            like: Math.floor(Math.random() * 100),
            comment: 4,
            time: `${Math.floor(Math.random() * 12)} hours ago`,
            image: profiledata.img,
            commentData: [
              'What a view!',
              'Adventurous!',
              'Exploration at its best!',
              'Amazing journey!'
            ]
          }
          photos.push(data)
        }
        setPhotos(photos)

      }
      catch (error) {
        console.log(error);
        let photos = [{
          id: (Math.random() * 10000),
          text: 'Enjoy the little things',
          photo: 'Assets(Images)/post26.png',
          username: profiledata.name,
          like: Math.floor(Math.random() * 100),
          comment: 4,
          time: `${Math.floor(Math.random() * 12)} hours ago`,
          image: profiledata.img,
          commentData: [
            'What a view!',
            'Adventurous!',
            'Exploration at its best!',
            'Amazing journey!'
          ]
        }];
        setPhotos(photos)
      }
    }

    fetchbackgroundimage()
  }, []);


  useEffect(() => {
    if (Photos.length > 0) {
      const extendedArray = Photos.map((item) => ({
        ...item,
        id: (Math.random() * 10000),
        username: profiledata.name,
        like: Math.floor(Math.random() * 100),
        comment: 4,
        time: `${Math.floor(Math.random() * 12)} hours ago`,
        image: profiledata.img,
        commentData: [
          'What a view!',
          'Adventurous!',
          'Exploration at its best!',
          'Amazing journey!'
        ]
      }));
      setPhotos(extendedArray)
    }
  }, [profiledata.name]);



  const handlesetprofile = async (data, homeuser) => {

    let userdata = {};
    if (homeuser) {
      const foundUser = friendlistdata.find(f => f.name === data.username);
      if (foundUser) {

        userdata = profiledata
      }
      else {
        userdata = {
          name: data.username,
          img: data.image,
          folow: false,
          city: 'Los Angeles',
          from: 'USA',
          relationship: 'In a relationship',
          welcomeMessage: 'Hello! Check out my page and let’s stay in touch.'
        }
      }
      setprofile(userdata);
    }
    else {
      setprofile(data);
    }
  }

  return (
    <>
      <AppContext.Provider value={{ posts, Photos, addPost, addcomment, friends, followupdate, onlinefriends, closedFriends, profiledata, handlesetprofile, friendclosedFriends }}>
        {children}
      </AppContext.Provider>
    </>
  )
}

