import {
    STORE_HABITS,
    STORE_CURRENT_HABIT
} from "../constants/habitListConstants";

export const storeHabits = (input) => {
    return {
        type: STORE_HABITS,
        input: input,
    };
};
