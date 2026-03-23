
const postsdata = [
    {
      id: 1,
      username: 'TechWhizKid',
      text: 'Love For All, Hatred For None',
      photo: 'Assets(Images)/post1.jpg',
      time: '5 min ago',
      like: 32,
      comment: 2,
      image: 'Assets(Images)/friend13.jpg',
      commentData: [
        'Great message!',
        'Spread love!'
      ]
    },
    {
      id: 2, username: 'PixelPioneer',
      text: 'What A Beautiful Day, Lots Of Love',
      photo: 'Assets(Images)/post2.png',
      time: '12 min ago',
      like: 10,
      comment: 3,
      image: 'Assets(Images)/friend12.jpg',
      commentData: [
        'Amazing!',
        'So beautiful!',
        'Lovely!'
      ]
    },
    {
      id: 3, username: 'ByteGuru',
      text: 'Exploring the world one step at a time',
      photo: 'Assets(Images)/post3.jpeg',
      time: '30 min ago',
      like: 45,
      comment: 4,
      image: 'Assets(Images)/friend5.jpg',
      commentData: [
        'What a view!',
        'Adventurous!',
        'Exploration at its best!',
        'Amazing journey!'
      ]
    },
    {
      id: 4, username: 'PhoenixFlare',
      text: 'Code like there\'s no bug',
      photo: 'Assets(Images)/post21.png',
      time: '4 hour ago',
      like: 150,
      comment: 8,
      image: 'Assets(Images)/AccountImage.jpg',
      commentData: [
        'Absolutely!',
        'So true!',
        'Amazing!',
        'Great advice!',
        'Coding love!',
        'Keep it up!',
        'Inspiring!',
        'Perfect!'
      ]
    },
    {
      id: 5, username: 'CodeNinjaX',
      text: 'Coding is my passion!',
      photo: 'Assets(Images)/post4.png',
      time: '1 hour ago',
      like: 78,
      comment: 1,
      image: 'Assets(Images)/friend3.jpg',
      commentData: [
        'Keep coding!'
      ]
    },
    {
      id: 6, username: 'CyberVoyager',
      text: 'Nature is the art of God',
      photo: 'Assets(Images)/post5.png',
      time: '2 years ago',
      like: 54,
      comment: 5,
      image: 'Assets(Images)/friend4.jpg',
      commentData: [
        'Beautiful scenery!',
        'Nature\'s beauty!',
        'Absolutely stunning!',
        'So true!',
        'Incredible!'
      ]
    },
    {
      id: 7, username: 'QuantumCoder',
      text: 'Happiness is homemade',
      photo: 'Assets(Images)/post6.png',
      time: '3 months ago',
      like: 60,
      comment: 3,
      image: 'Assets(Images)/friend6.jpg',
      commentData: [
        'So true!',
        'Heartwarming!',
        'Absolutely!'
      ]
    },
  
    {
      id: 8, username: 'PhoenixFlare',
      text: 'Design is intelligence made visible',
      photo: 'Assets(Images)/post22.png',
      time: '1 day ago',
      like: 210,
      comment: 15,
      image: 'Assets(Images)/AccountImage.jpg',
      commentData: [
        'Well said!',
        'Inspiring!',
        'Love this!',
        'So true!',
        'Great!',
        'Brilliant!',
        'Wonderful!',
        'Insightful!',
        'Impressive!',
        'Fantastic!',
        'Beautiful!',
        'Smart!',
        'Agree!',
        'Stunning!',
        'Superb!'
      ]
    },
  
    {
      id: 9, username: 'NeonSpark',
      text: 'Life is a journey, enjoy the ride',
      photo: 'Assets(Images)/post7.jpeg',
      time: '4 hours ago',
      like: 89,
      comment: 2,
      image: 'Assets(Images)/friend2.png',
      commentData: [
        'Absolutely!',
        'Great perspective!'
      ]
    },
    {
      id: 10, username: 'VirtuosoVortex',
      text: 'Stay positive, work hard, make it happen',
      photo: 'Assets(Images)/post8.jpeg',
      time: '5 months ago',
      like: 70,
      comment: 7,
      image: 'Assets(Images)/friend14.jpg',
      commentData: [
        'Words to live by!',
        'Inspiring!',
        'Absolutely!',
        'So true!',
        'Incredible!',
        'Fantastic!',
        'Love this!'
      ]
    },
    {
      id: 11, username: 'BinaryBeast',
      text: 'Dream big, work hard',
      photo: 'Assets(Images)/post9.jpeg',
      time: '6 hours ago',
      like: 48,
      comment: 4,
      image: 'Assets(Images)/friend11.jpg',
      commentData: [
        'Absolutely!',
        'Great motivation!',
        'Inspiring!',
        'So true!'
      ]
    },
    {
      id: 12, username: 'TechnoWanderer',
      text: 'Life is short, make it sweet',
      photo: 'Assets(Images)/post10.jpeg',
      time: '7 hours ago',
      like: 95,
      comment: 6,
      image: 'Assets(Images)/friend7.jpg',
      commentData: [
        'Yummy!',
        'Delicious!',
        'Sweet!',
        'Tasty!',
        'Absolutely!',
        'Love this!'
      ]
    },
    {
      id: 13, username: 'CosmicCoder',
      text: 'Live life to the fullest',
      photo: 'Assets(Images)/post11.png',
      time: '8 months ago',
      like: 120,
      comment: 3,
      image: 'Assets(Images)/friend10.jpg',
      commentData: [
        'Carpe diem!',
        'Seize the day!',
        'Absolutely!'
      ]
    },
    {
      id: 14, username: 'PhoenixFlare',
      text: 'Nature is not a place to visit. It is home.',
      photo: 'Assets(Images)/post24.png',
      time: '3 days ago',
      like: 275,
      comment: 20,
      image: 'Assets(Images)/AccountImage.jpg',
      commentData: [
        'Absolutely!',
        'So true!',
        'Beautiful!',
        'Incredible!',
        'Lovely!',
        'Nature!',
        'Wonderful!',
        'Perfect!',
        'True!',
        'Amazing!',
        'Agree!',
        'Fantastic!',
        'Great!',
        'Stunning!',
        'Love this!',
        'Inspiring!',
        'Nature love!',
        'Amazing!',
        'Brilliant!',
        'Wonderful!'
      ]
    },
    {
      id: 15, username: 'PixelatedPro',
      text: 'Cherish every moment',
      photo: 'Assets(Images)/post12.png',
      time: '9 hours ago',
      like: 30,
      comment: 2,
      image: 'Assets(Images)/friend9.jpg',
      commentData: [
        'So true!',
        'Absolutely!'
      ]
    },
    {
      id: 16, username: 'CircuitSage',
      text: 'Adventure is out there',
      photo: 'Assets(Images)/post13.png',
      time: '10 hours ago',
      like: 85,
      comment: 5,
      image: 'Assets(Images)/friend15.jpg',
      commentData: [
        'Let\'s go!',
        'Adventure awaits!',
        'Absolutely!',
        'Incredible!',
        'Fantastic!'
      ]
    },
    {
      id: 17, username: 'PhoenixFlare',
      text: 'Eat, Sleep, Code, Repeat',
      photo: 'Assets(Images)/post23.png',
      time: '10 hours ago',
      like: 180,
      comment: 12,
      image: 'Assets(Images)/AccountImage.jpg',
      commentData: [
        'Exactly!',
        'Every day!',
        'So true!',
        'Well said!',
        'Coding life!',
        'Perfect!',
        'Keep going!',
        'Amazing!',
        'Love this!',
        'Motivating!',
        'Great!',
        'True!'
      ]
    },
    {
      id: 18, username: 'DigitalDreamer',
      text: 'Grateful for every day',
      photo: 'Assets(Images)/post14.png',
      time: '11 hours ago',
      like: 65,
      comment: 3,
      image: 'Assets(Images)/friend1.png',
      commentData: [
        'Thankful!',
        'Grateful!',
        'Blessed!'
      ]
    },
    {
      id: 19,
      username: 'TechSavvySoul',
      text: 'Believe in yourself',
      photo: 'Assets(Images)/post15.png',
      time: '12 hours ago',
      like: 92,
      comment: 8,
      image: 'Assets(Images)/friend8.jpg',
      commentData: [
        'Always!',
        'Believe!',
        'You can do it!',
        'Absolutely!',
        'Inspirational!',
        'Fantastic!',
        'So true!',
        'Inspiring!'
      ]
    },
    {
      id: 20, username: 'CodeWarrior',
      text: 'Find beauty in the small things',
      photo: 'Assets(Images)/post16.png',
      time: '13 hours ago',
      like: 76,
      comment: 6,
      image: 'Assets(Images)/friend13.jpg',
      commentData: [
        'Absolutely!',
        'So true!',
        'Beautiful!',
        'Incredible!',
        'Lovely!',
        'Fantastic!'
      ]
    },
    {
      id: 21, username: 'PhoenixFlare',
      text: 'Travel far, travel wide',
      photo: 'Assets(Images)/post25.png',
      time: '13 hours ago',
      like: 240,
      comment: 18,
      image: 'Assets(Images)/AccountImage.jpg',
      commentData: [
        'Absolutely!',
        'So true!',
        'Beautiful!',
        'Incredible!',
        'Lovely!',
        'Travel!',
        'Wonderful!',
        'Perfect!',
        'True!',
        'Amazing!',
        'Agree!',
        'Fantastic!',
        'Great!',
        'Stunning!',
        'Love this!',
        'Inspiring!',
        'Travel love!',
        'Amazing!'
      ]
    },
    {
      id: 22, username: 'InnovativeIcon',
      text: 'Work hard, stay humble',
      photo: 'Assets(Images)/post17.png',
      time: '14 hours ago',
      like: 58,
      comment: 4,
      image: 'Assets(Images)/friend12.jpg',
      commentData: [
        'Words to live by!',
        'Inspiring!',
        'Absolutely!',
        'Great advice!'
      ]
    },
    {
      id: 23, username: 'DevMaven',
      text: 'Success is no accident',
      photo: 'Assets(Images)/post18.png',
      time: '15 hours ago',
      like: 102,
      comment: 9,
      image: 'Assets(Images)/friend5.jpg',
      commentData: [
        'So true!',
        'Absolutely!',
        'Incredible!',
        'Fantastic!',
        'Inspiring!',
        'Amazing!',
        'Great perspective!',
        'Motivating!',
        'True words!'
      ]
    },
    {
      id: 24,
      username: 'DigitalNomad',
      text: 'Make today amazing',
      photo: 'Assets(Images)/post19.png',
      time: '18 hours ago',
      like: 90,
      comment: 7,
      image: 'Assets(Images)/friend3.jpg',
      commentData: [
        'Absolutely!',
        'Great motivation!',
        'Inspiring!',
        'Fantastic!',
        'Amazing!',
        'So true!',
        'Incredible!'
      ]
    },
    {
      id: 25, username: 'AlgorithmAce',
      text: 'Enjoy the little things',
      photo: 'Assets(Images)/post20.png',
      time: '20 hours ago',
      like: 110,
      comment: 5,
      image: 'Assets(Images)/friend4.jpg',
      commentData: [
        'Absolutely!',
        'So true!',
        'Beautiful!',
        'Incredible!',
        'Lovely!'
      ]
    },
  
    {
      id: 26, username: 'PhoenixFlare',
      text: 'Train hard or go home',
      photo: 'Assets(Images)/post26.png',
      time: '22 hours  ago',
      like: 200,
      comment: 10,
      image: 'Assets(Images)/AccountImage.jpg',
      commentData: [
        'Absolutely!',
        'So true!',
        'Motivating!',
        'Incredible!',
        'Lovely!',
        'Fitness!',
        'Wonderful!',
        'Perfect!',
        'True!',
        'Amazing!'
      ]
    }
  ];


  export default postsdata;