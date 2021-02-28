import { 
    HABIT_LOAD
    } from "../constants/habitLoadConstants";
    
    
export const habitLoadReducer = ( state = {}, action ) => {
    switch (action.type) {
        case HABIT_LOAD:
            return action.input;
        default:
            return state;
    }
};
    