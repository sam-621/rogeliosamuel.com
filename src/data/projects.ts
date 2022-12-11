import { Project } from '@interfaces'

export const projects: Project[] = [
  {
    id: 0,
    title: 'EDteam public website with ISR',
    description:
      'A website for the edteam education platform with ISR and Typescript, this website was 80% faster than the old one, with a better code structure and modern solutions for the information management.',
    backgroundColor: '#0D273B',
    picture: 'edteam.png',
    company: 'edteam.svg',
    isPrivate: true,
    link: {
      live: 'https://ed.team'
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
    isPrivate: true,
    link: {
      live: 'https://faktible.com'
    }
  },
  {
    id: 2,
    title: 'Task-ui',
    description:
      'A fullstack web application for the task management where you can create, read, update and delete your tasks, developed with typescript, express, mongodb and React with vite, for the information management i used React Query',
    backgroundColor: '#dad3fb',
    picture: 'task-ui.png',
    company: 'github.svg',
    isPrivate: false,
    link: {
      live: 'https://task-ui-prod.vercel.app/',
      repo: 'https://github.com/sam-621/task-ui'
    }
  }
]
