import { HERO_TECHS } from '@data'
import { DELAYS, POSITIONS } from '@utils'

export const HeroIcons = () => {
  return (
    <div>
      {HERO_TECHS.map((tech, i) => (
        <div
          key={tech}
          className="hidden lg:block absolute  floating w-fit"
          style={{ animationDelay: DELAYS[i], ...POSITIONS[i] }}
        >
          <img src={`/icons/techs/${tech}`} alt={tech.replace('.svg', '')} />
        </div>
      ))}
    </div>
  )
}
