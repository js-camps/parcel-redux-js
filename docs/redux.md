# redux and redux-thunk

## a simple JavaScript application: Redux 

A basic example of using Redux without React in a simple JavaScript application. This example will demonstrate a simple counter application using Redux to manage the state:

-   Set up the Redux Environment:

First, you need to have Redux installed. If you're running this in a node environment, you can install Redux by running:

```shellnpm install redux
npm install redux
```
-   Create the Store, Reducer, and Actions:

`redux.js`

```js
const { createStore } = require('redux');

// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action Creators
function increment() {
    return { type: INCREMENT };
}

function decrement() {
    return { type: DECREMENT };
}

// Reducer
function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

// Create a Redux store
const store = createStore(counter);

// Display the state changes
store.subscribe(() => console.log('Current state:', store.getState()));

// Dispatch Actions
store.dispatch(increment()); // Current state: 1
store.dispatch(increment()); // Current state: 2
store.dispatch(decrement()); // Current state: 1
```

- generate `.gitignore`
```
npx gitignore node
```

## Running the Example:

### Running this project with Node

```
node src/redux.js
```

## redux-thunk

To enhance your Redux code with `redux-thunk`, you'll need to include `redux-thunk` middleware. This allows you to write action creators that return a function instead of an action. These functions can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.

- install `redux` and `redux-thunk`:

```
npm install --save redux redux-thunk
```

`redux-thunk.js`
```js
const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

// Action Types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Synchronous Action Creators
function increment() {
    return { type: INCREMENT };
}

function decrement() {
    return { type: DECREMENT };
}

// Asynchronous Action Creator using Thunk
function incrementAsync() {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(increment());
        }, 1000); // Delay the increment action by 1 second
    };
}

function decrementAsync() {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(decrement());
        }, 1000); // Delay the decrement action by 1 second
    };
}

// Reducer
function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

// Create a Redux store with thunk middleware
const store = createStore(
    counter,
    applyMiddleware(thunk)
);

// Display the state changes
store.subscribe(() => console.log('Current state:', store.getState()));

// Dispatch Actions
store.dispatch(incrementAsync()); // Will increment the state after 1 second
store.dispatch(incrementAsync()); // Will increment the state after another 1 second
store.dispatch(decrementAsync()); // Will decrement the state after 1 second
```

Note: Running issue (app.js works with latest, cdn, etc)

-   need degrade the versions:

```
  "dependencies": {
    "redux": "^4.1.2",
    "redux-thunk": "^2.4.1" 
  },
```

