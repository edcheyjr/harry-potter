export function compareString(str1: string, str2: string): boolean {
  // Trim and convert to lowercase
  const trimmedStr1 = str1.trim().toLowerCase()
  const trimmedStr2 = str2.trim().toLowerCase()

  // console.log('trimmedStr1 === trimmedStr2', trimmedStr1 === trimmedStr2)

  // Perform the comparison
  return trimmedStr1 === trimmedStr2
}
