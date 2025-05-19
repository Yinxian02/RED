import biju_cover from '../assets/biju/001.jpg';
import cny_cover from '../assets/cny/004.JPG';
import mnight_cover from '../assets/mnight/006.jpeg';
import workshop_cover from '../assets/workshop/001.png';

const bijuGallery = [
    require('../assets/biju/001.jpg'),
    require('../assets/biju/002.jpg'),
    require('../assets/biju/003.PNG'),
    require('../assets/biju/004.PNG'),
]

const cnyGallery = [
  require('../assets/cny/004.JPG'),
    require('../assets/cny/001.jpg'),
    require('../assets/cny/002.jpg'),
    require('../assets/cny/003.jpeg'),
]

const mnightGallery = [
    require('../assets/mnight/006.jpeg'),
    require('../assets/mnight/007.jpeg'),
    require('../assets/mnight/001.jpg'),
    require('../assets/mnight/002.JPG'),
    require('../assets/mnight/003.JPG'),
    require('../assets/mnight/004.jpeg'),
    require('../assets/mnight/005.jpeg'),
]

const workshopGallery = [
    require('../assets/workshop/001.png'),
    require('../assets/workshop/002.jpg'),
    require('../assets/workshop/003.png'),
    require('../assets/workshop/004.png'),
    require('../assets/workshop/005.png'),
    require('../assets/workshop/006.png'),
    require('../assets/workshop/007.png'),
    require('../assets/workshop/008.JPG'),
    require('../assets/workshop/009.PNG'),
    require('../assets/workshop/010.JPG'),
    require('../assets/workshop/011.jpeg'),
]

const fundraisersList = [
  {
    key: 'bubbletea',
    label: 'Bubble Tea',
    title: 'Biju Bubble Tea Sale',
    description: `Biju Bubble Tea generously sponsored free drinks for our event, held outside the Senior Common Room at the South Kensington campus. Many attendees scanned the QR code to sign up for our newsletter, engaging with our community in a refreshing way.`,
    image: biju_cover,
    gallery: bijuGallery
  },
  {
    key: 'bake',
    label: 'Bake Sale',
    title: 'Chinese New Year Bake Sale',
    description: `Volunteers gathered in our committee member's hall kitchen to bake batches of pineapple tarts, almond cookies, and cornflake cookies for our Lunar New Year Sale. Students pre-ordered these beloved treats and collected them on campus, with many sharing how much they enjoyed the homemade goodies.`,
    image: cny_cover,
    gallery: cnyGallery
  },
  {
    key: 'mnight',
    label: 'MNight',
    title: 'MNight Fundraising Event',
    description: `During the Imperial College Union Malaysian Society's flagship event, RED hosted a vibrant booth outside the Great Hall. We offered flowers for purchase to support performers and indulged attendees with treats like Krispy Kreme donuts, Lola cupcakes, Oddonos ice cream, and caramel popcorn. Students, including those from outside Imperial, discovered RED and expressed interest in joining and supporting our initiatives.`,
    image: mnight_cover,
    gallery: mnightGallery
  },
  {
    key: 'modelworkshop',
    label: 'Model Workshop',
    title: '3D Kindergarten Scale Modelling Workshop',
    description: `A fresh initiative was introduced to inspire our members — a 3D kindergarten scale modelling workshop. Led by our former committee members Alan, Alissya, and Anna, participants assembled pieces of a miniature model showcasing the structural design of the kindergarten. It was a collaborative and engaging experience that encouraged teamwork and creativity among our members.`,
    image: workshop_cover,
    gallery: workshopGallery
  }
];


export default fundraisersList;