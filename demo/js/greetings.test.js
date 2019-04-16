import { getGreeting } from './greetings.js'
import randomPhrase from './randomPhrase.js'
jest.mock('./randomPhrase')

randomPhrase.mockImplementation(() => 'Mocking the random phrase')

describe('getGreeting', () => {
  test('WILL return "Hello <name>." and call randomPhrase()', () => {
    const name = 'Barry'
    
    // Without mocking we could assert getGreeting contained a certain string
    expect(getGreeting(name)).toEqual(expect.stringContaining(`Hello ${name}.`))    
    
    // With mocking we can assert the whole string
    expect(getGreeting(name)).toEqual(`Hello ${name}. Mocking the random phrase`)
  })
})
