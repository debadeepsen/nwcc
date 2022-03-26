---
title: Nightwatch
description: ''
position: 2
category: Basics
---

## What is Nightwatch?

Nightwatch.js is an end-to-end (E2E) software testing tool for web applications that run on a browser. It is essentially a Node.js wrapper around Selenium, which has been a standard tool for automated UI testing for many years. Nightwatch is cross-browser, meaning you can use it to test across different web browsers (currently it supports Firefox, Chrome, Edge, Opera, and Safari).

## How does it work?

In Nightwatch, you write tests using JavaScript, following Node.js syntax and conventions. The test typically tells Nightwatch to launch a browser window, visit a URL, and perform a set of actions. For example, a simple test to check if the "About" navigation link is working on the Node.js website would be written as follows:

```js

describe('Test for Node.js website', function() {
  test('test the "about" link', function(browser) {
    browser
      .url('https://www.nodejs.org/en/')
      .waitForElementVisible('body')
      .click('nav > ul > li:nth-child(2) > a')
      .verify.urlEquals('https://nodejs.org/en/about/')
      .end()
  })
})
```

The syntax and the API will be discussed in more detail later in this tutorial.

<alert>
    In more recent versions, Nightwatch also offers the ability for developers to write unit tests for their components written in React or Vue.js. That discussion is outside the scope of this tutorial.
</alert>
