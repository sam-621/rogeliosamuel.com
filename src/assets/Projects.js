export const ProjectsData = [
  {
    ID: 0,
    title: "AuthApp",
    littleDescription: "A web application where you can authenticate and make CRUD actions, upload photos and change password",
    description:
      "I crated this project because i had never worked  before with mongoDB and upgraded to production with an application like this, this shows my backend skills and my frontend skills",
    technologies: [
      { icon: 0, title: "Node.js" },
      { icon: 4, title: "Javascript" },
      { icon: 3, title: "Reactjs" },
      { icon: 5, title: "webpack" },
    ],
    Repo: "https://github.com/rogeliosamuel621/AuthApp",
    demo: "https://authapp-rs.netlify.app/",
    features: [
      "Authentication with jwt",
      "hash passwords with bcryptjs",
      "validate data schema with express validator",
      "API key",
      "Handle errors middlewares"
    ],
  },
  {
    ID: 1,
    title: "Image uploader",
    littleDescription:
      "An application where you can storage your images in the cloud",
    description:
      "I built this project because of gndx comunity, there are some challenge and this is one of them. So I chose this one because never before I had worked with images in node.js and deployed an API in Heroku.",
    technologies: [
      { icon: 0, title: "Node.js" },
      { icon: 1, title: "Typescript" },
      { icon: 3, title: "Reactjs" },
      { icon: 5, title: "webpack" },
    ],
    Repo: "https://github.com/rogeliosamuel621/Image-Uploader",
    demo: "https://image-uploader-rs21.netlify.app/",
    features: ["File manage with multer", "Cloud storage in Cloudinary"],
  },
  {
    ID: 2,
    title: "Jobs-Listing",
    littleDescription:
      "Project created in order to practice Reactjs. Challenge from frontendmentor",
    description:
      "Project created in order to practice Reactjs. Challenge from frontendmentor. ",
    technologies: [
      { icon: 3, title: "React.js" },
      { icon: 4, title: "Javascript" },
      { icon: 5, title: "Weboack" },
    ],
    Repo: "https://github.com/rogeliosamuel621/Jobs-Listing",
    demo: "https://rogeliosamuel621.github.io/Jobs-Listing/",
    features: ["Algorithm to search jobs"],
  },
];
