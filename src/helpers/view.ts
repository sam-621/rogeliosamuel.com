export const scrollToElement = (element: HTMLElement, options?: ScrollIntoViewOptions): void => {
  if (!Boolean(element)) return

  element?.scrollIntoView({
    behavior: options?.behavior || 'smooth',
    ...options
  })
}
