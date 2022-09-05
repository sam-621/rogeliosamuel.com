import { FilledLink } from '@atoms/buttons/FilledLink'
import { ICard } from '@interfaces/card.interface'

export const blogs: ICard[] = [
  {
    title: '¿Cómo crear una página web con ISR?',
    description:
      'En una de las campañas de EDteam tuvimos problemas con el rendimiento de nuestra web e identificamos 2 problemas, de rendimiento y deuda técnica',
    imageUrl: 'blogs/fenix.jpeg',
    buttons: [
      <FilledLink key={0} variant="secondary" text="Read" className="text-xs border border-cards" />
    ]
  },
  {
    title: '¿Cómo crear una página web con ISR? y por qué lo usamos en EDteam',
    description:
      'En una de las campañas de EDteam tuvimos problemas con el rendimiento de nuestra web e identificamos 2 problemas. La página en ocasiones hacía peticiones innecesarias y había mucha duda técnica. ¿Cómo lo resolvimos? Te lo cuento en este post.',
    imageUrl: 'blogs/fenix.jpeg',
    buttons: [
      <FilledLink key={0} variant="secondary" text="Read" className="text-xs border border-cards" />
    ]
  },
  {
    title: '¿Cómo crear una página web con ISR? y por qué lo usamos en EDteam',
    description:
      'En una de las campañas de EDteam tuvimos problemas con el rendimiento de nuestra web e identificamos 2 problemas. La página en ocasiones hacía peticiones innecesarias y había mucha duda técnica. ¿Cómo lo resolvimos? Te lo cuento en este post.',
    imageUrl: 'blogs/fenix.jpeg',
    buttons: [
      <FilledLink key={0} variant="secondary" text="Read" className="text-xs border border-cards" />
    ]
  }
]

// https://ed.team/blog/como-crear-una-pagina-web-con-isr-y-por-que-lo-usamos-en-edteam
