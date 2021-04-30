import {
    CHANGE_HABIT_NAME,
    CHANGE_HABIT_CATEGORY,
    CHANGE_HABIT_FREQUENCY,
    CHANGE_HABIT_GOAL,
    CHANGE_HABIT_TIMELINE,
    LOAD_HABIT,
} from "../constants/habitAddConstants";
import axios from "axios";

export const changeHabitName = (input) => {
    return {
        type: CHANGE_HABIT_NAME,
        input: input,
    };
};

export const changeHabitCategory = (input) => {
    return {
        type: CHANGE_HABIT_CATEGORY,
        input: input,
    };
};

export const changeHabitFrequency = (input) => {
    return {
        type: CHANGE_HABIT_FREQUENCY,
        input: input,
    };
};

export const changeHabitGoal = (input) => {
    return {
        type: CHANGE_HABIT_GOAL,
        input: input,
    };
};

export const changeHabitTimeline = (input) => {
    return {
        type: CHANGE_HABIT_TIMELINE,
        input: input,
    };
};

export const loadHabit = (input) => {
    return {
        type: LOAD_HABIT,
        input: input
    };
};


export const addHabit = (habits) => async (dispatch) => {
    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify(habits);

    try {
        const res = await axios.post(
            "http://localhost:5000/api/habits/add",
            body,
            config
        );
        
        console.log(res.data);

    } catch (error) {
        console.log(error.response);

    }
};