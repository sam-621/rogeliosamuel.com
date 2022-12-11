import { useCallback } from 'react'

const useAutoFocus = () => {
  return useCallback((inputElement: HTMLButtonElement) => {
    if (inputElement) {
      inputElement.focus()
    }
  }, [])
}

export { useAutoFocus }
