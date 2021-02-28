import {
    CHANGE_HABIT_NAME,
    CHANGE_HABIT_TYPE,
    CHANGE_HABIT_FREQ,
    CHANGE_HABIT_GOAL,
    CHANGE_HABIT_DURATION,
    LOAD_HABIT,
} from "../constants/habitAddConstants";

export const habitAddReducer = (state = { name: "", type: "", freq: "", goal: "", duration: "" }, action) => {
    switch (action.type) {
        case CHANGE_HABIT_NAME:
            return {
                ...state,
                name: action.input,
            };
        case CHANGE_HABIT_TYPE:
            return {
                ...state,
                type: action.input,
            };
        case CHANGE_HABIT_FREQ:
            return {
                ...state,
                freq: action.input,
            };
        case CHANGE_HABIT_GOAL:
            return {
                ...state,
                goal: action.input,
            };
        case CHANGE_HABIT_DURATION:
            return {
                ...state,
                duration: action.input,
            };
        case LOAD_HABIT:
            return {
                ...state,
                name: action.input.name,
                type: action.input.type,
            };
        default:
            return state;
    }
};
