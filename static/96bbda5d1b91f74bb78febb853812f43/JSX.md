---
layout: post
title: 'React JSX'
author: [bradkim06]
tags: ['React Tutorial']
date: '2020-08-04'
draft: false
---

What is JSX?
===
JSX stands for JavaScript XML.

JSX allows us to write HTML in React.

JSX makes it easier to write and add HTML in React.

Coding JSX
===
JSX allows us to write HTML elements in JavaScript and place them in the DOM without any `createElement()`  and/or `appendChild()` methods.

> You are not required to use JSX, but JSX makes it easier to write React applications.


Let us demonstrate with two examples, the first uses JSX and the second does not:

### JSX:

```jsx
const myelement = <h1>I Love JSX!</h1>;

ReactDOM.render(myelement, document.getElementById('root'));
```

### Without JSX:

```jsx
const myelement = React.createElement('h1', {}, 'I do not use JSX!');

ReactDOM.render(myelement, document.getElementById('root'));
```

As you can see in the first example, JSX allows us to write HTML directly within the JavaScript code.

JSX is an extension of the JavaScript language based on ES6, and is translated into regular JavaScript at runtime.

Expressions in JSX
===
With JSX you can write expressions inside curly braces `{ }`.

The expression can be a React variable, or property, or any other valid JavaScript expression. JSX will execute the expression and return the result:

### Example

```jsx
const myelement = <h1>React is {5 + 5} times better with JSX</h1>;
```


Inserting a Large Block of HTML
===
To write HTML on multiple lines, put the HTML inside parentheses:

### Create a list with three list items:

```jsx
const myelement = (
    <ul>
        <li>Apples</li>
        <li>Bananas</li>
        <li>Cherries</li>
    </ul>
);
```
One Top Level Element
===
The HTML code must be wrapped in ONE top level element.

So if you like to write two headers, you must put them inside a parent element, like a `div` element

### Wrap two headers inside one DIV element:
```jsx
const myelement = (
  <div>
    <h1>I am a Header.</h1>
    <h1>I am a Header too.</h1>
  </div>
);
```

> JSX will throw an error if the HTML is not correct, or if the HTML misses a parent element.

Elements Must be Closed
===
JSX follows XML rules, and therefore HTML elements must be properly closed.

### Close empty elements with />

```jsx
const myelement = <input type="text" />;
```

> JSX will throw an error if the HTML is not properly closed.


