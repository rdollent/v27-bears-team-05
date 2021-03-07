import {
    STORE_HABITS,
    STORE_CURRENT_HABIT
} from "../constants/habitListConstants";

export const habitListReducer = (state = { habits: [], currentHabit: {} }, action) => {
    switch (action.type) {
        case STORE_HABITS:
            return {
                ...state,
                habits: action.input,
            };
        case STORE_CURRENT_HABIT:
            return {
                ...state,
                currentHabit: action.input,
            };
        default:
            return state;
    }
};
