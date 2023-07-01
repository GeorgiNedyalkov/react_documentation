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
