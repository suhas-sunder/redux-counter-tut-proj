import { createStore } from "redux";

const counterReducer = (stote = { counter: 0 }, action) => {
    if(action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    }

    if (action.type === '')
};

const store = createStore();
