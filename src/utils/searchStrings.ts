export const searchStrings = (
  a: string | null | undefined,
  b: string | null | undefined
): boolean => {
  if (a === null || a === undefined || b === null || b === undefined) {
    return false // If either string is null or undefined, return false
  }
  return a.trim().toLocaleLowerCase().includes(b.trim().toLocaleLowerCase()) // Check if b is in a
}
