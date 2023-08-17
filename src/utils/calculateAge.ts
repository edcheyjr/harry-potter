export const calculateAge = (year1: number, year2: number): number => {
  const currentYear = new Date().getFullYear()
  const birthYear = Math.min(year1, year2)
  const futureYear = Math.max(year1, year2)

  if (birthYear > currentYear) {
    throw new Error('Birth year cannot be in the future.')
  }

  return currentYear - birthYear
}
