import {
    STORE_HABITS
} from "../constants/habitListConstants";

export const habitListReducer = (state = { habits: [] }, action) => {
    switch (action.type) {
        case STORE_HABITS:
            return {
                ...state,
                habits: action.input
            };
        default:
            return state;
    }
};
