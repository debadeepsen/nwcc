---
title: 'Running Tests'
description: ''
position: 11
category: 'Nightwatch'
---


In the last section, we wrote this test \-

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

To run it, we simply need to save it to a location inside the project (say `tests/google.js`), and then head to a terminal, point it to the project root folder, and execute the command

```bash
npx nightwatch tests/google.js
```

If you want to run it on a specific browser, you will also need to append a browser-specific flag to it. For example, you can run it on Chrome using the command

```bash
npx nightwatch tests/google.js --env chrome
```

<alert>

The file `nightwatch.conf.js` (which should have been generated the first time you ran the test) contains several helpful keys. For example, instead of running specific files, you can specify the source folder for tests and run all the tests together. You can also set the default browser to your liking here. Check out the Nightwatch documentation for more information - https://nightwatchjs.org/guide/getting-started/introduction.html

</alert>
