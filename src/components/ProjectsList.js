import project2022Image from '../assets/projects/project_2022.jpeg';
import project2019Image from '../assets/projects/project_2019.png';
import project2018Image from '../assets/projects/project_2018.png';
import project2017Image from '../assets/projects/project_2017.png';
import project2016Image from '../assets/projects/project_2016.png';
import project2015Image from '../assets/projects/project_2015.png';

const gallery2022 = [
  require('../assets/gallery2022/001.jpeg'),
  require('../assets/gallery2022/002.jpeg'),
  require('../assets/gallery2022/003.JPG'),
  require('../assets/gallery2022/004.JPG'),
  require('../assets/gallery2022/005.jpeg'),
  require('../assets/gallery2022/006.JPG'),
  require('../assets/gallery2022/007.jpeg'),
  require('../assets/gallery2022/008.jpeg'),
  require('../assets/gallery2022/009.jpeg'),
  require('../assets/gallery2022/010.jpeg'),
  require('../assets/gallery2022/011.jpeg'),
  require('../assets/gallery2022/012.JPG'),
  require('../assets/gallery2022/013.JPG')
];

const projectsList = [
  {
    id: 1,
    name: "Kampung Bingolon, Kudat",
    year: 2022,
    latitude: 6.8269292779527975,
    longitude: 116.68417570159167,
    image: project2022Image,
    description: "The COVID-19 pandemic paused RED’s annual operations for two years. In 2022, as restrictions eased and our project was approved, we were excited to finally return to the field. Despite a leaner team with fewer experienced volunteers, we successfully carried out a rewarding expedition — thanks to countless discussions, creative problem-solving, and the team’s unwavering dedication.",
    reportLink: "https://drive.google.com/file/d/1V27RwjMI7j7GvgLo04eWF6Wl0ACRtoHe/view?usp=sharing",
    youtubeLink: "https://www.youtube.com/embed/KpyeHYGpz1w?autoplay=1mute=1",
    gallery: gallery2022
  },
  {
    id: 2,
    name: "Kampung Taburan Tengah, Kota Belud",
    year: 2019,
    latitude: 6.612527533890887,
    longitude: 116.58627771919912,
    image: project2019Image,
    description: "Drawing from the past three experiences, the 2019 team developed strategies to improve and optimise building design and construction efficiency.",
    reportLink: "https://drive.google.com/file/d/1knu_uLdd7c2jrgk3aAjsvYN4xfuFB20u/view?usp=sharing",
    youtubeLink: "https://www.youtube.com/embed/suBQiROM2JU",
    gallery: []
  },
  {
    id: 3,
    name: "Kampung Kuala Punteh, Keningau",
    year: 2018,
    latitude: 5.239533847545068,
    longitude: 116.14600636149383,
    image: project2018Image,
    description: "The 2018 RED team continued to touch the lives of the rural community at Kampung Kuala Punteh by constructing an education centre, replicating the original design.",
    reportLink: "https://drive.google.com/file/d/1p5TiVIcRLK49fwH9fPP2ghU64t-RPQIp/view?usp=sharing",
    youtubeLink: "https://www.youtube.com/embed/-QX64g7fW1Q",
    gallery: []
  },
  {
    id: 4,
    name: "Kampung Palipikan, Kota Marudu",
    year: 2017,
    latitude: 6.378199159444044,
    longitude: 116.77795510503549,
    image: project2017Image,
    description: "Following the success of the pilot project, the 2017 team of nineteen volunteers replicated the design of the first building in Kampung Palipikan, completing construction in five weeks. An off-grid solar system was also incorporated for electricity supply.",
    reportLink: "https://drive.google.com/file/d/1GQjkCTR2CAD4JX_x7D2EdfQoCKuOzONI/view?usp=sharing",
    youtubeLink: "https://www.youtube.com/embed/Stac1f9JSY4",
    gallery: []
  },
  {
    id: 5,
    name: "Kampung Gaur, Ranau",
    year: 2016,
    latitude: 5.870029537730061,
    longitude: 116.66806865151605,
    image: project2016Image,
    description: "Building on the feasibility studies, RED launched its pilot project in Kampung Gaur with fourteen volunteers from Imperial College London. A single storey 6m x 9m education centre was constructed in 6 weeks, equipped with a rainwater harvesting tank.",
    reportLink: null,
    youtubeLink: null,
    gallery: []
  },
  {
    id: 6,
    name: "Kampung Indrasan, Kudat",
    year: 2015,
    latitude: 6.763818234884976,
    longitude: 116.64048565898867,
    image: project2015Image,
    description: "RED founders, Edrea, Chloe, and Jack, conducted a three-week feasibility study at Kampung Indrasan. Through helping a local community build an education centre, they assessed the region’s climate, geological conditions, and availability of locally and sustainably sourced construction material. A needs assessment was carried out to address educational demands from the rural communities in Borneo.",
    reportLink: null,
    youtubeLink: null,
    gallery: []
  }
]

export default projectsList;