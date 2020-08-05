---
layout: post
title: 'JavaScript Output'
author: [bradkim06]
tags: ['JavaScript Tutorial']
date: '2020-08-02'
draft: false
---

## JavaScript Display Possibilities
JavaScript can "display" data in different ways:

- Writing into an HTML element, using innerHTML.
- Writing into the HTML output using document.write().
- Writing into an alert box, using window.alert().
- Writing into the browser console, using console.log().

## **Using innerHTML**
To access an HTML element, JavaScript can use the `document.getElementById(id)` method.

The `id` attribute defines the HTML element. The `innerHTML` property defines the HTML content:

### Example
```html
<p id="inner"></p>
<script>
document.getElementById("inner").innerHTML = 5 + 6;
</script>
```

### Result
<p id="inner"></p>
<script>
document.getElementById("inner").innerHTML = 5 + 6;
</script>

## **Using document.write()**
For testing purposes, it is convenient to use document.write():

### Example
```html
<script>
document.write(5 + 6);
</script>
```

### Result

<script>
document.write(5 + 6);
</script>

> Using document.write() after an HTML document is loaded, **will delete all existing HTML** So The document.write() method should only be used for testing.

### Example
```html
<button type="button" onclick="document.write(5 + 6)">Try it</button>
```

<button type="button" onclick="document.write(5 + 6)">Try it</button>

## **Using window.alert()**
You can use an alert box to display data:

### Example

```html
<button type="button" onclick="alert(5 + 6)">Try it</button>
```
<button type="button" onclick="alert(5 + 6)">Try it</button>

## **Using console.log()**
For debugging purposes, you can call the `console.log()` method in the browser to display data.

### Example
F12 on your keybord will activate debugging.  
Then select "Console" in the debugger menu.  
Then click Run again.  

```html
<button type="button" onclick="console.log(5 + 6)">Run</button>
```

<button type="button" onclick="console.log(5 + 6)">Run</button>


## **JavaScript Print
JavaScript does not have any print object or print methods.

You cannot access output devices from JavaScript.

The only exception is that you can call the `window.print()` method in the browser to print the content of the current window.

### Example

```html
<button onclick="window.print()">Print this page</button>
```

<button onclick="window.print()">Print this page</button>
