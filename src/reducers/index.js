import { TOGGLE_MODAL } from '../constants/index.js'

export const modalReducer = (state = { toggleModal: false }, action) => {
    switch(action.type) {
        case TOGGLE_MODAL:
            return {
                ...state, 
                toggleModal: !payload
            }
        default: 
            return state
    }
}