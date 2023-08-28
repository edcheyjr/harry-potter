// helper function
type T = number

export const range = (start: number, end: number): Array<T> => {
  let length = end - start + 1
  /*
    Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start)
}
