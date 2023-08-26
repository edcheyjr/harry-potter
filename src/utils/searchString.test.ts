import { searchStrings } from './searchStrings'

describe('searchStrings', () => {
  it('should return true if b is a prefix of a', () => {
    expect(searchStrings('apple', 'app')).toBeTruthy()
    expect(searchStrings('Hello, world', 'hello')).toBeTruthy()
    expect(searchStrings('Spaces   ', '   spa  ')).toBeTruthy()
    expect(searchStrings('   Spaces   ', 'space')).toBeTruthy()
  })

  it('should return false if b is not a prefix of a', () => {
    expect(searchStrings('banana', 'app')).toBeFalsy()
    expect(searchStrings('Goodbye, world', 'bye')).toBeFalsy()
    expect(searchStrings('   Spaces   ', 'sapace')).toBeFalsy()
  })

  it('should handle case insensitivity', () => {
    expect(searchStrings('Orange', 'oran')).toBeTruthy()
    expect(searchStrings('CASE', 'cas')).toBeTruthy()
    expect(searchStrings('mixedCASE', 'MiXeD')).toBeTruthy()
  })

  it('should handle trimming and whitespace', () => {
    expect(searchStrings('   hello  ', '  hel')).toBeTruthy()
    expect(searchStrings('    ', ' ')).toBeFalsy()
    expect(searchStrings('no-trim', 'no')).toBeTruthy()
  })

  it('should return false for null or undefined inputs', () => {
    expect(searchStrings(null, 'app')).toBeFalsy()
    expect(searchStrings('apple', null)).toBeFalsy()
    expect(searchStrings(undefined, 'app')).toBeFalsy()
    expect(searchStrings('apple', undefined)).toBeFalsy()
  })

  it('should return false for empty strings', () => {
    expect(searchStrings('', 'app')).toBeFalsy()
    expect(searchStrings('apple', '')).toBeFalsy()
    expect(searchStrings('', '')).toBeFalsy()
  })
})
