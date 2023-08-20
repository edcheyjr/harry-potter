export const searchStrings = (
  a: string | null | undefined,
  b: string | null | undefined
): boolean => {
  if (
    a === null ||
    a === undefined ||
    b === null ||
    b === undefined ||
    b == '' ||
    a == ''
  ) {
    return false // If either string is null or undefined, return false
  }
  return a
    .trimEnd()
    .toLocaleLowerCase()
    .includes(b.trimEnd().toLocaleLowerCase()) // Check if b is in a
}
