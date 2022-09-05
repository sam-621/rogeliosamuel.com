import { CardImage } from '@atoms/images/CardImage'
import { useState } from 'react'
import { CardInfo } from './CardInfo'

export const Card = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="">
      {isActive && <CardInfo />}
      <div className="" onClick={() => setIsActive(true)}>
        <CardImage src="projects/chat-group-ss.png" alt="Chat group" hasBlur={isActive} />
      </div>
    </div>
  )
}
