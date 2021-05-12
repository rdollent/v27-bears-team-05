import {
    STORE_CURRENT_HABIT,
    COMPLETED,
    STORE_COMPLETION
} from "../constants/habitViewConstants";

export const habitViewReducer = (state = { currentHabit: {}, completed: false, dates: [] }, action) => {
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
        case STORE_COMPLETION:
            return {
                ...state,
                dates: action.input
            }
        default:
            return state;
    }
};
