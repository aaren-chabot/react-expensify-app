import { createStore } from 'redux';

//Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

// Reducers
// 1. Reducers are pure functions
//    - output determined by input

// IE not pure function - b is a global var and may be changed elsewhere therefore not a pure function
// let a = 10;
// const add = (b) => {
//   return a + b;
// };
// Anytime a variable is used or changed outside the function it is NOT pure

// 2. NEVER change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'RESET':
      return {
        count: 0
      };
    case 'SET':
      return {
        count: action.count
      };
    default:
      return state;
  } 
};

const store = createStore(countReducer());

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(resetCount());
store.dispatch(decrementCount({ decrementBy: 10 }));
store.dispatch(setCount({ count: 101 }));

// store.dispatch({
//   type: 'INCREMENT',
//   incrementBy: 5
// });

// store.dispatch({
//   type: 'INCREMENT'
// });

// store.dispatch({
//   type: 'RESET'
// });

// store.dispatch({
//   type: 'DECREMENT',
//   decrementBy: 22
// });

// store.dispatch({
//   type: 'SET',
//   count: 101
// });
