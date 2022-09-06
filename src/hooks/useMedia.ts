import { useState, useEffect } from 'react'

export function useMedia(width: number) {
  const [matches, setMatches] = useState(false)

  const resizeFn = () => {
    setMatches(window.innerWidth >= width)
  }

  useEffect(() => {
    window.addEventListener('resize', resizeFn)

    return () => {
      window.removeEventListener('resize', resizeFn)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    matches
  }
}
