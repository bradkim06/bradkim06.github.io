---
layout: post
title: 'JavaScript Tutorial Intro'
author: [bradkim06]
tags: ['JavaScript Tutorial']
date: '2020-07-31'
draft: false
---
I'm going to follow w3schools's javascript
<br><br>

JavaScript Can Change HTML Content
===
One of many JavaScript HTML methods is `getElementById()`.

This example uses the method to "find" an HTML element (with id="demo") and changes the element content (`innerHTML`) to "Hello JavaScript":

### Example

```html
<p id="content">JavaScript can change HTML content.</p>
<button type="button" onclick='document.getElementById("content").innerHTML = "Hello JavaScript!"'>Click Me!</button>
```

JavaScript Can Change HTML Styles (CSS)
===

### Example
```html
<p id="style">JavaScript can change the style of an HTML element.</p>
<button type="button" onclick="document.getElementById('style').style.fontSize='35px'">Click Me!</button>
```

JavaScript Can Hide HTML Elements
---
### Example
```html
<p id="hide">JavaScript can hide HTML elements.</p>
<button type="button" onclick="document.getElementById('hide').style.display='none'">Click Me!</button>
```
JavaScript Can Show HTML Elements
---
### Example
```html
<p id="show" style="display:none">Hello JavaScript!</p>
<button type="button" onclick="document.getElementById('show').style.display='block'">Click Me!</button>
```

Referece
--------
[JavaScript Intro](https://www.w3schools.com/js/js_intro.asp)
