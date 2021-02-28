import {TOGGLE_MODAL, WHICH_MODAL} from '../constants/modalConstants.js'


export const toggleModalAction = () => {
    return {
        type: TOGGLE_MODAL
    }
}

export const whichModalAction = ( data ) => {
    return  {
        type: WHICH_MODAL,
        data: data
    }
}
