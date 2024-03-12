import { describe, expect, test } from '@jest/globals'
import { resolveHouseNames } from './resolveHouseNames'
import { Houses } from '../types.d'

describe('resolveHouseNames function', () => {
  test('should return the correct house when a valid house name is provided', () => {
    expect(resolveHouseNames('Gryffindor')).toBe(Houses.GRYFFINDOR)
    expect(resolveHouseNames('Hufflepuff')).toBe(Houses.HUFFLEPUFF)
    expect(resolveHouseNames('Ravenclaw')).toBe(Houses.RAVENCLAW)
    expect(resolveHouseNames('Slytherin')).toBe(Houses.SLYTHERIN)
  })

  test('should return the correct house when a valid house name with varying case is provided', () => {
    expect(resolveHouseNames('gryffindor')).toBe(Houses.GRYFFINDOR)
    expect(resolveHouseNames('HuFFlePuff')).toBe(Houses.HUFFLEPUFF)
    expect(resolveHouseNames('rAVEnclAW')).toBe(Houses.RAVENCLAW)
    expect(resolveHouseNames('slyTHerIN')).toBe(Houses.SLYTHERIN)
  })

  test('should return Houses.GRYFFINDOR if no house name is provided', () => {
    expect(resolveHouseNames()).toBe(Houses.GRYFFINDOR)
    expect(resolveHouseNames('')).toBe(Houses.GRYFFINDOR)
    expect(resolveHouseNames(undefined)).toBe(Houses.GRYFFINDOR)
  })

  test('should return Houses.GRYFFINDOR for invalid house names', () => {
    expect(resolveHouseNames('InvalidHouse')).toBe(Houses.GRYFFINDOR)
  })
})
