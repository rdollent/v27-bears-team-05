import {
    STORE_CURRENT_HABIT,
    COMPLETED
} from "../constants/habitViewConstants";

export const habitViewReducer = (state = { currentHabit: {}, completed: false }, action) => {
    switch (action.type) {
        case STORE_CURRENT_HABIT:
            return {
                ...state,
                currentHabit: action.input
            };
        case COMPLETED:
            return {
                ...state,
                completed: !state.completed
            }
        default:
            return state;
    }
};
