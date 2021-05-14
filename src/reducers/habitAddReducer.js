import {
    CHANGE_HABIT_NAME,
    CHANGE_HABIT_CATEGORY,
    CHANGE_HABIT_FREQUENCY,
    CHANGE_HABIT_GOAL,
    CHANGE_HABIT_TIMELINE,
    LOAD_HABIT,
} from "../constants/habitAddConstants";

export const habitAddReducer = (state = { mode: "", name: "", category: "", frequency: "", goal: "", timeline: 0 }, action) => {
    switch (action.type) {
        case CHANGE_HABIT_NAME:
            return {
                ...state,
                name: action.input
            };
        case CHANGE_HABIT_CATEGORY:
            return {
                ...state,
                category: action.input
            };
        case CHANGE_HABIT_FREQUENCY:
            return {
                ...state,
                frequency: action.input
            };
        case CHANGE_HABIT_GOAL:
            return {
                ...state,
                goal: action.input
            };
        case CHANGE_HABIT_TIMELINE:
            return {
                ...state,
                timeline: action.input
            };
        case LOAD_HABIT:
            return {
                ...state,
                mode: action.input.mode,
                name: action.input.name,
                category: action.input.category,
                frequency: action.input.frequency,
                goal: action.input.goal,
                timeline: action.input.timeline
            };
        default:
            return state;
    }
};
