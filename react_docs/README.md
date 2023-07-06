# React Documentation Learning

## Escape Hatches

### Referencing Values with Refs

One of uses of `useRef` is when you want a component to "remember" some information but
you don't want to trigger new rerenders.

When you create a ref using `useRef` you create an object with a property of `current`.
This property is mutable and you can read or write to it. It's like a secret pocket
that React does't track. (It is an "escape hatch" from React's one-way-data flow.)

Ref can point to any value: string, number, object or a function. It is a plain JavaScript
object with `current` property that you can read and modify.

_The component does not trigger re-render when a change of ref happens_.

If we are building a stop watch and we want to keep use `setInterval()` we can store the
interval id in a useRef because the ID is not used for rendering and should not be updated
when changed.

When a piece of information is used for rendering, we keep it in state.
When a piece of information is only needed by event handlers and changing it doesn't require
a re-render, using a ref may be more efficient.

#### Differences between refs and state

1. useRef returns an object with current property. State returns a state variable and a setter function.
2. useRef does not trigger a re-render on a change. State triggers a re-render on every change.
3. useRef is mutable, you can the current value of the object directly. To change state you must use the
   setter function.
4. You should't read and write the current value during rendering. You can read and write state at any time.
   Each render has its own snapshot of state which does not change.

#### When to useRef

When a component needs to step out of react and work with external APIs - ofter a browser API that won't
impact the appearance of the component.

- Storing timeout IDs
- Storing and manipulation DOM elements
- Storing other objects that aren't necessary to calculate the JSX.

If our component need to store some value but this value is not used for the rendering logic, we can use useRef.

#### Best Practices

- Treat refs as an escape hatch.
- Don't read or write refs during rednering.

#### Refs and the DOM

The most common use case for using ref is to access a DOM element.

#### Recap

- Refs are an escape hatch to hold values that we don't need for rendering.
- Ref is a plain JavaScript object with a single property called current.
- We use refs with the `useRef` hook.
- Ref let's you remember information between re-renders of a component.
- Setting the value of ref does not trigger a re-render.
- Don't read or write `ref.current` during rendering. This makes the component hard to predict.

### Manupulating the DOM with Refs

Sometimes we might need to access the dom elements managed by react, for example to focus a node,
sroll to it, or measure its size and position.

#### Getting a ref to the node

1. Import the `useRef` hook.
2. Declare a reference inside the component
3. Pass the reference as a `ref` attribute to the JSX tag for which we want to access the DOM node.

```javascript
import { useRef } from "react";

const myRef = useRef(null);

<div ref={myRef} />;
```

#### When React attaches the refs

Every update in React is split into two phases:

- During render
- During commit

React sets ref.current during the commit. Before updating the DOM, React sets the affecter ref.current to null.
After updating the DOM, React immediately sets them to the corresponding DOM nodes.

_Flush sync_

In React state updates are queued.
We can force React to update ("flush") the DOM synchronously using `flushSync`

#### Best practices for DOM manipulation with refs

Common use cases: managing focus, scroll position, or calling browser APIs that React doesn't expose.

If you try to modify the DOM manually, there is a risk conflicting the changes that React is making.

Avoid changing DOM nodes managed by React. Modifying, adding children to, or removing children from elements
that are managed by React can lead to inconsistent visual results or crashes like above.

#### Recap

- Refs are most commonly used to hold DOM elements.
- You can instruct React to put a DOM node into `myRef.current` by passing `<div ref={myRef} />`
- Usually we use refs for non-destructive actions like scrolling, focusing, or measuring DOM elements.
- You can expose a DOM node into to a component by using `forwardRef` and passing the second `ref` argument to a
  specific node.
- Avoid changing DOM nodes managed by React.
- If we modify DOM nodes managed by React, we can modify parts that React has no reason to update.

### You Might Not Need an Effect

#### How to remove unncessary efects

- You don't need Effects to transform data for rendering.
- You don't need Effect to hanle user events.

#### Updating state based on props or state

When something can be calculated from existing props or state, don't put it in state.
Instead calculate it during rendering.

#### Caching expensive calculations

#### Resetting all state when a prop changes

Passing a key to a component you’re asking React to treat two components with different keys as two different components that should not share any state.

#### Adjusting some state with a prop change

#### Sharing logic between event handlers

#### Sending a post request

If this logic is caused by a particular interaction, keep it in the event handler. If it’s caused by the user seeing the component on the screen, keep it in the Effect.

#### Chain of computations

#### Initializing the application

#### Notifying a parent component about state changes

#### Passing data to the parent

#### Subscribing to an external store

#### Fetching data

#### Recap

- If you can calculate something during render, you don’t need an Effect.
- To cache expensive calculations, add useMemo instead of useEffect.
- To reset the state of an entire component tree, pass a different key to it.
- To reset a particular bit of state in response to a prop change, set it during rendering.
- Code that runs because a component was displayed should be in Effects, the rest should be in events.
- If you need to update the state of several components, it’s better to do it during a single event.
- Whenever you try to synchronize state variables in different components, consider lifting state up.
- You can fetch data with Effects, but you need to implement cleanup to avoid race conditions.

### Lifecycle of Reactive Effects

#### The lifecycle of an Effect

#### Why synchronizaiton may need to happen more than once

#### How React re-synchronizes your Effect?

#### Thinking from the Effect's perspective

#### How React knows that it needs to re-synchronize the Effect

#### Each Effect represents a separate synchronization process

#### Effects "react" to reactive values

#### What an Effect with empty dependencies means

#### All variables declared in the component body are reactive

#### React verifies that you specified every reactive value as a dependency

#### What to do when you don't want to re-synchronize

#### Reacap

- Components can mount, update and unmount.
- Each effect has a separate lifecyce from the surrounding component.
- Each effect describes a separate synchronization process that can start and stop.
- When you write and read Effects, think from each component's perspective (how to start/ stop syncronization).
- Values declared inside the components body are "reactive".
- Reactive values should re-synchronize the Effect because they can change over time.
- The linter verifies that all reactive values used inside the useEffect are specified as dependencies.
- All error flags in the linter are legitimate.

### Separating Events from Effects

Event handlers only run when the user performs the same action again.

Effects re-syncronize whenever a value that they read either from props or state, is different from the last re-render.

We will learn:

- How to choose between an event handler and an Effect.
- Why Effects are reactive, and event handlers are not.
- What to do when we want a part of the Effect's code to not be reactive.
- What Effect Events are, and how to extract them from your Effects.
- How to read the latest props and state from Effects using Effect Events.

#### Choosing between event handlers and Effects
