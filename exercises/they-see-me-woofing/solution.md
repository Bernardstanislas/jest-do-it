```js
const bark = require(process.argv[3])

describe('The bark function', () => {
  it('should bark', () => {
    const testText = 'yo dogg'
    const expectedResult = `${testText} woof`

    const actualResult = bark(testText)

    expect(expectedResult).toEqual(actualResult)
  })
})
```
