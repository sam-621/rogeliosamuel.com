import { TProject } from '../interfaces/project.interface'

const projects: TProject[] = [
  {
    id: 0,
    name: 'Chat Group',
    shortDescription:
      'A web application where you can send messages in a public chat in real time, login, register and see your profile',
    image: '/images/chat-group.png',
    demo: 'https://chat-group-rs.vercel.app/',
    repo: 'https://github.com/rogeliosamuel621/Chat-Group',
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
