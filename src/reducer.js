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
