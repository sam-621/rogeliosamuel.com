import { motion, MotionProps } from 'framer-motion'
import type { FC, PropsWithChildren } from 'react'

export const Animation: FC<Props> = ({ children, x = [], y = [], className }) => {
  const [fromX = 0, toX = 0] = x
  const [fromY = 0, toY = 0] = y
  return (
    <div className=''>
      <motion.div
        initial={{ opacity: 0, x: fromX, y: fromY }}
        whileInView={{ opacity: 1, x: toX, y: toY }}
        transition={{ type: 'spring' }}
        viewport={{ once: true, amount: 0.3 }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
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
  className?: string
}
