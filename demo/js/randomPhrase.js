const randomPhrases = [
  `Je voudrais deux croissants s'il vous plait`,
  `Kann ich 1 Bier trinken?`,
  `Ich habe hosen`,
  `On n'apprend pas aux vieux singes à faire des grimaces`
]

export default function getRandomThingToSay () {
  const randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1
  return randomPhrases[randomNumber - 1]
}
