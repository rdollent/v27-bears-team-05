import { 
    HABIT_LOAD
    } from "../constants/habitLoadConstants";


export const loadHabit = (input) => {
  return {
    type: HABIT_LOAD,
    input: input
  }
};