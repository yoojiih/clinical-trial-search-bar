import { applyMiddleware, combineReducers, createStore } from 'redux';
import { logger, thunk } from './middleware';
import recommendationReducer from './recommendation';

// make root reducer from slice reducers
const rootReducer = combineReducers({
  recommendation: recommendationReducer,
});

// make store from reducers
const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
