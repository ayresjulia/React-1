### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  - React is a JavaScript frontend framework developed by Facebook. It is opinionated, which means there is spefic design pattern for developer to follow when making apps with React. Due to it's design, developer can create many reusable components that can save time coding an app and make it look more organized.
  
- What is Babel?
  - Babel is a JavaScript compiler, it helps with writing code in the latest version of JavaScript, and also helps compiling app features down to supported version of the browser developer is working in.
  
- What is JSX?
  - JSX is JavaScript XML, which helps us write HTML in React. JSX has to be transpiled to JS, often using Babel.

- How is a Component created in React?
  - Component is a function that renders to HTML using ReactDOM.render. The name of the component must start with an Uppercase letter, component has to return some JSX, which will transpile using Babel to HTML.

- What are some difference between state and props?
  - Props are often passed down from parent to child component. State of one component can become props of another. Props are also immutable. State is mutable, cannot be passed down to child components.

- What does "downward data flow" refer to in React?
  - When a parent can pass props to child but not the other way around.

- What is a controlled component?
  - It is a component that controls the values of input, textarea and select elements in a form using setState(). React controls the value of the component and what happens when user types. Every controlled component has a handle change function to modify the value as user updates it.

- What is an uncontrolled component?
  - It is a component whose state is not being controlled by React, it keeps its source of truth in the DOM. Example would be input element without a value.

- What is the purpose of the `key` prop when rendering a list of components?
  - Keys help React find items that have changed, those keys must be unique. Sometimes library with uuid (universally unique identifier) is used to create unique keys for components.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  - With items being deleted and modified very often, array indexes are prone to change, which will confuse React when it will try to look for modified items. Keys are better because they are unique and won't change with modifications.

- Describe useEffect.  What use cases is it used for in React components?
  - useEffect is used for any side effects that a component may have, for example changing the DOM and fetching the data from an API. UseEffect accepts a callback function as its first argument, and has a second argument which is an array. This array includes values that could be skipped on the next re-render if they haven't changed. Some useEffects require cleanup, and some don't. Great example of useEffect that will need cleanup would be removing component from the DOM, like removing event listener, unfriending someone, unsubscribing.
  
- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  - useRef returns a mutable object with a key of current. The current key will equal the initial value developer passes into it. Mutating it does not trigger the re-render, so it is useful in cases when something doesn't need every element to re-render in the app.

- When would you use a ref? When wouldn't you use one?
  - I would use a useRef with Timer stop feature or whenever we use setInterval. SetInterval usestimer ID which could be a reference to us when we want to stop and re-start the timer. React should control the state of the DOM, therefore using useRef to access elements in the DOM should be avoided.

- What is a custom hook in React? When would you want to write one?
  - Custom hooks are very useful when multiple components have similar features or goals they are trying to accomplish, similar logic or repeated tasks. For example,  getting data from an API or toggle an element. By creating custom hooks, developer makes them reusable in multiple components which cleans up the code and organizes the app.
