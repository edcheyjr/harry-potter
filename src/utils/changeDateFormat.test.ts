import { changeDateFormat } from './changeDateFormat'
import { describe, expect, test } from '@jest/globals'

describe('Test for date formatting function', () => {
  test('Format this date?', () => {
    const correctDateFormat = '12-12-2000' //test date
    const expectedDate = '12 December 2000' //change month from number format to words
    expect(changeDateFormat(correctDateFormat)).toEqual(expectedDate) //test whether age is correct generated
  })
  test('Not correct date', () => {
    const wrongDates = [
      '12-32000',
      '12-40-2000',
      '123',
      'weqweqe',
      '12/23/2000',
    ] //wrong date formats
    //Other edge case
    wrongDates.map((date) => {
      const wrongDate = changeDateFormat(date)
      // console.log('wrondDGate', wrongDate, 'date', date)
      expect(wrongDate).toStrictEqual(date) //return the same garbage i.e garbage in garbage out 🫣🤣
    })
  })
})
