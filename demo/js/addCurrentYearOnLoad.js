import { getYear } from './dateUtils.js'

export default function addCurrentYearOnLoad () {
  document.addEventListener('DOMContentLoaded', event => {
    const yearElement = document.querySelector('#year')
    yearElement.innerHTML = `It's ${getYear()}, you're welcome`
  })
}
