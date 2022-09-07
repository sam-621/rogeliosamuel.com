import { FilledLink } from '@atoms/buttons/FilledLink'
import { ICard } from '@interfaces/card.interface'

export const blogs: ICard[] = [
  {
    title: '¿Cómo crear una página web con ISR?',
    description:
      'En una de las campañas de EDteam tuvimos problemas con el rendimiento de nuestra web e identificamos 2 problemas, de rendimiento y deuda técnica',
    imageUrl: 'blogs/fenix.jpeg',
    buttons: [
      <FilledLink
        key={0}
        url="https://ed.team/blog/como-crear-una-pagina-web-con-isr-y-por-que-lo-usamos-en-edteam"
        variant="secondary"
        text="Read"
        className="text-xs lg:text-base"
      />
    ]
  },
  {
    title: '5 git commands you should know',
    description: `Here I'm going to list some git commands you should know, explain what they do, and use cases`,
    imageUrl: 'blogs/git.jpeg',
    buttons: [
      <FilledLink
        key={0}
        url="https://dev.to/rogeliosamuel621/5-git-commands-you-should-know-1o2g"
        variant="secondary"
        text="Read"
        className="text-xs lg:text-base bg-black"
      />
    ]
  }
]

// https://ed.team/blog/como-crear-una-pagina-web-con-isr-y-por-que-lo-usamos-en-edteam
