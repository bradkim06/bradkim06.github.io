---
layout: post
title: 'ECMA Script 6'
author: [bradkim06]
tags: ['React Tutorial']
date: '2020-08-04'
draft: false
---

What is ES6?
===
ES6 stands for ECMAScript 6.

ECMAScript was created to standardize JavaScript, and ES6 is the 6th version of ECMAScript, it was published in 2015, and is also known as ECMAScript 2015.

Why Should I Learn ES6?
===
React uses ES6, and you should be familiar with some of the new features like:

- Classes
- Arrow Functions
- Variables (let, const, var)

Classes
===
ES6 introduced classes.

A class is a type of `function`, but instead of using the keyword function to initiate it, we use the keyword `class`, and the properties are assigned inside a `constructor()` method.

### Example
```jsx
class Car {
    constructor(name) {
        this.brand = name;
    }
}
```

Now you can create objects using the Car class:

Create an object called "mycar" based on the Car class:
```jsx
class Car {
  constructor(name) {
    this.brand = name;
  }
}

mycar = new Car("Ford");
```

Method in Classes
===
You can add your own methods in a class:

### Example
```jsx
class Car {
  constructor(name) {
    this.brand = name;
  }
  
  present() {
    return 'I have a ' + this.brand;
  }
}

mycar = new Car("Ford");
mycar.present();
```
Class Inheritance
===
To create a class inheritance, use the `extends` keyword.

### Example
Create a class named "Model" which will inherit the methods from the "Car" class:

```jsx
class Car {
  constructor(name) {
    this.brand = name;
  }

  present() {
    return 'I have a ' + this.brand;
  }
}

class Model extends Car {
  constructor(name, mod) {
    super(name);
    this.model = mod;
  }  
  show() {
      return this.present() + ', it is a ' + this.model
  }
}
mycar = new Model("Ford", "Mustang");
mycar.show();
```

The `super()` method refers to the parent class.

By calling the `super()` method in the constructor method, we call the parent's constructor method and gets access to the parent's properties and methods.

Arrow Functions
===
Arrow functions were introduced in ES6.

Arrow functions allow us to write shorter function syntax:

### Before:
```jsx
hello = function() {
  return "Hello World!";
}
```

### With Arrow Function:
```
hello = () => {
  return "Hello World!";
}
```

### Arrow Functions Return Value by Default:

```jsx
hello = () => "Hello World!";
```

> **Note**: This works only if the function has only one statement.  

Arrow Function With Parameters:
===
```jsx
hello = (val) => "Hello " + val;
```

Arrow Function Without Parentheses:
===

```jsx
hello = val => "Hello " + val;
```

What About ``this``?
===

The handling of `this` is also different in arrow functions compared to regular functions.

In short, with arrow functions there are no binding of `this`.

In regular functions the `this` keyword represented the object that called the function, which could be the window, the document, a button or whatever.

With arrow functions, the `this` keyword always represents the object that defined the arrow function.

Let us take a look at two examples to understand the difference.

Both examples call a method twice, first when the page loads, and once again when the user clicks a button.

The first example uses a regular function, and the second example uses an arrow function.

The result shows that the first example returns two different objects (window and button), and the second example returns the Header object twice.

### With a regular function, `this` represents the object that called the function:


```jsx
class Header {
  constructor() {
    this.color = "Red";
  }

//Regular function:
  changeColor = function() {
    document.getElementById("demo").innerHTML += this;
  }
}

myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor)
```

### With an arrow function, this represents the Header object no matter who called the function:
```jsx
class Header {
  constructor() {
    this.color = "Red";
  }

//Arrow function:
  changeColor = () => {
    document.getElementById("demo").innerHTML += this;
  }
}

myheader = new Header();


//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
```

Remember these differences when you are working with functions. Sometimes the behavior of regular functions is what you want, if not, use arrow functions.

Variables
===
Before ES6 there were only one way of defining your variables: with the `var` keyword. If you did not define them, they would be assigned to the global object. Unless you were in strict mode, then you would get an error if your variables were undefined.

Now, with ES6, there are three ways of defining your variables: `var`, `let`, and `const`.

### var

```jsx
var x = 5.6;
```

If you use `var` outside of a function, it belongs to the global scope.

If you use `var` inside of a function, it belongs to that function.

If you use `var` inside of a block, i.e. a for loop, the variable is still available outside of that block.

> `var` has a function scope, not a block scope.

### let

```jsx
let x = 5.6;
```

> let has a block scope.

`let` is the block scoped version of `var`, and is limited to the block (or expression) where it is defined.

If you `use` let inside of a block, i.e. a for loop, the variable is only available inside of that loop.


### const
```jsx
const x = 5.6;
```

`const` is a variable that once it has been created, its value can never change.
> `const` has a block scope.

Reference
---
[React ECMA Script6](https://www.w3schools.com/react/react_es6.asp)
