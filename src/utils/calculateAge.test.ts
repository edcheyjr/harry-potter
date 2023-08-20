import { describe, expect, test } from '@jest/globals'
import { calculateAge } from './calculateAge'

describe('what is the age of a person given year differences eg 2000 and 2023', () => {
  test('what is the age?', () => {
    const birthYear = 2000
    const calculatedAged = calculateAge(birthYear)
    const expectedAge = 23 //update this according to current years
    expect(calculatedAged).toEqual(expectedAge) //test whether age is correct generated
  })

  test('Future years Ages?', () => {
    const futureYear = 3000 //must me in the future
    expect(calculateAge(futureYear)).toThrow(
      new Error('birth year cannot be in the future')
    ) //test whether age is correct generated
  })
})
