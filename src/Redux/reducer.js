import React from 'react'
import { LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS } from './actionType';
import { ADD_TO_CART_ERROR, ADD_TO_CART_REQUEST, ADD_TO_CART_SUCCESS, ADD_TO_WHITE_LIST_ERROR, ADD_TO_WHITE_LIST_REQUEST, ADD_TO_WHITE_LIST_SUCCESS, GET_MENS_DATA, GET_MENS_ERROR, GET_MENS_REQUEST, GET_WOMENS_DATA, GET_WOMENS_ERROR, GET_WOMENS_REQUEST } from "./actionType"


const initialState_Login = {
    isLoading: false,
    isError: false,
    isAuth: false,
}
const mansInitialSate={
    mensData:[],
    isLoading:false,
    isError:false,
    totalMens:0
}
const womansInitialSate={
    womensData:[],
    isLoading:false,
    isError:false,
    totalWoMens:0
}


export const LoginReducer = (state = initialState_Login, action) => {
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

export const mensReducer =(state=mansInitialSate,action)=>{
   
    switch(action.type){
        case GET_MENS_REQUEST:
        return {...state,isLoading:true}
        case GET_MENS_DATA:
            return{...state,mensData:action.payload.data,totalMens:action.payload.totalMens};
            case GET_MENS_ERROR:
                return{...state,isError:true};
                default: 
                return state;
    }
}

export const womensReducer =(state=womansInitialSate,action)=>{
   
    switch(action.type){
        case GET_WOMENS_REQUEST:
        return {...state,isLoading:true}
        case GET_WOMENS_DATA:
            return{...state,mansData:action.payload};
            case GET_WOMENS_ERROR:
                return{...state,isError:true};
                default: 
                return state;
    }
}



/// cart

const cartInitialSate= {
    cart:[],
    isLoading:false,
    isError:false,
    totleCart:0
} ;

  export const cartReducer =(state=cartInitialSate,action)=>{

    switch(action.type){
      case ADD_TO_CART_REQUEST:
        return { ...state,isLoading:true};
        case ADD_TO_CART_SUCCESS:
            return {...state,cart:[...state,action.payload.data],totleCart:action.payload.totleCart};
            case ADD_TO_CART_ERROR:
             return{...state,isError:true};
             default:
                return state;
    }
  }



  const  whitelistInitialSate= {
    whitelist:[],
    isLoading:false,
    isError:false,
    totalWhitelist:0
} ;

  export const whitelistReducer =(state=whitelistInitialSate,action)=>{

    switch(action.type){
      case ADD_TO_WHITE_LIST_REQUEST:
        return { ...state,isLoading:true};
        case ADD_TO_WHITE_LIST_SUCCESS:
            return {...state,whitelist:action.payload.data,totalWhitelist:action.payload.totalWhitelist};
            case ADD_TO_WHITE_LIST_ERROR:
             return{...state,isError:true};
             default:
                return state;
    }
  }




