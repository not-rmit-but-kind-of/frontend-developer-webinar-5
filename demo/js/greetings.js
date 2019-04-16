import randomPhrase from './randomPhrase.js'

export function getGreeting(name) {
  const randomSentence = randomPhrase()
  return `Hello ${name}. ${randomSentence}`
}