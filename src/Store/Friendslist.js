
// const friendlistdata = [
//     { name: 'Alice', img: 'Assets(Images)/friend1.png',folow:true },
//     { name: 'Sid', img: 'Assets(Images)/friend10.jpg' ,folow:false},
//     { name: 'Bob', img: 'Assets(Images)/friend9.jpg',folow:true },
//     { name: 'Alexia', img: 'Assets(Images)/friend14.jpg' ,folow:false},
//     { name: 'Charlie', img: 'Assets(Images)/friend10.jpg',folow:true },
//     { name: 'David', img: 'Assets(Images)/friend11.jpg',folow:true },
//     { name: 'Eve', img: 'Assets(Images)/friend2.png',folow:true },
//     { name: 'Frank', img: 'Assets(Images)/friend12.jpg',folow:true },
//     { name: 'Grace', img: 'Assets(Images)/friend3.jpg',folow:true },
//     { name: 'Aander', img: 'Assets(Images)/friend5.jpg' ,folow:false},
//     { name: 'Hannah', img: 'Assets(Images)/friend4.jpg' ,folow:true},
//     { name: 'Yareen', img: 'Assets(Images)/friend13.jpg',folow:false },
//     { name: 'Ivy', img: 'Assets(Images)/friend5.jpg',folow:true },
//     { name: 'Wendy', img: 'Assets(Images)/friend4.jpg' ,folow:false},
//     { name: 'Bel', img: 'Assets(Images)/friend7.jpg' ,folow:false},
//     { name: 'Jack', img: 'Assets(Images)/friend13.jpg',folow:true },
//     { name: 'Monika', img: 'Assets(Images)/friend7.jpg',folow:false },
//     { name: 'Karen', img: 'Assets(Images)/friend6.jpg',folow:true },
//     { name: 'Ivancy', img: 'Assets(Images)/friend5.jpg',folow:false },
//     { name: 'Leo', img: 'Assets(Images)/friend14.jpg' ,folow:true},
//     { name: 'Sammy', img: 'Assets(Images)/friend11.jpg',folow:false },
//     { name: 'Mona', img: 'Assets(Images)/friend7.jpg',folow:true },
//     { name: 'Admin', img: 'Assets(Images)/friend9.jpg' ,folow:false},
//     { name: 'Nathan', img: 'Assets(Images)/friend15.jpg',folow:true },
//     { name: 'Victoria', img: 'Assets(Images)/friend3.jpg',folow:false },
//     { name: 'Zoey', img: 'Assets(Images)/friend6.jpg',folow:false },
//     { name: 'Butcher', img: 'Assets(Images)/friend14.jpg' ,folow:false},
//     { name: 'Olivia', img: 'Assets(Images)/friend8.jpg',folow:true },
//     { name: 'Hanni', img: 'Assets(Images)/friend4.jpg' ,folow:false},
//     { name: 'Patrick', img: 'Assets(Images)/friend1.png' ,folow:true},
//     { name: 'Uma', img: 'Assets(Images)/friend12.jpg' ,folow:false},
//     { name: 'Quincy', img: 'Assets(Images)/friend9.jpg' ,folow:true},
//     { name: 'Gracy', img: 'Assets(Images)/friend3.jpg',folow:false },
//     { name: 'Karen shah', img: 'Assets(Images)/friend6.jpg',folow:false },
//     { name: 'Rachel', img: 'Assets(Images)/friend10.jpg' ,folow:true},
//     { name: 'Jackie', img: 'Assets(Images)/friend13.jpg',folow:false },
//     { name: 'Stacy', img: 'Assets(Images)/friend1.png' ,folow:false},
//     { name: 'Sam', img: 'Assets(Images)/friend11.jpg',folow:true },
//     { name: 'Nath', img: 'Assets(Images)/friend15.jpg',folow:false },
//     { name: 'Tina', img: 'Assets(Images)/friend2.png' ,folow:true},
//     { name: 'Uma', img: 'Assets(Images)/friend12.jpg' ,folow:true},
//     { name: 'Frankly', img: 'Assets(Images)/friend12.jpg',folow:false },
//     { name: 'Victor', img: 'Assets(Images)/friend3.jpg',folow:true },
//     { name: 'Wendy', img: 'Assets(Images)/friend4.jpg' ,folow:true},
//     { name: 'Xander', img: 'Assets(Images)/friend5.jpg' ,folow:true},
//     { name: 'Oliver', img: 'Assets(Images)/friend8.jpg',folow:false },
//     { name: 'Yara', img: 'Assets(Images)/friend13.jpg',folow:true },
//     { name: 'Eva', img: 'Assets(Images)/friend2.png',folow:false },
//     { name: 'Zoe', img: 'Assets(Images)/friend6.jpg',folow:true },
//     { name: 'Dav', img: 'Assets(Images)/friend11.jpg',folow:false },
//     { name: 'Alex', img: 'Assets(Images)/friend14.jpg' ,folow:true},
//     { name: 'Char', img: 'Assets(Images)/friend10.jpg',folow:false },
//     { name: 'Bella', img: 'Assets(Images)/friend7.jpg' ,folow:true},
//     { name: 'Bobby', img: 'Assets(Images)/friend9.jpg',folow:false },
//     { name: 'Cathy', img: 'Assets(Images)/friend15.jpg' ,folow:true},
//     { name: 'Danie', img: 'Assets(Images)/friend8.jpg' ,folow:false},
//     { name: 'Alicia', img: 'Assets(Images)/friend1.png',folow:false },
//     { name: 'Daniel', img: 'Assets(Images)/friend8.jpg' ,folow:true},
//     { name: 'Tania', img: 'Assets(Images)/friend2.png' ,folow:false},
//     { name: 'Cath', img: 'Assets(Images)/friend15.jpg' ,folow:false}
// ]



// const getonlinefriend=()=>{
// const online =[];
// for(let i=0;online.length<10;i++)
// {
//     let random = Math.floor(Math.random()*60);
//     if(!online.includes(friendlistdata[random]) && friendlistdata[random].folow )
//     {
//         online.push(friendlistdata[random]);
//     }
// }

// return online;
// }


// export const OnlineFriends = getonlinefriend();


// const getclosedfriend=()=>{
//     const closed =[];

//     for(let i=0;closed.length<15;i++)
//     {
//         let random = Math.floor(Math.random()*60);
//         if(!closed.includes(friendlistdata[random]) && friendlistdata[random].folow)
//         {
//             closed.push(friendlistdata[random]);
//         }
//     }
    
//     return closed;
//     }

    
//     export const closedFriends = getclosedfriend();


const friendlistdata = [
    {
      name: 'Sid',
      img: 'Assets(Images)/friend10.jpg',
      folow: false,
      city: 'Los Angeles',
      from: 'USA',
      relationship: 'In a relationship',
      welcomeMessage: 'Hello! Check out my page and let’s stay in touch.'
    },
    {
      name: 'Alice',
      img: 'Assets(Images)/friend1.png',
      folow: true,
      city: 'New York',
      from: 'USA',
      relationship: 'Single',
      welcomeMessage: 'Welcome to my profile! Feel free to explore and connect.'
    },
    {
      name: 'Bob',
      img: 'Assets(Images)/friend9.jpg',
      folow: true,
      city: 'Chicago',
      from: 'USA',
      relationship: 'Married',
      welcomeMessage: 'Glad to have you here! Explore my profile to know more.'
    },
    {
      name: 'Alexia',
      img: 'Assets(Images)/friend14.jpg',
      folow: false,
      city: 'San Francisco',
      from: 'USA',
      relationship: 'Single',
      welcomeMessage: 'Welcome! Enjoy your visit and feel free to connect.'
    },
    {
      name: 'Charlie',
      img: 'Assets(Images)/friend10.jpg',
      folow: true,
      city: 'Houston',
      from: 'Canada',
      relationship: 'Complicated',
      welcomeMessage: 'Hey there! Thanks for stopping by my profile.'
    },
    {
      name: 'David',
      img: 'Assets(Images)/friend11.jpg',
      folow: true,
      city: 'Phoenix',
      from: 'UK',
      relationship: 'Married',
      welcomeMessage: 'Welcome to my profile! Hope you find something interesting.'
    },
    {
      name: 'Eve',
      img: 'Assets(Images)/friend2.png',
      folow: true, city: 'Philadelphia',
      from: 'Australia',
      relationship: 'Single',
      welcomeMessage: 'Hi! Take a look around and feel free to connect.'
    },
    {
      name: 'Frank',
      img: 'Assets(Images)/friend12.jpg',
      folow: true,
      city: 'San Antonio',
      from: 'Germany',
      relationship: 'In a relationship',
      welcomeMessage: 'Welcome to my page! Hope you enjoy your visit.'
    },
    {
      name: 'Grace',
      img: 'Assets(Images)/friend3.jpg',
      folow: true,
      city: 'San Diego',
      from: 'France',
      relationship: 'Married',
      welcomeMessage: 'Hello! Make yourself at home and check out my profile.'
    },
    {
      name: 'Aander',
      img: 'Assets(Images)/friend5.jpg',
      folow: false,
      city: 'Dallas',
      from: 'Italy',
      relationship: 'Single',
      welcomeMessage: 'Thanks for visiting my profile! Explore and connect.'
    },
    {
      name: 'Hannah',
      img: 'Assets(Images)/friend4.jpg',
      folow: true,
      city: 'San Jose',
      from: 'Spain',
      relationship: 'Complicated',
      welcomeMessage: 'Welcome! Feel free to explore and connect.'
    },
    {
      name: 'Yareen',
      img: 'Assets(Images)/friend13.jpg',
      folow: false,
      city: 'Austin',
      from: 'Brazil',
      relationship: 'In a relationship',
      welcomeMessage: 'Hello! Enjoy checking out my profile.'
    },
    {
      name: 'Ivy',
      img: 'Assets(Images)/friend5.jpg',
      folow: true,
      city: 'Jacksonville',
      from: 'Mexico',
      relationship: 'Single',
      welcomeMessage: 'Hi there! Feel free to look around and connect.'
    },
    {
      name: 'Wendy',
      img: 'Assets(Images)/friend4.jpg',
      folow: false,
      city: 'Fort Worth',
      from: 'Argentina',
      relationship: 'Married',
      welcomeMessage: 'Welcome to my profile! Hope you enjoy your visit.'
    },
    {
      name: 'Bel',
      img: 'Assets(Images)/friend7.jpg',
      folow: false,
      city: 'Columbus',
      from: 'Chile',
      relationship: 'Single',
      welcomeMessage: 'Hello! Feel free to explore my profile.'
    },
    {
      name: 'Jack',
      img: 'Assets(Images)/friend13.jpg',
      folow: true,
      city: 'Charlotte',
      from: 'Japan',
      relationship: 'In a relationship',
      welcomeMessage: 'Hey! Thanks for visiting my profile.'
    },
    {
      name: 'Monika',
      img: 'Assets(Images)/friend7.jpg',
      folow: false,
      city: 'Indianapolis',
      from: 'Russia',
      relationship: 'Married',
      welcomeMessage: 'Welcome! Hope you find something interesting here.'
    },
    {
      name: 'Karen',
      img: 'Assets(Images)/friend6.jpg',
      folow: true,
      city: 'Seattle',
      from: 'China',
      relationship: 'Single',
      welcomeMessage: 'Welcome to my profile! Explore and connect.'
    },
    {
      name: 'Ivancy',
      img: 'Assets(Images)/friend5.jpg',
      folow: false,
      city: 'Denver',
      from: 'India',
      relationship: 'Complicated',
      welcomeMessage: 'Hi there! Enjoy your visit to my profile.'
    },
    {
      name: 'Leo',
      img: 'Assets(Images)/friend14.jpg',
      folow: true,
      city: 'Washington',
      from: 'South Korea',
      relationship: 'Single',
      welcomeMessage: 'Welcome! Feel free to explore and connect.'
    },
    {
      name: 'Sammy',
      img: 'Assets(Images)/friend11.jpg',
      folow: false,
      city: 'Boston',
      from: 'South Africa',
      relationship: 'In a relationship',
      welcomeMessage: 'Hello! Take a look around my profile.'
    },
    {
      name: 'Mona',
      img: 'Assets(Images)/friend7.jpg',
      folow: true,
      city: 'El Paso',
      from: 'New Zealand',
      relationship: 'Married',
      welcomeMessage: 'Welcome to my page! Explore and enjoy.'
    },
    {
      name: 'Admin',
      img: 'Assets(Images)/friend9.jpg',
      folow: false,
      city: 'Nashville',
      from: 'Portugal',
      relationship: 'Single',
      welcomeMessage: 'Hi! Check out my profile and stay connected.'
    },
    {
      name: 'Nathan',
      img: 'Assets(Images)/friend15.jpg',
      folow: true,
      city: 'Detroit',
      from: 'Egypt',
      relationship: 'Complicated',
      welcomeMessage: 'Welcome! Feel free to explore and connect.'
    },
    {
      name: 'Victoria',
      img: 'Assets(Images)/friend3.jpg',
      folow: false,
      city: 'Oklahoma City',
      from: 'Nigeria',
      relationship: 'Single',
      welcomeMessage: 'Hello! Enjoy your visit to my profile.'
    },
    {
      name: 'Zoey',
      img: 'Assets(Images)/friend6.jpg',
      folow: false,
      city: 'Portland',
      from: 'Kenya',
      relationship: 'In a relationship',
      welcomeMessage: 'Hi! Thanks for stopping by my profile.'
    },
    {
      name: 'Butcher',
      img: 'Assets(Images)/friend14.jpg',
      folow: false,
      city: 'Las Vegas',
      from: 'Ghana',
      relationship: 'Married',
      welcomeMessage: 'Welcome! Hope you find something interesting.'
    },
    {
      name: 'Olivia',
      img: 'Assets(Images)/friend8.jpg',
      folow: true,
      city: 'Memphis',
      from: 'Ethiopia',
      relationship: 'Single',
      welcomeMessage: 'Hi there! Feel free to explore my profile.'
    },
    {
      name: 'Hanni',
      img: 'Assets(Images)/friend4.jpg',
      folow: false,
      city: 'Louisville',
      from: 'Morocco',
      relationship: 'Complicated',
      welcomeMessage: 'Hello! Enjoy your visit and explore my profile.'
    },
    {
      name: 'Patrick',
      img: 'Assets(Images)/friend1.png',
      folow: true,
      city: 'Baltimore',
      from: 'Thailand',
      relationship: 'Single',
      welcomeMessage: 'Welcome! Feel free to look around and connect.'
    },
    {
      name: 'Uma',
      img: 'Assets(Images)/friend12.jpg',
      folow: false,
      city: 'Milwaukee',
      from: 'Vietnam',
      relationship: 'In a relationship',
      welcomeMessage: 'Hi! Thanks for visiting my profile.'
    },
    {
      name: 'Quincy',
      img: 'Assets(Images)/friend9.jpg',
      folow: true,
      city: 'Albuquerque',
      from: 'Philippines',
      relationship: 'Married',
      welcomeMessage: 'Welcome to my profile! Explore and connect.'
    },
    {
      name: 'Gracy',
      img: 'Assets(Images)/friend3.jpg',
      folow: false,
      city: 'Tucson',
      from: 'Malaysia',
      relationship: 'Single',
      welcomeMessage: 'Hello! Enjoy your visit and explore my profile.'
    },
    {
      name: 'Karen shah',
      img: 'Assets(Images)/friend6.jpg',
      folow: false,
      city: 'Fresno',
      from: 'Singapore',
      relationship: 'Complicated',
      welcomeMessage: 'Hi there! Thanks for checking out my profile.'
    },
    {
      name: 'Rachel',
      img: 'Assets(Images)/friend10.jpg',
      folow: true,
      city: 'Sacramento',
      from: 'Indonesia',
      relationship: 'Single',
      welcomeMessage: 'Welcome! Explore my profile and connect.'
    },
    {
      name: 'Jackie',
      img: 'Assets(Images)/friend13.jpg',
      folow: false,
      city: 'Mesa',
      from: 'Turkey',
      relationship: 'In a relationship',
      welcomeMessage: 'Hello! Feel free to check out my profile.'
    },
    {
      name: 'Stacy',
      img: 'Assets(Images)/friend1.png',
      folow: false,
      city: 'Kansas City',
      from: 'Poland',
      relationship: 'Married',
      welcomeMessage: 'Hi! Thanks for visiting my profile.'
    },
    {
      name: 'Sam',
      img: 'Assets(Images)/friend11.jpg',
      folow: true,
      city: 'Atlanta',
      from: 'Greece',
      relationship: 'Single',
      welcomeMessage: 'Welcome! Explore my profile and connect.'
    },
    {
      name: 'Nath',
      img: 'Assets(Images)/friend15.jpg',
      folow: false,
      city: 'Omaha',
      from: 'Netherlands',
      relationship: 'Complicated',
      welcomeMessage: 'Hello! Take a look around my profile.'
    },
    {
      name: 'Tina',
      img: 'Assets(Images)/friend2.png',
      folow: true,
      city: 'Miami',
      from: 'Norway',
      relationship: 'Single',
      welcomeMessage: 'Welcome! Feel free to explore and connect.'
    },
    {
      name: 'Uam',
      img: 'Assets(Images)/friend12.jpg',
      folow: true,
      city: 'Long Beach',
      from: 'Finland',
      relationship: 'In a relationship',
      welcomeMessage: 'Hi! Thanks for visiting my profile.'
    },
    {
      name: 'Frankly',
      img: 'Assets(Images)/friend12.jpg',
      folow: false,
      city: 'Virginia Beach',
      from: 'Sweden', relationship: 'Married',
      welcomeMessage: 'Welcome to my profile! Hope you enjoy your visit.'
    },
    {
      name: 'Victor',
      img: 'Assets(Images)/friend3.jpg',
      folow: true,
      city: 'Oakland',
      from: 'Denmark',
      relationship: 'Single',
      welcomeMessage: 'Hello! Explore my profile and connect.'
    },
    {
      name: 'Wend',
      img: 'Assets(Images)/friend4.jpg',
      folow: true,
      city: 'Minneapolis',
      from: 'Iceland', relationship: 'Complicated',
      welcomeMessage: 'Welcome! Feel free to explore my profile.'
    },
    {
      name: 'Xander',
      img: 'Assets(Images)/friend5.jpg',
      folow: true,
      city: 'Tulsa',
      from: 'Belgium',
      relationship: 'Single',
      welcomeMessage: 'Hi there! Thanks for checking out my profile.'
    },
    {
      name: 'Oliver',
      img: 'Assets(Images)/friend8.jpg',
      folow: false,
      city: 'Tampa',
      from: 'Switzerland',
      relationship: 'In a relationship',
      welcomeMessage: 'Hello! Enjoy your visit and explore my profile.'
    },
    {
      name: 'Yara',
      img: 'Assets(Images)/friend13.jpg',
      folow: true,
      city: 'Arlington',
      from: 'Austria',
      relationship: 'Married',
      welcomeMessage: 'Welcome to my profile! Hope you find something interesting.'
    },
    {
      name: 'Eva',
      img: 'Assets(Images)/friend2.png',
      folow: false,
      city: 'New Orleans',
      from: 'Czech Republic',
      relationship: 'Single',
      welcomeMessage: 'Hi! Take a look around my profile.'
    },
    {
      name: 'Zoe',
      img: 'Assets(Images)/friend6.jpg',
      folow: true,
      city: 'Wichita',
      from: 'Hungary',
      relationship: 'Complicated',
      welcomeMessage: 'Welcome! Feel free to explore and connect.'
    },
    {
      name: 'Dav',
      img: 'Assets(Images)/friend11.jpg',
      folow: false,
      city: 'Bakersfield',
      from: 'Israel',
      relationship: 'Single',
      welcomeMessage: 'Hello! Enjoy checking out my profile.'
    },
    {
      name: 'Alex',
      img: 'Assets(Images)/friend14.jpg',
      folow: true,
      city: 'Aurora',
      from: 'Iran',
      relationship: 'In a relationship',
      welcomeMessage: 'Welcome to my profile! Explore and connect.'
    },
    {
      name: 'Char',
      img: 'Assets(Images)/friend10.jpg',
      folow: false,
      city: 'Anaheim',
      from: 'Iraq',
      relationship: 'Married',
      welcomeMessage: 'Hi there! Thanks for visiting my profile.'
    },
    {
      name: 'Bella',
      img: 'Assets(Images)/friend7.jpg',
      folow: true,
      city: 'Santa Ana',
      from: 'Jordan',
      relationship: 'Single',
      welcomeMessage: 'Welcome! Feel free to look around and connect.'
    },
    {
      name: 'Bobby',
      img: 'Assets(Images)/friend9.jpg',
      folow: false,
      city: 'Riverside',
      from: 'Lebanon',
      relationship: 'Complicated',
      welcomeMessage: 'Hello! Explore my profile and enjoy your visit.'
    },
    {
      name: 'Cathy',
      img: 'Assets(Images)/friend15.jpg',
      folow: true,
      city: 'Corpus Christi',
      from: 'Syria',
      relationship: 'Single',
      welcomeMessage: 'Welcome! Thanks for visiting my profile.'
    },
    {
      name: 'Danie',
      img: 'Assets(Images)/friend8.jpg',
      folow: false,
      city: 'Lexington',
      from: 'Yemen',
      relationship: 'In a relationship',
      welcomeMessage: 'Hi! Check out my profile and connect.'
    },
    {
      name: 'Alicia',
      img: 'Assets(Images)/friend1.png',
      folow: false,
      city: 'Henderson',
      from: 'Saudi Arabia',
      relationship: 'Married',
      welcomeMessage: 'Welcome to my profile! Hope you find it interesting.'
    },
    {
      name: 'Daniel',
      img: 'Assets(Images)/friend8.jpg',
      folow: true,
      city: 'Stockton',
      from: 'Pakistan',
      relationship: 'Single',
      welcomeMessage: 'Hi there! Enjoy your visit and connect with me.'
    },
    {
      name: 'Tania',
      img: 'Assets(Images)/friend2.png',
      folow: false,
      city: 'Saint Paul',
      from: 'Bangladesh',
      relationship: 'Complicated',
      welcomeMessage: 'Hello! Feel free to explore my profile.'
    },
    {
      name: 'Cath',
      img: 'Assets(Images)/friend15.jpg',
      folow: false,
      city: 'Cincinnati',
      from: 'Sri Lanka',
      relationship: 'Single',
      welcomeMessage: 'Hi! Thanks for visiting my profile.'
    }
  ];

  export default friendlistdata;