import addCurrentYearOnLoad from './addCurrentYearOnLoad.js'

describe('addCurrentYearOnLoad', () => {
  test('WILL wait for DOMContentLoaded event and once triggered will add the current yeat to element with id = "year"', () => {
    document.body.innerHTML = `
    <nav>
      <div>
        <a href="index.html">articles</a>
        <a href="about-me.html">about me</a>
      </div>
      <div id='year'/>
    </nav>`

    addCurrentYearOnLoad()

    document.dispatchEvent(
      new Event('DOMContentLoaded', {
        bubbles: true,
        cancelable: true
      })
    )

    const expectedYear = new Date().getFullYear()
    expect(document.body.innerHTML).toEqual(`
    <nav>
      <div>
        <a href="index.html">articles</a>
        <a href="about-me.html">about me</a>
      </div>
      <div id="year">It's ${expectedYear}, you're welcome</div></nav>`)
  })
})
