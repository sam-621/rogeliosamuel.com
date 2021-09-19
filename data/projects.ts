import { TProject } from '../interfaces/project.interface'

const projects: TProject[] = [
  {
    id: 0,
    name: 'E-commerce',
    shortDescription:
      'An E-commerce where you can do the main actions that you´d do in an E-commerce. ',
    image: '/images/ecommerce.png',
    demo: 'https://ecommerce-rs.vercel.app/',
    repo: 'https://github.com/rogeliosamuel621/e-commerce',
  },
  {
    id: 1,
    name: 'AuthApp',
    shortDescription:
      'A web application where you can authenticate and make CRUD actions, upload photos, and change the password.',
    image: '/images/authapp.png',
    demo: 'https://authapp-rs.netlify.app/',
    repo: 'https://github.com/rogeliosamuel621/AuthApp',
  },
]

export default projects
