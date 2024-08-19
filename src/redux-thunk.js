import { createStore, applyMiddleware } from 'redux';
import * as ReduxThunk from 'redux-thunk';
const thunk = ReduxThunk.thunk; // Correctly reference the `thunk` middleware function

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

// Asynchronous Action Creators using Thunk
function incrementAsync() {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(increment());
        }, 1000); // Delays the increment action by 1 second
    };
}

function decrementAsync() {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(decrement());
        }, 1000); // Delays the decrement action by 1 second
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
    applyMiddleware(thunk) // Applying the thunk middleware correctly
);

// Subscribe to state changes
store.subscribe(() => console.log('Current state:', store.getState()));

// Dispatching Actions
store.dispatch(incrementAsync()); // Will increment the state after 1 second
store.dispatch(incrementAsync()); // Will increment the state after another 1 second
store.dispatch(decrementAsync()); // Will decrement the state after 1 second
