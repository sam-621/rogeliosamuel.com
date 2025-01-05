export const wait = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));

export const isFirst = (index: number) => index === 0;
export const isLast = (index: number, array: any[]) =>
  index === array.length - 1;
