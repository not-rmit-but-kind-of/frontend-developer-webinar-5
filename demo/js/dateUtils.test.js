import { getYear } from './dateUtils.js'

describe('getYear', () => {
  test('WILL return current year in format YYYY', () => {
    const currentYear = new Date().getFullYear()
    expect(getYear()).toBe(currentYear)
  })
})
