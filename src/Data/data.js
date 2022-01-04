/**src/Data/data.js**/
const TITLE_SITE = "Les Petits Pom'KA ";

const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Accueil" },
  { id: 2, url: "about", label: "Notre élevage" },
  { id: 3, url: "chiot", label: "Nos chiots" },
  { id: 4, url: "contact", label: "Contact" },
];
const BANNER_DATA = {
  HEADING: "Elevage de spitz mini alemand",
  DECRIPTION: "Nous élevons plein de spitz qui cours partous.",
  TUTORIAL_URL: "lien facebook",
  WATCH_TUTORIAL: "Suivez nous sur facebook si vous vous ennuyer",
};
const CHIOTS = [
  {
    id: 2,
    name: "Samouraï",
    image_url_1: "images/chiots/Samourai/Samourai 1.jpg",
    image_url_2: "images/chiots/Samourai/Samourai 2.jpg",
    image_url_3: "images/chiots/Samourai/Samourai 2.jpg",
    description: "petit chien roux",
    alt: "...",
  },
  {
    id: 1,
    name: "Gey!",
    image_url_1: "images/chiots/Slam/Slam 1.jpg",
    image_url_2: "images/chiots/Slam/Slam 2.jpg",
    image_url_3: "images/chiots/Slam/Slam 2.jpg",
    description: "petit chien roux",
    alt: "...",
  },
  {
    id: 3,
    name: "Foulecamp",
    image_url_1: "images/chiots/Swing/Swing 1.jpg",
    image_url_2: "images/chiots/Swing/Swing 2.jpg",
    image_url_3: "images/chiots/Swing/Swing 2.jpg",
    description: "petit chien roux",
    alt: "...",
  },
];

const CARD_LINE_DATA = {
  CARD_1_TITRE: "Titre du média",
  CARD_2_TITRE: "Titre du média",
  CARD_1_TEXT:
    "Some quick example text to build on the card title and make up the bulk of the card's content.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",
  CARD_2:
    "Some quick example text to build on the card title and make up the bulk of the card's content.",
};

const ABOUT_DATA = {
  HEADING: "Why choose us?",
  TITLE: "Why we're different",
  IMAGE_URL: "images/network.png",
  WHY_CHOOSE_US_LIST: [
    "We provides Cost-Effective Digital Marketing than Others.",
    "High customer statisfaction and experience.",
    "Marketing efficiency and quick time to value.",
    "Clear & transparent fee structure.",
    "We provides Marketing automation which is an integral platform that ties all of your digital marketing together.",
    "A strong desire to establish long lasting business partnerships.",
    "Provide digital marketing to mobile consumer.",
    "We provides wide range to services in reasonable prices",
  ],
};
const TESTIMONIAL_DATA = {
  HEADING: "What clients say?",
  TESTIMONIAL_LIST: [
    {
      DESCRIPTION:
        "Nixalar has made a huge difference to our business with his good work and knowledge of SEO and business to business marketing techniques. Our search engine rankings are better than ever and we are getting more people contacting us thanks to Jomer’s knowledge and hard work.",
      IMAGE_URL: "images/user1.jpg",
      NAME: "Julia hawkins",
      DESIGNATION: "Co-founder at ABC",
    },
    {
      DESCRIPTION:
        "Nixalar and his team have provided us with a comprehensive, fast and well planned digital marketing strategy that has yielded great results in terms of content, SEO, Social Media. His team are a pleasure to work with, as well as being fast to respond and adapt to the needs of your brand.",
      IMAGE_URL: "images/user2.jpg",
      NAME: "John Smith",
      DESIGNATION: "Co-founder at xyz",
    },
  ],
};

const SOCIAL_DATA = {
  HEADING: "Find us on social media",
  IMAGES_LIST: [
    "images/facebook-icon.png",
    "images/instagram-icon.png",
    "images/whatsapp-icon.png",
    "images/twitter-icon.png",
    "images/linkedin-icon.png",
    "images/snapchat-icon.png",
  ],
};

const FOOTER_DATA = {
  DESCRIPTION:
    "We are typically focused on result-based maketing in the digital world. Also, we evaluate your brand’s needs and develop a powerful strategy that maximizes profits.",
  CONTACT_DETAILS: {
    HEADING: "Contact us",
    ADDRESS: "La trobe street docklands, Melbourne",
    MOBILE: "+1 61234567890",
    EMAIL: "nixalar@gmail.com",
  },
  SUBSCRIBE_NEWSLETTER: "Subscribe newsletter",
  SUBSCRIBE: "Subscribe",
};

const MOCK_DATA = {
  TITLE_SITE,
  NAVBAR_DATA,
  BANNER_DATA,
  CHIOTS,
  ABOUT_DATA,
  TESTIMONIAL_DATA,
  SOCIAL_DATA,
  FOOTER_DATA,
  CARD_LINE_DATA,
};
export default MOCK_DATA;
