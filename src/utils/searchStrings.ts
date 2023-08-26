export const searchStrings = (
  a: string | null | undefined,
  b: string | null | undefined
): boolean => {
  if (a === null || a === undefined || b === null || b === undefined) {
    return false // If either string is null or undefined, return false
  }
  const stringA = a.toLocaleLowerCase().trim()
  const stringB = b.toLocaleLowerCase().trim()
  if (stringA == '' || stringB == '') {
    return false
  }
  return stringA.startsWith(stringB) // Check if b is in a
}
