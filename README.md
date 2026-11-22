# CS — Ticket System (Customer Support Zone)

A responsive React application for managing customer support tickets, tracking in-progress tasks, marking tickets as resolved, and showing toast notifications via React-Toastify.

## React Core Questions

### 1. What is JSX, and why is it used?
JSX (JavaScript XML) is a syntax extension for JavaScript used in React to describe UI structure using HTML-like tags inside JavaScript code. It makes component templates easier to read and write, and build tools like Babel transpile JSX into standard `React.createElement()` calls before execution.

### 2. What is the difference between State and Props?
Props are read-only inputs passed from a parent component to a child component to configure or display data, and a child component should not mutate its own props. State is data managed inside a component (or lifted to a shared parent) that can change over time in response to user actions or events, triggering a re-render when updated.

### 3. What is the useState hook, and how does it work?
`useState` is a React Hook that adds state variables to function components. Calling `useState(initialValue)` returns a two-element array containing the current state value and a setter function; calling the setter schedules a state update and re-renders the component with the updated value.

### 4. How can you share state between components in React?
The standard approach for nearby or sibling components is lifting state up to their closest common parent component and passing state values and handler functions down via props. For deeper component trees or global data, React provides Context API or external state libraries.

### 5. How is event handling done in React?
Event handlers in React are written in camelCase (such as `onClick` or `onChange`) and receive a function reference rather than a string. React wraps native browser events in a `SyntheticEvent` object so event behavior stays consistent across browsers.