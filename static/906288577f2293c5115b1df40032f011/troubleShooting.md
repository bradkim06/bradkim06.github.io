---
layout: post
title: 'Gatsby Trouble Shooting'
author: [bradkim06]
tags: ['gatsby']
date: '2020-08-08'
draft: false
---

### Field "image" must not have a selection since type "String" has no subfields.

``` bash
gatsby clean
gastby develop
```

Issue Page : https://github.com/gatsbyjs/gatsby/issues/13322

### npm ERR! code ELIFECYCLE

Step 1: `$ npm cache clean --force`

Step 2: Delete  **node_modules** by `$ rm -rf node_modules package-lock.json` folder or delete it **manually** by going into the directory and right-click > delete / move to trash. Also, delete .**package-lock** json file too.

Step 3:`npm install` 

This worked for me. Hopes it works for you too.

PS: Still if it is there, kindly check the error it is displaying in red and act accordingly. This error is specific to node.js environment. Happy Coding!!

Issue Page : https://stackoverflow.com/questions/42308879/npm-err-code-elifecycle
