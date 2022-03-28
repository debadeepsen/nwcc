---
title: 'Web Drivers'
description: ''
position: 9
category: 'Nightwatch'
---


## Web Drivers

Nightwatch is a tool that performs browser automation. Which means, any action a human user would be able to take on a web page, Nightwatch can perform the same through scripts. It does so by taking control of the browser window through the <a target="_blank" href="https://www.w3.org/TR/webdriver/">Web Driver API<i class="fa-icon fa-solid fa-arrow-up-right-from-square"></i></a>. It currently supports Firefox, Chrome, Edge, and Safari, each having its own driver.

<img src="https://nightwatchjs.org/img/operation.png">

### Firefox and Chrome
Geckodriver (for Firefox) and Chromedriver can be installed via `npm`.

```bash
npm install geckodriver --save-dev
npm install chromedriver --save-dev
```
### Edge
You can install the Edge Driver from the official <a target="_blank" href="https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/">Microsoft Edge Driver<i class="fa-icon fa-solid fa-arrow-up-right-from-square"></i></a></a> page.

### Safari
Recent installations of Mac OS come with SafariDriver built-in, but you have to turn it on using the following script (just once before you start testing on Safari).

```bash
safaridriver --enable
```
