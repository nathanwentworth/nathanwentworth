---
title: Using the Javascript Revealing Module Pattern
tags: [tech, code]
---

I almost always try to use vanilla javascript if possible when writing personal projects, but a thing I constantly miss from more OOP languages is the ability to separate code into classes. A nice method to get a similar functionality in js is to use functions as classes.

```js
let sampleClass = function () {
  let localVar = 'hello';
  let globalVar = 'everyone can see me!';

  function localFunction() {
    console.log('this is a local function')
  }

  function globalFunction() {
    console.log(localVar);

    localFunction();
  }

  return {
    text: globalVar,
    printLocal: globalFunction
  }
}()

// sampleClass.text
// 'everyone can see me!'

// sampleClass.printLocal()
// 'hello'
// 'this is a local function'
```

`sampleClass` is a self-calling function (due to the `()` after the closing curly bracket) which allows this whole thing to work. Anything not inside of a function declaration inside of `sampleClass` will be automatically called, so if you don't want that happening, put it in a function. For example, if you were to have the below, it would be called immediately on page load.

```js
let sample2 = function() {
  console.log('called!')
}()
```

But, since the functions inside of the class function aren't self calling, nothing inside those will run. This can be helpful for having a few initializing functions that occur when the class is loaded, but other things that only happen when you specifically want them to.

It's good to think of these a lot like ES6/node.js modules but without having `include`/`require` or needing anything to combine code. You can see extensive use of this system (complete with react-esque components) in the front-end for [Writer's Flock](https://github.com/TheConBot/Writers-Flock/blob/master/WF-Root/WF-Client/js/main.js).