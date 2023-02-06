// HOW REDUX WORKS WITHOUT TOOLKIT? :

const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  // tuttaj mamy zbior akcji (store)
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  // po kazdym dispatchu, triggeruje ...
  const latestState = store.getState(); // .. sie ta funkcja bo jest w store.subscribe
  console.log(latestState);
};

store.subscribe(counterSubscriber);

store.dispatch({ type: "increment" });
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
