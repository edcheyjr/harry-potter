export function changeDateFormat(date: string): string {
  const months: Record<number, string> = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December',
  }
  try {
    const dateArray = date.split('-')
    if (dateArray.length != 3) {
      throw "Failed to split correctly string not in the right format '31-07-1980'"
    }
    const day = dateArray[0]
    const month = dateArray[1]
    const monthTrim = parseInt(month.trim())
    const year = dateArray[2]
    const newDate = `${day} ${months[monthTrim]} ${year}`
    return newDate
  } catch (error) {
    console.error('error', error)
  }
  return date
}
