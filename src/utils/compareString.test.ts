import { compareString } from './compareString'

describe('compareString', () => {
  it('returns true for equal strings', () => {
    expect(compareString('Hello', 'Hello')).toBe(true)
    expect(compareString('   Spaces  ', 'spaces')).toBe(true)
    expect(compareString('Case Insensitive', 'case insensitive')).toBe(true)
  })

  it('returns false for different strings', () => {
    expect(compareString('Hello', 'World')).toBe(false)
    expect(compareString('   Spaces  ', 'tabs')).toBe(false)
    expect(compareString('Different Case', 'different CASE')).toBe(false)
  })

  it('handles null and undefined values', () => {
    expect(compareString(null, 'Hello')).toBe(false)
    expect(compareString('Hello', undefined)).toBe(false)
    expect(compareString(null, undefined)).toBe(false)
  })

  it('handles null and undefined values with warning', () => {
    console.warn = jest.fn() // Mock console.warn

    expect(compareString(null, 'Hello')).toBe(false)
    expect(console.warn).toHaveBeenCalledWith(
      'Something might be undefined when comparing'
    )

    expect(compareString('Hello', undefined)).toBe(false)
    expect(console.warn).toHaveBeenCalledWith(
      'Something might be undefined when comparing'
    )

    expect(compareString(null, undefined)).toBe(false)
    expect(console.warn).toHaveBeenCalledWith(
      'Something might be undefined when comparing'
    )
  })
})
