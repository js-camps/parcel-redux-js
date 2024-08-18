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
