import { useEffect, useState } from 'react'

import { DELAYS, getRandomTechIcons, POSITIONS } from '@utils'

export const HeroIcons = () => {
  const [techsToShow, setTechsToShow] = useState<string[]>([])

  useEffect(() => {
    setTechsToShow(getRandomTechIcons())
  }, [])

  return (
    <div>
      {techsToShow.map((tech, i) => (
        <div
          key={tech}
          className="hidden lg:block absolute  floating w-fit"
          style={{ animationDelay: DELAYS[i], ...POSITIONS[i] }}
        >
          <img src={`/icons/techs/${tech}`} alt={tech.replace('.svg', '')} />
        </div>
      ))}
      {/* <div
        className="hidden lg:block absolute left-44 top-52 floating w-fit"
        style={{ animationDelay: '-2s' }}
      >
        <img src={`/icons/techs/${techsToShow[0]}`} alt={techsToShow[0].replace('.svg', '')} />
      </div>
      <div
        className="hidden lg:block absolute top-60 right-44 floating w-fit"
        style={{ animationDelay: '-1s' }}
      >
        <img src={`/icons/techs/${techsToShow[1]}`} alt={techsToShow[1].replace('.svg', '')} />
      </div>
      <div
        className="hidden lg:block absolute left-52 bottom-40 floating w-fit"
        style={{ animationDelay: '-3s' }}
      >
        <img src={`/icons/techs/${techsToShow[2]}`} alt={techsToShow[2].replace('.svg', '')} />
      </div>
      <div
        className="hidden lg:block absolute bottom-32 right-56 floating w-fit"
        style={{ animationDelay: '-4s' }}
      >
        <img src={`/icons/techs/${techsToShow[3]}`} alt={techsToShow[3].replace('.svg', '')} />
      </div> */}
    </div>
  )
}
