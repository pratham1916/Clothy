import React from 'react'
import { combineReducers } from 'redux';
import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from './actionType';

const initialState_Login = {
    isLoading: false,
    isError: false,
    isAuth: false,
}
const initialState_Mens = {
    isLoading: false,
    isError: false,
    isAuth: false,
    Mens: []
}

const LoginReducer = (state = initialState_Login, action) => {
    switch (action.type) {
        case LOGIN_LOADING:
            return { ...state, isLoading: true, isError: false }
        case LOGIN_SUCCESS:
            return { ...state, isLoading: false, isError: false, isAuth: true }
        case LOGIN_FAIL:
            return { ...state, isLoading: false, isError: true }
        default:
            return state;
    }
}

// const MensReducer = (state=initialState_Mens,action) => {
//     switch (action.type) {
//         case value:
            
//             break;
    
//         default:
//             break;
//     }
// }

const rootReducer = combineReducers({
    login: LoginReducer
    // mens:MensReducer
})

export { rootReducer }
