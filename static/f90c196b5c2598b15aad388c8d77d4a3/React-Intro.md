---
layout: post
title: 'React Intro'
author: [bradkim06]
tags: ['React Tutorial']
date: '2020-08-04'
draft: false
excerpt: Start React Tutorial Study.
---

React Directly in HTML
===

> To use React in production, you need NPM and Node.js

Start by including three scripts, the first two let us write React code in our JavaScripts, and the third, Babel, allows us to write JSX syntax and ES6 in older browsers.

You will learn more about JSX in the [React JSX chapter](https://www.w3schools.com/react/react_jsx.asp).

This way of using React can be OK for testing purposes, but for production you will need to set up a React environment.

### Example

```html
<html>
  <script src="https://unpkg.com/react@16/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.production.min.js"></script>
  <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
  <body>
  
    <div id="mydiv"></div>

    <script type="text/babel">
      class Hello extends React.Component {
        render() {
          return <h1>Hello World!</h1>
        }
      }

      ReactDOM.render(<Hello />, document.getElementById('mydiv'))
    </script>
  </body>
</html>
```

Setting up a React Environment
===

If you have NPM and Node.js installed, you can create a React application by first installing the create-react-app.

```bash
npm install -g create-react-app
```

Then you are able to create a React application, let's create one called myfirstreact.

Run this command to create a React application named myfirstreact:

```bash
npx create-react-app myfirstreact
```

This way of using React can be OK for testing purposes, but for production you will need to set up a React environment.

Run the React Application
===

Now you are ready to run your first real React application!

Run this command to move to the myfirstreact directory:

```bash
cd myfirstreact
```

Run this command to run the React application myfirstreact:

```bash
npm start
```

A new browser window will pop up with your newly created React App! If not, open your browser and type localhost:3000 in the address bar.

the result:
![React Start](/images/React/screenshot_myfirstreact.png)

Modify the React Application
===
So far so good, but how do I change the content?

Look in the `myfirstreact` directory, and you will find a `src` folder. Inside the `src` folder there is a file called `App.js`, open it and it will look like this:

```jsx
import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
```
Try changing the HTML content and save the file.
> Notice that the changes is visible immediately after you save the file, you do not have to reload the browser!

### Example
Replace all the content inside the `<div className="App">` with a `<h1>` element.

See the changes in the browser when you click Save.

```jsx
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World!</h1>
      </div>
    );
  }
}

export default App;
```

### Result

![React Hello World](/images/React/screenshot_helloworld.png)

What's Next?
===

Now you have a React Environment on your computer, and you are ready to learn more about React.

In the rest of this tutorial we will use our Show React tool to explain the various aspects of React, and how they are displayed in the browser.

If you want to follow the same steps on your computer, start by stripping down the `src` folder to only contain two files: `index.js` and index.html, in some builds you might find the `index.html` in the public folder instead, you should also remove any unnecessary lines of code inside the two files to make them look like the files in the Show React tool below:

### Example

`index.js`:
```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const myfirstelement = <h1>Hello React!</h1>

ReactDOM.render(myfirstelement, document.getElementById('root'));
```

`index.html`:
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>React App</title>
  </head>
  <body>

    <div id="root"></div>

  </body>
</html>
```

Reference
---
[React Getting Started - w3schools.com](https://www.w3schools.com/react/react_getstarted.asp)
