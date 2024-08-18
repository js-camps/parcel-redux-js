# reducer

A reducer is not a part of React specifically. It's a concept used broadly in programming for functions that process a collection of items into a single cumulative result. In the context of state management, particularly with Redux or the `useReducer` hook in React, a reducer refers to a function that determines changes to an application's state based on actions sent to it.

**Here's a quick breakdown**:

-   **Reducers in Redux**: Reducers are pure functions that take the previous state and an action, and return the next state. They are central to how Redux manages state, deciding how each action transforms the state of an application.

-   **`useReducer` Hook in React**: React’s `useReducer` hook allows you to manage more complex component states. It works similarly to reducers in Redux but is used for local state management within a React component.

Reducers are used in various contexts to reduce complexity, enforce predictability, and maintain order in applications, making state transitions easy to manage and understand.

## a simple JavaScript application: Reducer 

A reducer function can indeed work independently of any library or framework. Here's a simple demonstration using a reducer function in a standalone JavaScript context to manage a state without React or Redux.

-   `reducer.js`
```js
// Reducer function
function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        case 'RESET':
            return 0;
        default:
            return state;
    }
}

// Simulating dispatch actions
function dispatch(action) {
    state = counterReducer(state, action);
    console.log('State after action:', action.type, '=', state);
}

// Initial state
let state = 0;

// Dispatching actions
dispatch({ type: 'INCREMENT' }); // State after action: INCREMENT = 1
dispatch({ type: 'INCREMENT' }); // State after action: INCREMENT = 2
dispatch({ type: 'DECREMENT' }); // State after action: DECREMENT = 1
dispatch({ type: 'RESET' });     // State after action: RESET = 0
```

**Running this project with Node**

```
node src/redux.js
```
