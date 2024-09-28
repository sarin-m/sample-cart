import { createStore } from 'redux';

const initialState = {
    value: 0,
    price: 0,
};

function appReducer(prevState = initialState, action) {
    if (isNaN(initialState.value)) {
        return  {
            value: 0,
            price: 0,
        }
    }
    
    return {
        value: prevState.value + (action.value || 0),
        price: prevState.price + (action.price || 0),
    };
  }
  const store = createStore(appReducer);

export default store;