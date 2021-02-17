import { LOGGED_IN_STATE } from "../constants/userConstants";

export const userReducer = (state = { loggedIn: false }, action) => {
    switch (action.type) {
        case LOGGED_IN_STATE:
            console.log( action )
            return {
                ...state,
                loggedIn: !state.loggedIn,
            };
        default:
            return state;
    }
};
