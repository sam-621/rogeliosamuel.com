export const ProjectsData = [
  {
    ID: 0,
    title: 'AuthApp',
    Description:
      'A web application where you can authenticate and make CRUD actions, upload photos and change password',
    technologies: [
      { icon: 0, title: 'Node.js' },
      { icon: 4, title: 'Javascript' },
      { icon: 3, title: 'Reactjs' },
      { icon: 5, title: 'webpack' },
    ],
    Repo: 'https://github.com/rogeliosamuel621/AuthApp',
    demo: 'https://authapp-rs.netlify.app/',
    features: [
      'Authentication with jwt',
      'hash passwords with bcryptjs',
      'validate data schema with express validator',
      'API key',
      'Handle errors middlewares',
    ],
    image:
      'https://res.cloudinary.com/dnvp4s8pe/image/upload/v1602435851/lmteflez5m3hjacpvxvd.png',
  },
  {
    ID: 1,
    title: 'Image uploader',
    Description:
      'An application where you can storage your images in the cloud',
    technologies: [
      { icon: 0, title: 'Node.js' },
      { icon: 1, title: 'Typescript' },
      { icon: 3, title: 'Reactjs' },
      { icon: 5, title: 'webpack' },
    ],
    Repo: 'https://github.com/rogeliosamuel621/Image-Uploader',
    demo: 'https://image-uploader-rs21.netlify.app/',
    features: ['File manage with multer', 'Cloud storage in Cloudinary'],
    image:
      'https://res.cloudinary.com/dnvp4s8pe/image/upload/v1602435882/ykunke9ks6cma2pteuo2.png',
  },
];
