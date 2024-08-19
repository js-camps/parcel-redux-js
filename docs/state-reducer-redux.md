# state, reducer, redux, and redux-thunk

- `app.js` - state
```js
// Define the initial state
let value = 0;

// Function to update the displayed value
function updateDisplay() {
    document.getElementById('value').textContent = value;
}

// Function to increment the value
function increment() {
    value++;
    updateDisplay();
}

// Function to decrement the value
function decrement() {
    value--;
    updateDisplay();
}

// Attach event listeners to buttons
document.getElementById('increment').addEventListener('click', increment);
document.getElementById('decrement').addEventListener('click', decrement);

// Initialize the display
updateDisplay();
```

- `app.js` - reducer
```js
// Define action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Reducer function to handle state changes
function reducer(state, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}

// Store-like object to manage state and dispatching
const createStore = (reducer, initialState) => {
    let state = initialState;
    const getState = () => state;
    const dispatch = (action) => {
        state = reducer(state, action);
        updateDisplay();
    };
    return { getState, dispatch };
};

// Create a store with the initial value
const store = createStore(reducer, 0);

// Function to update the displayed value
function updateDisplay() {
    document.getElementById('value').textContent = store.getState();
}

// Functions to dispatch actions
function increment() {
    store.dispatch({ type: INCREMENT });
}

function decrement() {
    store.dispatch({ type: DECREMENT });
}

// Attach event listeners to buttons
document.getElementById('increment').addEventListener('click', increment);
document.getElementById('decrement').addEventListener('click', decrement);

// Initialize the display
updateDisplay();

```

- `app.js` - redux
```js
// Define the initial state
const initialState = {
    count: 0
};

// Define action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action creators
function incrementCount() {
    return { type: INCREMENT };
}

function decrementCount() {
    return { type: DECREMENT };
}

// Reducer
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

// Create Redux store
const store = Redux.createStore(counterReducer);

// Function to render the UI
function render() {
    const state = store.getState();
    document.getElementById('value').textContent = state.count;
}

// Subscribe render to the store
store.subscribe(render);
render();

// Attach event listeners to buttons
document.getElementById('increment').addEventListener('click', () => {
    store.dispatch(incrementCount());
});

document.getElementById('decrement').addEventListener('click', () => {
    store.dispatch(decrementCount());
});
```

- `app.js` - redux-thunk
```js
// Redux and Redux Thunk
const { createStore, applyMiddleware } = Redux;
const { default: thunk } = ReduxThunk;

// Define the initial state
const initialState = {
    count: 0
};

// Action types
const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

// Action creators
const incrementCount = () => ({ type: INCREMENT });
const decrementCount = () => ({ type: DECREMENT });

// Thunk action creators for asynchronous actions
function incrementAsync() {
    return function(dispatch) {
        setTimeout(() => {
            dispatch(incrementCount());
        }, 1000); // Delay action by 1 second
    };
}

function decrementAsync() {
    return function(dispatch) {
        setTimeout(() => {
            dispatch(decrementCount());
        }, 1000); // Delay action by 1 second
    };
}

// Reducer
function counterReducer(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        default:
            return state;
    }
}

// Create Redux store with thunk middleware
const store = createStore(
    counterReducer,
    applyMiddleware(thunk)
);

// Function to render the UI
function render() {
    const state = store.getState();
    document.getElementById('value').textContent = state.count;
}

// Subscribe render to the store
store.subscribe(render);
render();

// Attach event listeners to buttons for asynchronous actions
document.getElementById('increment').addEventListener('click', () => {
    store.dispatch(incrementAsync());
});

document.getElementById('decrement').addEventListener('click', () => {
    store.dispatch(decrementAsync());
});
```