```js
cconst PersonComponent = require(process.argv[3])
const React = require('react')
const renderer = require('react-test-renderer')
const { mount } = require('enzyme')

describe('The PersonComponent', () => {
  let name = 'Jean Moust'
  let age = 21
  let onAgeChange = jest.fn()

  beforeEach(() => {
    jest.resetAllMocks()
  })

  it('should render the correct markup', () => {
    const component = renderer.create(
      <PersonComponent
        name={name}
        age={age}
        onAgeChange={onAgeChange}
      />
    )

    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('should call the callback after component is rendered', done => {
    onAgeChange = jest.fn(() => {
      expect(onAgeChange.mock.calls.length).toEqual(1)
      expect(onAgeChange.mock.calls[0][0]).toEqual(age + 1)
      done()
    })

    mount(
      <PersonComponent
        name={name}
        age={age}
        onAgeChange={onAgeChange}
      />
    )
  })
})

```
