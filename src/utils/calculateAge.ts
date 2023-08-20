export const calculateAge = (birthYear: number): number => {
  const currentYear = new Date().getFullYear()

  if (birthYear > currentYear) {
    throw new Error('birth year cannot be in the future')
  }

  return currentYear - birthYear
}
