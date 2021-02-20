import { LOGGED_IN_STATE } from "../constants/userConstants";

export const userReducer = (state = { loggedIn: false }, action) => {
    switch (action.type) {
        case LOGGED_IN_STATE:
            return {
                ...state,
                loggedIn: !state.loggedIn,
            };
        default:
            return state;
    }
};
