---
layout: post
title: 'JavaScript Where To?'
author: [bradkim06]
tags: ['JavaScript Tutorial']
date: '2020-08-02'
draft: false
---
In HTML, JavaScript code is inserted between `<script>` and `</script>` tags.

### Example
```html
<script>
document.getElementById("demo").innerHTML = "My First JavaScript";
</script>
```
- JavaScript Functions and Events
- JavaScript in `<head>` or `<body>`
- JavaScript in <head>

### Example
```html
<html>
<head>
<script>
function myFunction() {
document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>
```

### Result
<html>
<head>
<script>
function myFunction() {
document.getElementById("demo").innerHTML = "Paragraph changed.";
}
</script>
</head>
<body>

<h1>A Web Page</h1>
<p id="demo">A Paragraph</p>
<button type="button" onclick="myFunction()">Try it</button>

</body>
</html>
