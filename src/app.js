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
