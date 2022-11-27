import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    CLEAR_ERRORS,
    LOGOUT_SUCCESS,
    LOGOUT_FAIL
} from "../constants/userConstants"


export const authReducer = (state = { user: {} }, action) => {
    switch (action.type) { 

        case LOGIN_REQUEST:        
            return {
                loading: true,
                isAuthenticated: false
            }
        case LOGOUT_SUCCESS:
            return{
                loading:false,
                isAuthenticated:false,
                user:null
            }

        case LOGOUT_FAIL:
            return{
                ...state,
                error: action.payload
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                isAuthenticated: true,
                user: action.payload
            }
        case LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                isAuthenticated: false,
                user: null,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state 
            
        
    }
  
}


