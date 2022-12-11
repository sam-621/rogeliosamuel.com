import { TECHS } from '@data'

export const POSITIONS = [
  {
    left: '11rem',
    top: '13rem'
  },
  {
    top: '15rem',
    right: '11rem'
  },
  {
    left: '13rem',
    bottom: '10rem'
  },
  {
    bottom: '8rem',
    right: '14rem'
  }
]

export const DELAYS = ['-2s', '-1s', '-3s', '-4s']

export const getRandomTechIcons = () => {
  console.log('random')

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
