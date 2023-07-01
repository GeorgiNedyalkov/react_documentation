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
