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
