import assert from 'assert'
import { checkIfPrime, generatePrimeNumbersToVal, checkValueIsNumber } from '../helpers'

describe('helper functions', () => {

  describe('Generate array of prime numbers of certain length', () => {
    for (let i = 5; i <= 10; i++) {
      it(`should generate prime numbers of lengh: ${i}`, () => {
        assert(generatePrimeNumbersToVal(i).length === i)
      })
    }

    for (let i = 5; i <= 10; i++) {
      it(`should generate prime numbers of lengh: ${i} after passing last generated array of last generated prime numbers`, () => {
        assert(generatePrimeNumbersToVal(i, [2, 3, 5]).length === i)
      })
    }

    for (let i = 1; i <= 4; i++) {
      it(`should return length of prime numbers needed if previous prime number length is more than what's needed`, () => {
        assert(generatePrimeNumbersToVal(i, [2, 3, 5, 7, 11]).length === i)
      })
    }

  })

  describe('Check if Prime', () => {
    it('should return false if previous prime numbers generated is not passed', () => {
      assert(checkIfPrime(3) === false)
    })
    it('should check if 3 is prime', () => {
      assert(checkIfPrime(3, [2]) === true)
    })
  })

  describe('Check if value is number', () => {
    const testCases = [{ value: '1', expectedResult: true },
    { value: 1, expectedResult: true },
    { value: 'a', expectedResult: false },
    { value: 'e', expectedResult: false },
    { value: '1e', expectedResult: false },
    { value: '5', expectedResult: true },
    { value: 10, expectedResult: true },
    { value: 'aefad', expectedResult: false },
    ]

    for (let i = 0; i < testCases.length; i++) {
      it(`should test if value: ${testCases[i].value} is a number`, () => {
        assert(checkValueIsNumber(testCases[i].value) === testCases[i].expectedResult)
      })
    }

  })
})