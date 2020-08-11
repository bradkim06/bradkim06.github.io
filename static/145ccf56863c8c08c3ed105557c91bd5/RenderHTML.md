---
layout: post
title: 'React Render HTML'
author: [bradkim06]
tags: ['React Tutorial']
date: '2020-08-04'
draft: false
---

React's goal is in many ways to render HTML in a web page.

React renders HTML to the web page by using a function called `ReactDOM.render()`.

The Render Function
===
The `ReactDOM.render()` function takes two arguments, HTML code and an HTML element.

The purpose of the function is to display the specified HTML code inside the specified HTML element.

### Example
Display a paragraph inside the "root" element:

```jsx
ReactDOM.render(<p>Hello</p>, document.getElementById('root'));
```

The result is displayed in the `<div id="root">` element:
```html
<body>
  <div id="root"></div>
</body>
```

The HTML Code
===
The HTML code in this tutorial uses JSX which allows you to write HTML tags inside the JavaScript code:

> Do not worry if the syntax is unfamiliar, you will learn more about JSX in the next chapter.

### Example
Create a variable that contains HTML code and display it in the root node:
```jsx
const myelement = (
	<table>
		<tr>
			<th>Name</th>
		</tr>
		<tr>
			<td>John</td>
		</tr>
		<tr>
			<td>Elsa</td>
		</tr>
	</table>
);

ReactDOM.render(myelement, document.getElementById('root'));
```

The Root Node
===

The root node is the HTML element where you want to display the result.

It is like a container for content managed by React.

It does NOT have to be a `<div>` element and it does NOT have to have the `id='root'`:

### Example

The root node can be called whatever you like:
```jsx
<body>
  <header id="sandy"></header>
</body>
```

Display the result in the `<header id="sandy">` element:

```jsx
ReactDOM.render(<p>Hallo</p>, document.getElementById('sandy'));
```

