import { TOGGLE_MODAL, WHICH_MODAL } from '../constants/modalConstants.js'

export const modalReducer = (state = { opened: false, which: '' }, action) => {
    switch(action.type) {
        case TOGGLE_MODAL:
            return {
                ...state, 
                opened: !state.opened
            }
        case WHICH_MODAL:
            return {
                ...state,
                which: action.data
            }
        default: 
            return state
    }
}