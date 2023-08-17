export function compareString(
  str1: string | null | undefined,
  str2: string | null | undefined
): boolean {
  if (
    str1 === null ||
    str2 === null ||
    str1 === undefined ||
    str2 === undefined
  ) {
    console.warn('Something might be undefined when comparing')
    return false // If either input is null or undefined, consider them not equal
  }

  // Trim and convert to lowercase
  const trimmedStr1 = str1.trim().toLowerCase()
  const trimmedStr2 = str2.trim().toLowerCase()

  // Perform the comparison
  return trimmedStr1 === trimmedStr2
}
