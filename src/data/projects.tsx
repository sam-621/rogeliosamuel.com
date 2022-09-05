import { FilledLink } from '@atoms/buttons/FilledLink'
import { OutlinedLink } from '@atoms/buttons/OutlinedLink'
import { ICard } from '@interfaces/card.interface'

export const projects: ICard[] = [
  {
    title: 'Payment App',
    description: 'Web application where you can pay with PayPal',
    imageUrl: 'projects/chat-group-ss.png',
    buttons: [
      <FilledLink
        key={0}
        variant="secondary"
        text="Live Demo"
        className="text-xs border border-cards"
      />,
      <OutlinedLink key={1} variant="primary" text="Live Demo" className="text-xs" />
    ]
  },
  {
    title: 'Payment App',
    description: 'Web application where you can pay with PayPal',
    imageUrl: 'projects/chat-group-ss.png',
    buttons: [
      <FilledLink
        key={0}
        variant="secondary"
        text="Live Demo"
        className="text-xs border border-cards"
      />,
      <OutlinedLink key={1} variant="primary" text="Live Demo" className="text-xs" />
    ]
  },
  {
    title: 'Payment App',
    description: 'Web application where you can pay with PayPal',
    imageUrl: 'projects/chat-group-ss.png',
    buttons: [
      <FilledLink
        key={0}
        variant="secondary"
        text="Live Demo"
        className="text-xs border border-cards"
      />,
      <OutlinedLink key={1} variant="primary" text="Live Demo" className="text-xs" />
    ]
  }
]
