# redux-js

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

## Running the Example:

### Running this project with Node

```
node src/redux.js
```


### Running this project with parcle

This project is set up with [Parcel Bundler](https://parceljs.org/), an npm package
that compiles our frontend assets and comes with an integrated development server.

The dev server runs on port `1234` by default, but will use another if `1234` is
being used by another application.

- Clone the repo.
- Navigate into the project folder.
- Run `npm i` to download the project's dependencies listed in the `package.json`.
- Run `npm start` to compile the project and spin up a dev server on `http://localhost:1234`.

- Add `"start"` scripts to the `package.json` file  

```
"scripts": {
    "start": "node src/index.html"
},
```

