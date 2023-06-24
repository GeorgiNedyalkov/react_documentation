# React State Management

## useState

## useReducer

## useMemo and useCallback

`useMemo` and `useCallback`, as well as `useEffect`, are hooks that allow you to monitor state.

### useMemo

Every time react re-renders a component a function that performs a calculation gets called.

We only want to recalculate functions when its inputs or dependencies change.

```javascript
import { useState, useMemo } from "react";

export default function App() {
  const [numbers] = useState([10, 20, 30]);

  const total = useMemo(
    () => numbers.reduce((acc, number) => acc + number, 0),
    [numbers]
  );

  return (
    <div>
      <div>Total: {total}</div>
    </div>
  );
}
```

The total function will only run if numbers change.

There are two times when we want to use useMemo:

1. When we perform a complex calculation.
2. When we are creating an array or an object.

```javascript
import { useState, useMemo } from "react";

export default function App() {
  const [names] = useState(["John", "Paul", "Georgi", "Ringo"]);

  const sortedNames = names.sort().join(" ,");

  // names: Georgi, John, Paul, Ringo
  // sortedNames: Georgi, John, Paul, Ringo

  return (
    <div className="h-screen p-4 bg-slate-950 text-white text-3xl">
      <div>Names: {names.join(", ")}</div>
      <div>Sorted names: {sortedNames}</div>
    </div>
  );
}
```

Because arrays and objects are refference type when we sort the names both arrays are sorted.
It is actually mutating the names array in place.

We want to copy names before we sort it.

```javascript
import { useState, useMemo } from "react";

export default function App() {
  const [names] = useState(["John", "Paul", "Georgi", "Ringo"]);

  const sortedNames = [...names].sort().join(" ,");

  return (
    <div className="h-screen p-4 bg-slate-950 text-white text-3xl">
      <div>Names: {names.join(", ")}</div>
      <div>Sorted names: {sortedNames}</div>
    </div>
  );
}
```

This fixes the problem. Every time this component re-renders it's going to run this sort.
Which is why we need to use useMemo

```javascript
import { useState, useMemo } from "react";

export default function App() {
  const [names] = useState(["John", "Paul", "Georgi", "Ringo"]);

  const sortedNames = useMemo(() => [...names].sort().join(", "), [names]);

  return (
    <div className="h-screen p-4 bg-slate-950 text-white text-3xl">
      <div>Names: {names.join(", ")}</div>
      <div>Sorted names: {sortedNames}</div>
    </div>
  );
}
```

There is no need to use useMemo for simple calculations like calculating a sum of two values.
Because it is a simple calculation and it results in a scalar.

### Myths of useMemo

1. It is related to React.memo

They are different things.

### memo

React.memo memoises components.

`memo` let's you skip re-rendering a component when its props are unchanged.

Optimizing with memo is only valuable when your component re-renders often with the same exact props, and its re-rendering logic is expensive.
If there is no perceptible lag when your component re-renders, memo is unnecessary.
Keep in mind that memo is completely useless if the props passed to your component are always different, such as if you pass an object or a plain function defined during rendering.
This is why you will often need useMemo and useCallback together with memo.

### useCallback

We want to use useCallback if the callback we are creating, like onClick or onChange, is going to a nested component as a property.

We need to stabilize references that we send to a nested component.

The other time we want to use useCallback is if we are creating a custom hook.

### useEffect

We use useEffect when we want to get data from a server and load it initially in our app.

If we are responding to a user interaction we may not need use effect we can just do the
action at that point.
