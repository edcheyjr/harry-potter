import { searchStrings } from './searchStrings' // Update with the correct module path
import { describe, expect, test } from '@jest/globals'

describe('searchStrings function', () => {
  test('should return true when b is a substring of a (case-insensitive)', () => {
    const result = searchStrings('Hello World', 'world')
    expect(result).toBe(true)
  })

  test('should return false when b is not a substring of a (case-insensitive)', () => {
    const result = searchStrings('Hello', 'world')
    expect(result).toBe(false)
  })

  test('should return false when a is null', () => {
    const result = searchStrings(null, 'hello')
    expect(result).toBe(false)
  })

  test('should return false when b is null', () => {
    const result = searchStrings('Hello', null)
    expect(result).toBe(false)
  })

  test('should return false when both a and b are null', () => {
    const result = searchStrings(null, null)
    expect(result).toBe(false)
  })

  test('should return false when a is undefined', () => {
    const result = searchStrings(undefined, 'hello')
    expect(result).toBe(false)
  })

  test('should return false when b is undefined', () => {
    const result = searchStrings('Hello', undefined)
    expect(result).toBe(false)
  })

  test('should return false when both a and b are undefined', () => {
    const result = searchStrings(undefined, undefined)
    expect(result).toBe(false)
  })

  test('should handle whitespace in a and b', () => {
    const result = searchStrings('   Hello   ', ' hello ')
    expect(result).toBe(true)
  })

  test('should return false when b is an empty string', () => {
    const result = searchStrings('Hello', '')
    expect(result).toBe(false)
  })

  test('should return falseas nothing to search when both a and b are empty strings', () => {
    const result = searchStrings('', '')
    expect(result).toBe(false)
  })
})
