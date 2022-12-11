import { TECHS } from '@data'

export const POSITIONS = [
  'hidden md:block absolute left-44 top-52 floating w-fit',
  'hidden md:block absolute top-60 right-44 floating w-fit',
  'hidden md:block absolute left-52 bottom-40 floating w-fit',
  'hidden md:block absolute bottom-32 right-56 floating w-fit'
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
