// helper function
type T = number

export const range = (start: number, end: number): Array<T> => {
  // dont create range for negative values
  if (start < 0 && end <= 0) {
    return []
  }
  if (start < 0) {
    start = 0
  }
  let length = end - start + 1

  /*
    Create an array of certain length and set the elements within it from
    start value to end value.
  */
  return Array.from({ length }, (_, idx) => idx + start)
}
