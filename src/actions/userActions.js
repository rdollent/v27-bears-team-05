import {TOGGLE_MODAL, WHICH_MODAL} from '../constants/modalConstants.js'
import { LOGGED_IN_STATE } from '../constants/userConstants.js'

export const userLogin = () => {
    return {
        type: LOGGED_IN_STATE
    }
}
