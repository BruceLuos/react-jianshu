import {createStore,compose,applyMiddleware} from 'redux'
import reducer from './reduces'



// 同时使用redux tool和thunk中间件
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const enhancer = composeEnhancers(
    applyMiddleware()
    // other store enhancers if any
  );
const store = createStore(reducer, enhancer);
export default store