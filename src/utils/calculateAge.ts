function calculateAge(birthYear: string, currentYear: string): number | null {
  const birthYearNumber = parseInt(birthYear)
  const currentYearNumber = parseInt(currentYear)

  if (isNaN(birthYearNumber) || isNaN(currentYearNumber)) {
    // If either year is not a valid number, return null
    return null
  }

  if (birthYearNumber > currentYearNumber) {
    // If birth year is in the future, return null
    return null
  }

  const age = currentYearNumber - birthYearNumber
  return age
}
