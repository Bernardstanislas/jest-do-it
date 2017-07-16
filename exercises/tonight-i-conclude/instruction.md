# Tonight I conclude

Let's say you are writing the new Tinder app, and you want to provide your users a hint on whether their incoming date will go smooth.
Let's assume you wrote a function called `willIConclude`, which takes a name as a String and
returns a promise.
The promise will be resolved to `true` if the provided name is `Dus`, and rejected to `false` otherwise.
Write a test for that function.

The module exporting the `willIConclude` function will be provided as a path through `process.argv[3]`.
You can import it writing `require(process.argv[3])`.

**Hints**

You are about to test an asynchronous function. In order to tell Jest to wait for the asynchronous call to be done, you might need to use the `done` function as follows:

```js
describe('Some asynchronous stuff', () => {
  it('should call asynchronously some other stuff', done => { //  Notice the done fonction taken as a parameter of your callback
    // Your test here

    testSomethingAsync(function myCallbackCalledAsynchronously(params) {
      // Do your assertions here

      // ...

      // Once it's done, tell Jest to stop waiting by calling the done function
      done()
    })
  })
})
```

