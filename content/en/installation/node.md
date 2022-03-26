---
title: 'Node JS Installation'
menuTitle: 'Node JS'
description: ''
position: 5
category: Installation
---

## Installing from the Node.js website

Go to https://nodejs.org/ and install a version suitable for your device and operating system. 

<alert>
    If you're doing this for work, the current LTS (long-term-support) version might not be the right one for you because your organization could have a different version of Node that they consider as standard. Please refer to your org's internal docs to find out which version of Node you need.
</alert>

After you're done with the installation, verify it by launching Powershell (Windows 7+) or the Terminal (Linux or Mac) and typing in the following commands.

```bash
node --version
```

and

```bash
npm --version
```

If you see version numbers popping up, you're good to go!

<alert>

`npm` is short for "Node Package Manager". It's a tool that ships with Node (in recent times), which means you should already have `npm` installed by default once you install Node. But it's best to check for it anyway.

</alert>