---
title: 'Nightwatch Installation'
menuTitle: 'Nightwatch'
description: ''
position: 6
category: Installation
---

After you have installed Node, you can use its package manager `npm` to install Nightwatch. There are two ways you can install it.

## Global Installation

To have nightwatch available from any directory/path on your computer, you can install it globally. To do so, run the following in a console/terminal window.

```bash
npm install --global nightwatch
```

<alert>

There is a shorthand you can also use - you can rewrite the above command as `npm i -g nightwatch`.

</alert>

## Local Installation

Alternatively, you can also install Nightwatch so that it's available only to your project and not anywhere else. For that, you need to create a Node project first. The following command will help you do that.

```bash
mkdir my-project
cd my-project
npm init -y
```

<alert>

The `-y` flag is to accept all default parameters while project creation.

</alert>

Next, making sure you're in the `my-project` folder, run the command

```bash
npm install nightwatch --save-dev
```

We're omitting the `--global` or `-g` flag so that it's not installed globally. The `--save-dev` installs it only as a development dependency.