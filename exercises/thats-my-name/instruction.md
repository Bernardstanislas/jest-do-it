# That's my name

When it comes to React components testing, Jest is a golden choice as a testing library.
As an example, we will use a simple component, `Person`, rendering into simple markup.
This component will have an asynchronous behaviour that you will need to test.

In order to test React components, React exposes useful functions that will allow you fake components renderings.
These functions being quite low-level, Airbnb team has developped a wrapping library around them called **enzyme**. You might need it in order to quickly write your tests.

Your are expected to write tests for the provided component.
Your tests should cover the following features:
- the rendered markup
- the altered markup after any change made to the component's state (spoiler alert: the state will change after the *componentDidMount*)
- the calls of the callbacks given as props

The module exporting the `Person` component will be provided as a path through `process.argv[3]`.
You can import it writing `require(process.argv[3])`.

**Hints**

You are about to test the rendered markup of a React component.
In order to test the markup, you have several choices.

If you want to test only the rendering of your component, you can make a shallow render, that will only make the initial mount of your component:
```js
const { shallow } = require('enzyme')

// ...

const wrapper = shallow(<MyComponent />)
expect(wrapper.find(Foo).length).toEqual(3)
```
You can find the documentation for `shallow` here: https://github.com/airbnb/enzyme/blob/master/docs/api/shallow.md 

If you want to make more complex testing, such as complete rendering, state mutation, you might need to render your component in a test virtual DOM such as jsdom:
```js
const { mount } = require('enzyme')

// ...

const onButtonClick = jest.fn()
const wrapper = mount((
  <Foo onButtonClick={onButtonClick} />
))
wrapper.find('button').simulate('click')
expect(onButtonClick.mock.call.length).to.equal(1)
```
You can find the documentation for `mount` here: https://github.com/airbnb/enzyme/blob/master/docs/api/mount.md


With Jest you can also go quicker testing objects by making snapshots of it.
A snapshot is like a picture of what an object is at a precise moment. The next time your test runs, it will make a new snapshot of the object and compare it to the previous one. In case it differs, your test fails.
You can use it as follows:
```js
import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(
    <Link page="http://www.facebook.com">Facebook</Link>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
```

See the documentation there: https://facebook.github.io/jest/docs/snapshot-testing.html
