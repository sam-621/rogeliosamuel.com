import { FilledLink } from '@atoms/buttons/FilledLink'
import { OutlinedLink } from '@atoms/buttons/OutlinedLink'
import { ICard } from '@interfaces/card.interface'

export const projects: ICard[] = [
  {
    title: 'Chat Group',
    description:
      'A web application where you can send messages in a public chat in real time, login, register and see your profile.',
    imageUrl: 'projects/chat-group-ss.png',
    buttons: [
      <FilledLink
        key={0}
        url="https://chat-group-rs.vercel.app/"
        variant="secondary"
        text="Live Demo"
        className="text-xs lg:text-base"
      />,
      <OutlinedLink
        key={1}
        url="https://github.com/sam-621/Chat-Group"
        variant="primary"
        text="Code"
        className="text-xs lg:text-base"
      />
    ]
  },
  {
    title: 'Payment App',
    description:
      'Web application where you can pay with PayPal, paying the price depending of which plan you chose.',
    imageUrl: 'projects/paypal.png',
    buttons: [
      <FilledLink
        key={0}
        url="https://paymentapp-621.netlify.app/"
        variant="secondary"
        text="Live Demo"
        className="text-xs lg:text-base"
      />,
      <OutlinedLink
        key={1}
        url="https://github.com/sam-621/PaymentApp"
        variant="primary"
        text="Code"
        className="text-xs lg:text-base"
      />
    ]
  }
]
