import {TOGGLE_MODAL, WHICH_MODAL} from '../constants/index.js'
import { LOGGED_IN_STATE } from '../constants/userConstants.js'

export const userLogin = () => {
    return {
        type: LOGGED_IN_STATE
    }
}
