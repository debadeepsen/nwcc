---
title: 'Test Scripts'
description: ''
position: 10
category: 'Nightwatch'
---


<alert type="warning">The following section describes standalone use of Nightwatch. A following section will discuss how Nightwatch interacts with Cucumber. However, that makes use of a package called Nightwatch API, and will have slightly different syntax.</alert>

### Configuration
There is a file, named `nightwatch.conf.js` that is created in your project root directory automatically when you first launch Nightwatch. You can make edits and additions to this file to suit your needs and style. For example, Nightwatch will launch Firefox by default (if you don't specify parameters while running), and you can change this by editing the configuration to launch Chrome. You can also supply parameters like `--headless` under the desired section, to make Nightwatch perform all tests in the background, without actually launching the browser window.

### The `browser` API
The most basic Nightwatch test is a CommonJS module (a JavaScript file) containing a function. This function takes in an object called `browser` as an argument, and helps us to create all the magic. It is outside the scope of this tutorial to discuss _all_ the features this API offers, but just a few interesting ones are \-

- `url`: Tells the browser which URL to go to
- `click`: Instruction to click on an element
- `setValue`: Setting the value of an element, such as filling up a textbox on a form

It also exposes two important objects that help in testing.

- `assert`, which in turn, has functions under it that performs _assertions_, by checking whether test conditions are met. For example, if we want to make sure that the element with the id `main` is visible, we would write

```javascript
browser.assert.visible('#main')
```

- `expect`, on the other hand, offers the same capability, but in a BDD-friendly format, helping you write tests that are almost in plain English.

```javascript
browser.expect.element('#main').to.be.visible
```

## Sample Script
Let us consider the test scenario that we want to search for something on Google and verify that it takes us to the search results page. For that, we would have to perform two actions:

1. Provide a text for the search box on https://google.com
2. Click the Search button

You can tell Nightwatch how to find those elements by using one of two kinds of selector: either CSS or XPath. This tutorial will make use of CSS selectors.

If we peek into the developer tools for the textbox, we can see that it's HTML looks like this \-

```html
<input class="gLFyf gsfi" jsaction="paste:puy29d;" maxlength="2048" name="q" 
type="text" aria-autocomplete="both" aria-haspopup="false" autocapitalize="off" 
autocomplete="off" autocorrect="off" autofocus="" role="combobox" spellcheck="false" 
title="Search" value="" aria-label="Search" 
data-ved="0ahUKEwiKk7f1nuj2AhUa7WEKHYHeCDoQ39UDCAQ">
```

While this element does not have an `id` attribute, we can see that it can be uniquely identified by the `title="Search"` part, and so, the CSS selector for this element can be chosen as `input[title=Search]`, following rules of CSS.

Similarly, we can see that the HTML for the search button is
```html
<input class="gNO89b" value="Google Search" aria-label="Google Search" name="btnK" 
role="button" tabindex="0" type="submit" 
data-ved="0ahUKEwiKk7f1nuj2AhUa7WEKHYHeCDoQ4dUDCAs">
```

This one's easier because we can see a `name` attribute assigned already. We'll use `input[name=btnK]` as the selector.

With this information, we can write as very simple test as follows.

```javascript
module.exports = {
  'NW test on Google' : function (browser) {
    browser
      .url('http://www.google.com')  // tell NW to visit this URL
      .waitForElementVisible('body', 1000)  // wait till body is loaded
      .assert.title('Google')  // make sure the page title reads "Google"
      .assert.visible('input[title=Search]')  // make sure the text box is visible
      .setValue('input[title=Search]', 'Nightwatch JS')  // enter the search term
      .waitForElementVisible('input[name=btnK]', 1000)  // make sure the button is visible
      .click('input[name=btnK]')  // click the button
      .pause(1000)
      .assert.urlContains('search')  // make sure we got to the right page
      .end()
  }
}
```