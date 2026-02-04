import { describe, expect, test } from '@jest/globals'
import { handleColor } from './handleColor'

describe('handleColor function', () => {
    test('should return the correct primary text color for each house', () => {
        expect(handleColor('Gryffindor', 'primary', 'text')).toBe(
            'text-primary-gryffindor',
        )
        expect(handleColor('Hufflepuff', 'primary', 'text')).toBe(
            'text-primary-hufflepuff',
        )
        expect(handleColor('Ravenclaw', 'primary', 'text')).toBe(
            'text-primary-ravenclaw',
        )
        expect(handleColor('Slytherin', 'primary', 'text')).toBe(
            'text-primary-slytherin',
        )
    })

    test('should return the correct secondary background color for each house', () => {
        expect(handleColor('Gryffindor', 'secondary', 'bg')).toBe(
            'bg-secondary-gryffindor',
        )
        expect(handleColor('Hufflepuff', 'secondary', 'bg')).toBe(
            'bg-secondary-hufflepuff',
        )
        expect(handleColor('Ravenclaw', 'secondary', 'bg')).toBe(
            'bg-secondary-ravenclaw',
        )
        expect(handleColor('Slytherin', 'secondary', 'bg')).toBe(
            'bg-secondary-slytherin',
        )
    })

    test('should return the correct primary border color for each house', () => {
        expect(handleColor('Gryffindor', 'primary', 'border')).toBe(
            'border-primary-gryffindor',
        )
        expect(handleColor('Hufflepuff', 'primary', 'border')).toBe(
            'border-primary-hufflepuff',
        )
        expect(handleColor('Ravenclaw', 'primary', 'border')).toBe(
            'border-primary-ravenclaw',
        )
        expect(handleColor('Slytherin', 'primary', 'border')).toBe(
            'border-primary-slytherin',
        )
    })

    // Add more test cases for different combinations of inputs and edge cases
    test('should throw an error for an invalid house', () => {
        expect(() =>
            // @ts-expect-error not a valid house
            handleColor('InvalidHouse', 'primary', 'text'),
        ).toThrow('Invalid house: InvalidHouse')
    })
    test('should throw an error for an invalid color type', () => {
        // ignore types
        expect(() =>
            // @ts-expect-error not a valid color type
            handleColor('Gryffindor', 'invalidType', 'text'),
        ).toThrow('Invalid color type: invalidType') //testing validity
    }) //test wrong types

    test('should throw an error for an invalid color format', () => {
        expect(
            () =>
                // @ts-expect-error not a valid color format
                handleColor('Gryffindor', 'primary', 'invalidFormat'), //testing validity
        ).toThrow('Invalid color format: invalidFormat')
    }) //test wrong types
})
