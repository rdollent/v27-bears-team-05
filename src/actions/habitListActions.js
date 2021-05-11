import {
    STORE_HABITS
} from "../constants/habitListConstants";

export const storeHabits = (input) => {
    return {
        type: STORE_HABITS,
        input: input,
    };
};

