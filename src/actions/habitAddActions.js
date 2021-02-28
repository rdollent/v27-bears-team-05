import {
    CHANGE_HABIT_NAME,
    CHANGE_HABIT_TYPE,
    CHANGE_HABIT_FREQ,
    CHANGE_HABIT_GOAL,
    CHANGE_HABIT_DURATION,
    LOAD_HABIT,
} from "../constants/habitAddConstants";

export const changeHabitName = (input) => {
    return {
        type: CHANGE_HABIT_NAME,
        input: input,
    };
};

export const changeHabitType = (input) => {
    return {
        type: CHANGE_HABIT_TYPE,
        input: input,
    };
};

export const changeHabitFreq = (input) => {
    return {
        type: CHANGE_HABIT_FREQ,
        input: input,
    };
};

export const changeHabitGoal = (input) => {
    return {
        type: CHANGE_HABIT_GOAL,
        input: input,
    };
};

export const changeHabitDuration = (input) => {
    return {
        type: CHANGE_HABIT_DURATION,
        input: input,
    };
};

export const loadHabit = (input) => {
    return {
        type: LOAD_HABIT,
        input,
    };
};
