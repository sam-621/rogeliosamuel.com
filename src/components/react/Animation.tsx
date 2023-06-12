import { motion } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'

export const Animation: FC<Props> = ({ children, x = [], y = [] }) => {
  const [fromX = 0, toX = 0] = x
  const [fromY = 0, toY = 0] = y
  return (
    <motion.div
      initial={{ opacity: 0, x: fromX, y: fromY }}
      animate={{ opacity: 1, x: toX, y: toY }}
      transition={{ type: 'spring' }}
    >
      {children}
    </motion.div>
  )
}

type Props = PropsWithChildren & {
  /**
   * [fromY, toY]
   */
  y?: number[]
  /**
   * [fromX, toX]
   */
  x?: number[]
}
