# React

Knowledge about react and ...

Common interview questions and asnwers

## What is React?

React is a library for web and native user interfaces.

## Components

Components are pieces of the user interface which combine JSX - what the interface looks like,
and the logice (functionality), how the interface integrates with the applicaiton in a single component.

## Learn React

### Quick Start

- How to create an nest components?
- How to add markup and styles?
- How to display data?
- How to render conditions and lists?
- How to respond to events on the screen?

## React Hooks

Functions that start with `use` are called Hooks.

There are built in functions like:

- `useState`
- `useEffect`
- `useReducer`
- `useRef`
- `useContext`
- `useMemo`
- `useCallback`

You can also create your own custom hooks.

Hooks are more strict that other functions. You can only call Hooks at the top of your components
(or other Hooks).

## Common Interview Questions

### What is React?

React is a library for creating user interfaces for the web and native applications.

### What are the main features of React?

Components - pieces of code that combine the UI and the logic into a single entity.
Virtual DOM - It uses _Virtual DOM_ instead of Real DOM considering that Real DOM manipulations are expensive.
Hooks - built in functions that let you keep and update state, perform side effects, etc.
JSX - html like syntax that describes the UI but also let's you do javascript inside parenthesis
and do things like conditional rendering, etc. It is similar to creating templates.

- JSX synax, extension of JS that allows developers to write HTML in their JS code.
- Virtual DOM
- Support server-side rendering which is useful for Search Engine Optimizations (SEO)
- Follows Unidirectional or one-way data frol or data binding.
- Uses reusable/ composable UI components to develop the view.

### What is JSX?

JSX stands for _JavaScript XML_ and it is an XML-like syntax extension to ECMAScript.

Basically it provides the syntatic sugar for the _React.createElement(type, props, ...children)_ function,
giving us expressiveness of JavaScript along with HTML like template syntax.

```javascript
export default function App() {
  return <h1 className="greeting">{"Hello this is a JSX Code!"}</h1>;
}
```

If we don't use JSX syntax then the respective JavaScript code should be written as below,

```javascript
import { createElement } from "react";

export default function App() {
  return createElement(
    "h1",
    { className: "greeting" },
    "Hello, this is JSX Code!"
  );
}
```

### What is the difference between an element and Component?

An Element is a plain object describing what to appear on the screen in terms of DOM nodes
or other components. Elementes can contain other Elements in their props. Once an element is
create it is immutable.

```javascript
const element = React.createElement("div", { id: "login-btn" }, "Login");
```

and this element can be simplified using JSX.

```javascript
<div id="login-btn">Login</divj>
```

The above `React.createElement()` function returns an object as below:

```javascript
{
    type: "div",
    props: {
        children: "Login",
        id: "login-btn"
    }
}
```

### How to create components in React?

1. Functional Components

The simples way to create a component. They are pure javascript functions that accept props
as objects as the first parameter and return React elements to render the output.

2. Class Components: you can use ES6 class to define a component.

```javascript
class Greeting extends React.Component {
  render() {
    return <h1>{`Hello, ${this.props.message}`}</h1>;
  }
}
```

### When to use a Class Component over a Function Component?

### What is the virtual DOM?

Virtual DOM is a virtual representation of the DOM tree kept inside memory and is synced with the
real DOM by a library ReactDOM.

DOM manipulation is slow compared to other operations in JavaScript. If an item in a list is updated then
the entire list get rendered again, instead of that one individual item, which is not efficient.

For every DOM element there is a corresponding copy in the Virtual DOM, which has the same properties.

React uses two virtual DOMs to render the user interface. One of them is used to store the current state of the objects and the other to store the previous state of the objects. Whenever the virtual DOM gets updated, react compares the two virtual DOMs and gets to know about which virtual DOM objects were updated. After knowing which objects were updated, react renders only those objects inside the real DOM instead of rendering the complete real DOM. This way, with the use of virtual DOM, react solves the problem of inefficient updating.

### What is the difference between controlled and uncontrolled components?

They are different upproaches to handling form input from elements in React.

- _Controlled Component_

In a controlled component, the value of the input is controlled by React.

We store the state of the input element inside the conde, and by using event-based callbacks, any changes made to the input
element will be reflected in the code as well.

When a user enter data inside the input element of a controlled component, `onChange`function gets triggered and inside the code,
we check whether the value entered is valid or invalid. If the value is valid, we change the state and re-redner the input element
with the input value.

- _Uncontrolled Component_

In that case the value of the input component is handled by the DOM itself. Input elements inside uncontrolled components
work just like normal HTML input form elements.

The state of the input element is handled by the DOM.

### React Overview: History and Philosophy

React is a JavaScript library for building _user interface_ (UI)

SPA application: Single Page application

Entire client app that runs in the browser. Javascript creates the HTML that is visualised in the browser.
Its a client app and is rendered in the client.

Benefits:

- better UX. Why? Everything is loaded and reloaded quickly and smoothly. Everything changes at that moment.

How React approaches the problem of creating an application with many different parts?

Usually there is a multilayer architecture like MVC frameworks.

Controller, model and view.

The controller controls the model and view. And the model shows how to render the view. The model
show the DB what the data structure will look like.

_Component_

The whole application is composed of components which include both the presentation of the UI and the business
logic.
