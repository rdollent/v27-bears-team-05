import { 
    LOGGED_IN_STATE, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
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
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                loggedIn: !state.loggedIn,
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
                isAuthenticated: true,
                user: payload.id
            }
        case LOGOUT: 
            return {
                ...state,
                loggedIn: false,
                isAuthenticated: false,
            }
        default:
            return state;
    }
};
