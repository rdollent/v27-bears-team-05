import {
    STORE_CURRENT_HABIT,
    COMPLETED
} from "../constants/habitViewConstants";

import axios from "axios";

import { useSelector } from "react-redux";



export const storeCurrentHabit = (input) => {
    return {
        type: STORE_CURRENT_HABIT,
        input: input,
    };
};


// use redux thunk to dispatch actions while inside an action function
export const toggleCompleted = () => {
    return {
        type: COMPLETED
    };
};

export const storeCompleted = (habitId) => async (dispatch, getState) => {

    dispatch(toggleCompleted());

    let completed = getState().habitViewReducer.completed;

    const config = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const body = JSON.stringify({ habitId });
    // const body = habitId;

    
    completed ? 
    (async () => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/completion/add",
                body,
                config
            );

            console.log('from completion', res.data);

        } catch (error) {
            console.log(error.response);

        }
    })()
    :
    (async () => {
        try {
            const res = await axios.post(
                "http://localhost:5000/api/completion/delete",
                body,
                config
            );

            console.log('from completion', res.data);

        } catch (error) {
            console.log(error.response);

        }
    })();

};