import {
  SiGithub,
  SiLinkedin,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiStyledcomponents,
  SiSass,
  SiNodedotjs,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiAdobecreativecloud,
  SiFigma,
} from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

const Colors = {
  White: "#ecf9fd",
  Black: "#050610",
  SkyBlue: "#15ade4",
  Blue: "#2B388F",
  Silver: "#78797A",
  LightGray: "#C7C8CA",
  LighterNav: "#12142b",

  //Scrollbar
  DarkerAlice: "#CED3DB",
  LighterDarkBlue: "#051A3B",

  //Webkit States
  LightScrollBarHover: "#17B2D1",
  LightScrollBarActive: "#006A81",
  DarkScrollBarHover: "#008DC0",
  DarkScrollBarActive: "#00537B",

  //Navigation Bar
  Indigo: "#0A0C1F",

  //Logo
  LogoLight: "#17abe2",
  LogoDark: "#293e91",

  //CardHover
  LightSky: "#9dd0e3",
};

export const SITE_THEME = {
  light: {
    background: Colors.White,
    text: Colors.Black,
    strong: Colors.Blue,
    gray: Colors.LightGray,
    oppositeGray: Colors.Silver,
    weak: Colors.SkyBlue,

    scrollbar: Colors.DarkerAlice,
    hoverscroll: Colors.LightScrollBarHover,
    activescroll: Colors.LightScrollBarActive,
  },

  dark: {
    background: Colors.Black,
    text: Colors.White,
    strong: Colors.SkyBlue,
    gray: Colors.Silver,
    oppositeGray: Colors.LightGray,
    weak: Colors.SkyBlue,

    scrollbar: Colors.SkyBlue,
    hoverscroll: Colors.DarkScrollBarHover,
    activescroll: Colors.DarkScrollBarActive,

    navbar: Colors.Indigo,
    drawerhover: Colors.LighterNav,

    logolight: Colors.LogoLight,
    logodark: Colors.LogoDark,

    cardhover: Colors.LightSky,
  },
};

export const DEVICES = {
  mobile: "600px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1200px",
};

export const LINKS = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "About",
    url: "/about",
  },
];

export const PROJECTLIST = [
  {
    name: "Steady",
    url: "steady",
    hasLogo: true,
    logo: "/steady_logo.svg",
    live_site: "https://steadyofficial.vercel.app/",
    github_client: "https://github.com/wilyyy/Steady",
    tags: ["React", "Next.js", "styled-components"],
    description: [
      "Web-based self-therapy application",
      "Answer questions based on eating, sleeping, and exercise habits.",
      "Receive results with tips to balance your lifestyle.",
      "Researched, designed, prototyped, tested, and developed by first year D3 students.",
    ],
    color_light: "#FFF4DD",
    color_dark: "#2C2C80",
    color_strong: "#F57C33",
    color_hover: "#DB6318",
    button_names: ["Learn More", "Live Site", "Client Github", "Server Github"],
    title_font: "Ranchers",
    quote: "Get back on track to a happy life.",
  },
  {
    name: "OnMe",
    url: "onme",
    hasLogo: true,
    logo: "/onme_logo.svg",
    github_client: "https://github.com/dnguyen130/onme",
    github_server: "https://github.com/dnguyen130/OnMe-Serverside",
    tags: ["React Native", "Expo", "styled-components", "PHP", "MySQL"],
    description: [
      "Cross-platform mobile application designed to combat loneliness in Vancouver.",
      "Send a drink with a custom message and spark a conversation!",
      "Designed and developed in 12 weeks by student designers and developers.",
      "Proof of concept presented to over 100 people, including students, faculty, and industry professionals.",
    ],
    color_light: "#FFFFFF",
    color_dark: "#2F2D2D",
    color_strong: "#FE4370",
    color_hover: "#F22756",
    button_names: ["Learn More", "Live Site", "Client Github", "Server Github"],
    title_font: "Poppins",
    quote: "Create a connection with a little liquid courage.",
  },
  {
    name: "Scout",
    url: "scout",
    hasLogo: false,
    logo: "/scout_logo.svg",
    live_site: "https://scout-delta.vercel.app/",
    github_client: "https://github.com/wilyyy/Scout",
    github_server: "https://github.com/wilyyy/scout-serverside",
    tags: ["React", "Next.js", "styled-components", "MongoDB"],
    description: [
      "Web-based application to search and filter through an anime database.",
      "Create an account, add anime to your favourites, and share them with others.",
      "Application built from the ground up, including custom API and MongoDB database.",
    ],
    color_light: "#FFFFFF",
    color_dark: "#1C2A36",
    color_strong: "#F4A259",
    color_hover: "#DB8539",
    color_button: "black",
    title_font: "Poppins",
    quote: "Share and discover new anime",
  },
  {
    name: "Step Ahead",
    url: "stepahead",
    hasLogo: true,
    logo: "/stepahead_logo.svg",
    live_site: "https://stepahead.vercel.app/",
    github_client: "https://github.com/dnguyen130/stepahead",
    tags: ["React", "Vite", "Sass", "Firebase"],
    description: [
      "Web-based application to write and record tasks and journal entries",
      "Create an account to save important events or write about your everyday life.",
      "Secure database and authentication with Firebase.",
    ],
    color_light: "#fef4d4",
    color_dark: "#1a3d65",
    color_strong: "#ffbf1a",
    color_hover: "#dea916",
    color_button: "black",
    title_font: "Caveat",
    quote: "Let's get ahead.",
  },
  {
    name: "Best Buy Clone",
    url: "bestbuyclone",
    hasLogo: true,
    logo: "/bestbuylogo.png",
    live_site: "https://best-buy-clone-2d1056.netlify.app/",
    github_client: "https://github.com/dnguyen130/bestbuy-clone",
    tags: ["React", "Vite", "TypeScript", "Firebase"],
    description: [
      "Mock-up of Best Buy's home page",
      "Fully responsive with working carousels and dropdown menus",
      "Created to refine and improve on creating interactive and responsive UIs",
    ],
    color_light: "white",
    color_dark: "#0046be",
    color_strong: "#ffef00",
    color_hover: "#c9bd00",
    color_button: "black",
    title_font: "Jost",
    quote: "Let's talk about what's possible",
  },
];

export const SOCIALS = [
  {
    name: "Github",
    url: "https://github.com/dnguyen130",
    logo: SiGithub,
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/dannytnguyendev/",
    logo: SiLinkedin,
  },
  {
    name: "Email",
    url: "mailto:dannytnguyen.dev@gmail.com",
    logo: HiOutlineMail,
  },
];

export const ToolkitIcons = {
  Foundation: [
    [
      {
        logo: SiHtml5,
        color: "#f25320",
        title: "HTML",
      },
      {
        logo: SiCss3,
        color: "#2299f8",
        title: "CSS",
      },
      {
        logo: SiJavascript,
        color: "#f0db4f",
        title: "JavaScript",
      },
    ],
    {
      description:
        "A solid foundation is required to write stable, working code.",
      description2:
        "After becoming comfortable with creating websites with these tools alone, utilizing frameworks, such as React, becomes much a much easier and streamlined process.",
    },
  ],
  Frontend: [
    [
      {
        logo: SiReact,
        color: "#5ccfee",
        title: "React",
      },
      {
        src: "/logos/styled.svg",
        title: "Styled-Components",
      },
      {
        logo: SiSass,
        color: "#c36192",
        title: "Sass",
      },
      {
        logo: SiNodedotjs,
        color: "#4f9640",
        title: "Node.js",
      },
      {
        logo: SiNextdotjs,
        color: "#000",
        title: "Next.js",
      },
    ],
    {
      description:
        "Experience with front-end frameworks is a must in this modern day of web development.",
      description2:
        "With the majority of my experience in React, I am able to quickly adapt to most workplaces, with the ability to quickly learn other technology stacks as needed.",
    },
  ],
  Backend: [
    [
      {
        logo: SiExpress,
        color: "#46545e",
        title: "Express.js",
      },
      {
        src: "/logos/mongodb.svg",
        title: "MongoDB",
      },
      {
        src: "/logos/firebase.svg",
        title: "Firebase",
      },
    ],
    {
      description:
        "Working on backend databases has also been important, even as a front-end focused developer.",
      description2:
        "With some experience in MongoDB and SQL, I am knowledgeable enough to work with APIs and understand how data is transferred to the front-end.",
    },
  ],
  Design: [
    [
      {
        src: "/logos/acc.svg",
        title: "Adobe Creative Cloud",
      },
      {
        src: "/logos/figma.svg",
        title: "Figma",
      },
    ],
    {
      description:
        "Along with my experience with web development, I have learned UI/UX and design tools to supplement my education.",
      description2:
        "Figma is the design/prototyping software of choice. Photoshop, Illustrator, Premiere Pro, and After Effects are other tools I have experience with as well.",
    },
  ],
};

export const PROJECTINFO = {
  steady: [
    {
      title: "1. Ideation",
      src: "/screenshots/Steady_Welcome_Crop.png",
      aspect: "595/927",
      orientation: "portrait",
      description: `Tasked with the problem to help solve a social issue we've experienced, 
      we decided to create a an application to help tackle depression.
      Similar to cognitive behavioural therapy, 
      we wanted to give the user the ability to self-diagnose problems in their life and 
      give them solutions that they can implement in their everyday life.`,
    },
    {
      title: "2. Technology",
      src: "/screenshots/Steady_Menu_Crop.png",
      aspect: "595/927",
      orientation: "portrait",
      description: `This application was developed with Next.js, using Styled-Components as our styling engine
      and local storage as our means of storing persistent for use across several pages. As our first major project,
      we used our limited toolset to its maximum capabilities and created an application with the ability to give the user
      solutions to some of their problems in their life.`,
    },
    {
      title: "3. Retrospective",
      src: "/screenshots/Steady_Results_Crop.png",
      aspect: "595/927",
      orientation: "portrait",
      description: `In the end, we created an application that met our expectations with many improvements
      that were possible by learning more about storing data and better practices. However, we learned plenty
      the foundation of web development that I would be able to apply to future projects.`,
    },
  ],
  onme: [
    {
      title: "1. Ideation",
      src: "/screenshots/OnMe_Dashboard.png",
      aspect: "864/1886",
      orientation: "portrait",
      description: `OnMe is a mobile application pitched as a solution for social disconnection in Vancouver. With
      Vancouver being ranked as a lonely city, our team wanted to create a way for strangers to start interactions with face
      to face communication. Through the app, order someone you see a drink with a custom message and see how they respond!`,
    },
    {
      title: "2. Technology",
      src: "/screenshots/OnMe_RestaurantSelection.png",
      aspect: "864/1886",
      orientation: "portrait",
      description: `Created with React-Native and Expo, OnMe is a mobile application capable of running on both
      iOS and Android devices. It uses an SQL database with a custom API created with PHP. It also uses Firebase
      to store users created either with their email or Google authentication.`,
    },
    {
      title: "3. Retrospective",
      src: "/screenshots/OnMe_OrderSummary.png",
      aspect: "864/1886",
      orientation: "portrait",
      description: `This project was a lesson in not only mobile application development, but time management and 
      team cooperation. Working with designers to ensure assets were created on time to integrate with application,
      as well as adjusting to any unforeseen circumstances were all soft skills we learned during this semester long project.`,
    },
  ],
  scout: [
    {
      title: "1. Ideation",
      src: "/screenshots/scout_explore.png",
      aspect: "1920/997",
      orientation: "landscape",
      description: `Furthering our experience in development, we were tasked with creating an application
      that would use a database hosted on MongoDB and a custom API created with Express.js. We decided to 
      use a database of Japanese anime titles with categories such as title, release year, and ratings.`,
    },
    {
      title: "2. Technology",
      src: "/screenshots/scout_filter.png",
      aspect: "1920/997",
      orientation: "landscape",
      description: `Using Next.js and its integrated API functionality, we created an application with the
      ability to create a user, search through, and favourite anime. We used an API and a custom back-end
      to communicate commands and do certain things based on the response.`,
    },
    {
      title: "3. Retrospective",
      src: "/screenshots/scout_light.png",
      aspect: "1920/997",
      orientation: "landscape",
      description: `This project was more practice on state management and back-end functionality. Being
      a front-end developer still requires an understanding of managing data and this was a great project
      to practice previous concepts while learning other important parts of web development.`,
    },
  ],
  stepahead: [
    {
      title: "1. Ideation",
      src: "/screenshots/stepahead1.png",
      aspect: "1920/1000",
      orientation: "landscape",
      description: `As my first solo project, I wanted to create an application with a simple idea that
      let me apply concepts important to web development. I decided to create a single-page application
      with responsiveness and smooth transitions in mind. It also involves managing states and applying CRUD functions
      with Firebase as a backend.`,
    },
    {
      title: "2. Technology",
      src: "/screenshots/stepahead2.png",
      aspect: "1920/1000",
      orientation: "landscape",
      description: `I also wanted to try different technologies in this wide space of front-end development.
      Using Vite as a framework as an alternative to Next, as well as using Sass instead of styled-components,
      were conscious choices I made to ensure that I would always be learning, even when creating an application
      using existing concepts I had learned in the past.`,
    },
    {
      title: "3. Retrospective",
      src: "/screenshots/stepahead3.png",
      aspect: "1920/1000",
      orientation: "landscape",
      description: `This project was great in keeping myself fresh in web development while out of school.
      The frontend was satisfactory to me with its transitions between tabs and responsiveness from mobile
      to desktop.`,
    },
  ],
  bestbuyclone: [
    {
      title: "1. Ideation",
      src: "/screenshots/bestbuy1.png",
      aspect: "1920/900",
      orientation: "landscape",
      description: `In order to continue to refine and improve my abilities in developing UIs, I chose to recreate 
      a familiar UI using technologies I was familiar with. Best Buy uses important UI elements, such as carousels and interactive
      drop down menus to learn how to create, using frameworks or my own techniques.`,
    },
    {
      title: "2. Technology",
      src: "/screenshots/bestbuy2.png",
      aspect: "1920/900",
      orientation: "landscape",
      description: `Swiper was a great resource to learn, allowing me to quickly create product sliders that matched Best Buy's sliders. The
      rest of the website was created with ample use of CSS grid to line up elements at any size. Framer is a great framework to control animations,
      such as the drop down menu, and mobile footer links.`,
    },
    {
      title: "3. Retrospective",
      src: "/screenshots/bestbuy3.png",
      aspect: "550/900",
      orientation: "portrait",
      description: `Having reference material when recreating a website made this project easy and fun, while also continuing to hone my
      web development skills on the path of becomeing a better developer.`,
    },
  ],
};
