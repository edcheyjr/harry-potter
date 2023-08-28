import { range } from './range'

describe('range function', () => {
  it('returns an array with values from start to end', () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4, 5])
  })
  it('0, 0 is [0]', () => {
    expect(range(0, 0)).toEqual([0])
  })
  it('returns an array with a single value if start and end are the same', () => {
    expect(range(10, 10)).toEqual([10])
  })

  it('returns an empty array if start is greater than end', () => {
    expect(range(5, 2)).toEqual([])
  })

  it('returns an empty array if start and end are both negative', () => {
    expect(range(-3, -1)).toEqual([])
  })

  it('returns an array with negative values', () => {
    expect(range(-2, 2)).toEqual([0, 1, 2])
  })

  it('returns an empty array if length is negative', () => {
    expect(range(1, -2)).toEqual([])
  })
})
