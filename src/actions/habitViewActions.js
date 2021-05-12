import {
    STORE_CURRENT_HABIT,
    COMPLETED,
    STORE_COMPLETION
} from "../constants/habitViewConstants";

import axios from "axios";


export const storeCurrentHabit = (input) => {
    return {
        type: STORE_CURRENT_HABIT,
        input: input
    };
};


// use redux thunk to dispatch actions while inside an action function
export const toggleCompleted = () => {
    return {
        type: COMPLETED
    };
};

export const storeCompleted = (input) => {
    return {
        type: STORE_COMPLETION,
        input: input
    };
};

export const runCompleted = (habitId) => async (dispatch, getState) => {

    dispatch(toggleCompleted());

    let completed = getState().habitViewReducer.completed;

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ habitId });

    let url = '';
    completed ? url = 'add' : url = 'delete';

    try {
        const res = await axios.post(
            `http://localhost:5000/api/completion/${url}`,
            body,
            config
        );

        console.log('from completion', res.data);
        dispatch(storeCompleted(res.data));

    } catch (error) {
        console.log(error.response);
    }

};