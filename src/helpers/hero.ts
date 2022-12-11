import { TECHS } from 'src/data/techs'

export const POSITIONS = [
  'left-44 top-52',
  'top-60 right-44',
  'left-52 bottom-40',
  'bottom-32 right-56'
]

export const DELAYS = ['-2s', '-1s', '-3s', '-4s']

export const getRandomTechIcons = () => {
  const techsToShow = new Set<number>()
  Array.from({ length: TECHS.length }).forEach(_ => {
    if (techsToShow.size >= 4) return
    const randomNumber = Math.floor(Math.random() * TECHS.length)
    techsToShow.add(randomNumber)
  })

  const techsIcons: string[] = []
  techsToShow.forEach(randomNumber => {
    techsIcons.push(TECHS[randomNumber])
  })

  return techsIcons
}
