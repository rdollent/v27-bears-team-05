import { TOGGLE_STATE } from "../constants/exampleConstants";

/**
 * An example reducer. Starts off with an initial state that is placed in store.js.
 * It will change the state depending on action type (which we only have one constant),
 * TOGGLE_STATE, and any additional data stored in the action's payload.
 */

export const exampleReducer = (state = { toggle: false }, action) => {
    switch (action.type) {
        case TOGGLE_STATE:
            return {
                ...state,
                toggle: !state.toggle,
            };
        default:
            return state;
    }
};
