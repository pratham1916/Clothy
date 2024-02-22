import {cartReducer, mensReducer, whitelistReducer, womensReducer} from "./reducer"
import {legacy_createStore, applyMiddleware, combineReducers} from 'redux';
import {thunk}from "redux-thunk";
import { LoginReducer } from "./reducer";

const rootReducer = combineReducers({
    mens:mensReducer,
    womens:womensReducer,
    cart:cartReducer,
    whitelist:whitelistReducer,
    login:LoginReducer
  })
 const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
 export default store;
