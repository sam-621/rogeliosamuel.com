import { DELAYS, getRandomTechIcons, POSITIONS } from 'src/helpers/hero'

export const HeroIcons = () => {
  const techsToShow = getRandomTechIcons()
  return (
    <div>
      {techsToShow.map((tech, i) => (
        <div
          className={`hidden md:block absolute ${POSITIONS[i]} floating w-fit`}
          style={{ animationDelay: DELAYS[i] }}
        >
          <img src={`/icons/techs/${tech}`} alt={tech.replace('.svg', '')} />
        </div>
      ))}
    </div>
  )
}
