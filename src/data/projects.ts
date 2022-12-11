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
    link: {
      live: 'https://ed.team'
    }
  },
  {
    id: 0,
    title: 'Faktible landing page',
    description:
      'A website to quote machines connected to satws for user data verification, authentication for user permisions, complex forms and emails supoort for password recovery and quote status.',
    backgroundColor: '#04212B',
    picture: 'faktible.png',
    company: 'faktible.svg',
    link: {
      live: 'https://faktible.com'
    }
  }
]
