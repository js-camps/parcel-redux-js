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
