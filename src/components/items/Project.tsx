import { CardImage } from '@atoms/images/CardImage'
import { useState } from 'react'
import { ProjectInfo } from './ProjectInfo'

export const Project = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="">
      {isActive && <ProjectInfo />}
      <div className="" onClick={() => setIsActive(true)}>
        <CardImage src="projects/chat-group-ss.png" alt="Chat group" hasBlur={isActive} />
      </div>
    </div>
  )
}
