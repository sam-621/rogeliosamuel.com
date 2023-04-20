import { WorksFilers } from '@hooks'
import { Project } from '@interfaces'

export const projects: Project[] = [
  {
    id: 0,
    title: 'Emontes E-commerce',
    description:
      'Emontes is an E-commerce that seeks to improve online sales. Developed in Next.js and Typescript, implementing all good SEO and optimization practices and connected to an administrator to handle the content.',
    backgroundColor: '#04212B',
    picture: 'emontes.png',
    company: 'emontes.svg',
    filter: WorksFilers.PRIVATES_PROJECTS,
    link: {
      live: 'https://emontes-ui.vercel.app/'
    }
  },
  {
    id: 1,
    title: 'Faktible landing page',
    description:
      'A website to quote machines connected to satws for user data verification, authentication for user permissions, complex forms and emails support for password recovery and quote status.',
    backgroundColor: '#04212B',
    picture: 'faktible.png',
    company: 'faktible.svg',
    filter: WorksFilers.PRIVATES_PROJECTS,
    link: {
      live: 'https://faktible.com'
    }
  },
  {
    id: 2,
    title: 'EDteam public website with ISR',
    description:
      'A website for the edteam education platform with ISR and Typescript, this website was 80% faster than the old one, with a better code structure and modern solutions for the information management.',
    backgroundColor: '#0D273B',
    picture: 'edteam.png',
    company: 'edteam.svg',
    filter: WorksFilers.PRIVATES_PROJECTS,
    link: {
      live: 'https://ed.team'
    }
  },
  {
    id: 3,
    title: 'Task-ui',
    description:
      'A fullstack web application for the task management where you can create, read, update and delete your tasks, developed with typescript, express, mongodb and React with vite, for the information management i used React Query.',
    backgroundColor: '#1f2530',
    picture: 'task-ui.png',
    company: 'github.svg',
    filter: WorksFilers.PUBLIC_PROJECTS,
    link: {
      live: 'https://task-ui-prod.vercel.app/',
      repo: 'https://github.com/sam-621/task-ui'
    }
  },
  {
    id: 4,
    title: 'Tic-Tac-Toe Multiplayer',
    description:
      'A Simple tic-tac-toe online game developed with sockets, React, Node.js and Typescript',
    backgroundColor: '#1f2530',
    picture: 'tic-tac-toe.png',
    company: 'github.svg',
    filter: WorksFilers.PUBLIC_PROJECTS,
    link: {
      live: 'https://tictactoe-multi.vercel.app/',
      repo: 'https://github.com/sam-621/tic-tac-toe-multiplayer'
    }
  },
  {
    id: 5,
    title: '¿Cómo crear una página web con ISR? y por qué lo usamos en EDteam',
    description:
      'En una de las campañas de EDteam tuvimos problemas con el rendimiento de nuestra web e identificamos 2 problemas. La página en ocasiones hacía peticiones innecesarias y había mucha duda técnica. ¿Cómo lo resolvimos? Te lo cuento en este post.',
    backgroundColor: '#5899fa',
    picture: 'blogs/fenix.png',
    company: 'edteam.svg',
    filter: WorksFilers.BLOGS,
    link: {
      live: 'https://ed.team/blog/como-crear-una-pagina-web-con-isr-y-por-que-lo-usamos-en-edteam'
    }
  }
]
