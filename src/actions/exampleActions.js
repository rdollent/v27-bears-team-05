import { TOGGLE_STATE } from "../constants/exampleConstants";

/**
 * An example action. Used to export methods that can be easily called by
 * components/pages to be dispatched. Actions are a good place to handle logic in
 * which all data from all reducers needs to be accessed and make async calls using
 * thunk.
 */

export const exampleAction = () => {
    return {
        type: TOGGLE_STATE,
    };
};
