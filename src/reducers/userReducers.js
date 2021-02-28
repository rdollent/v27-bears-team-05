import { 
    LOGGED_IN_STATE, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    REGISTER_SUCCESS, 
    REGISTER_FAIL,
    USER_LOADED, 
    LOGOUT 
} from "../constants/userConstants";

export const userReducer = (state = { loggedIn: false, isAuthenticated: false, user: null }, action) => {
    const {type, payload} = action
    
    switch (type) {
        case LOGGED_IN_STATE:
            return {
                ...state,
                loggedIn: !state.loggedIn,
            };
        case REGISTER_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                loggedIn: true,
                isAuthenticated: true,
            }
        case REGISTER_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated: false,
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                loggedIn: true,
                isAuthenticated: true,
            }
        case LOGIN_FAIL:
            localStorage.removeItem('token')
            return {
                ...state,
                isAuthenticated: false,
            }
        case USER_LOADED:
            return {
                ...state,
                loggedIn: true,
                isAuthenticated: true,
                user: payload._id
            }
        case LOGOUT: 
            localStorage.removeItem('token')
            return {
                ...state,
                loggedIn: !state.loggedIn,
                isAuthenticated: false,
                user: null
            }
        default:
            return state;
    }
};
