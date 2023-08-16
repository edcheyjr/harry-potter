export function resolveHairAndEyeColors(value: string): string {
  const lowerCaseValue = value.toLocaleLowerCase().trim()

  switch (lowerCaseValue) {
    case 'blonde':
      return '#FBF6D9' // Blonde color code
    case 'dark':
      return '#000000' // Dark color code
    case 'brown':
      return '#654321' // Brown color code
    // Add more cases for other human hair/eye colors
    default:
      return lowerCaseValue // Return the lowercased value if no match found
  }
}
