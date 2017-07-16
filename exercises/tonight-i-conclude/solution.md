```js
const willIConclude = require(process.argv[3])

describe('The willIConclude function', () => {
  describe('when called with a loser name', () => {
    it('should reject to false', done => {
      const loserName = 'Bieber'
      const expectedValue = false

      willIConclude(loserName)
      .catch(actualValue => {
        expect(actualValue).toEqual(expectedValue)
        done()
      })
    })
  })
  describe('when called with a winner name', () => {
    it('should resolve to true', done => {
      const winnerName = 'Dus'
      const expectedValue = true

      willIConclude(winnerName)
      .then(actualValue => {
        expect(actualValue).toEqual(expectedValue)
        done()
      })
    })
  })
})
```
