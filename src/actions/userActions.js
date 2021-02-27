import { 
    LOGGED_IN_STATE, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    USER_LOADED, 
    LOGOUT
} from '../constants/userConstants.js'
import axios from 'axios'
import setAuthToken from '../utils/setAuthToken'

export const userLogin = () => {
    return {
        type: LOGGED_IN_STATE
    }
}

export const loadUser = () => async dispatch => {
    if(localStorage.token) {
        setAuthToken(localStorage.token)

        try {
            const res = await axios.get('http://localhost:5000/api/user/')
    
            dispatch({
                type: USER_LOADED,
                payload: res.data
            })
        } catch (error) {
            console.error(error)
            // dispatch error
        }
    } else {
        // dispatch error
        console.log("token doesn't exist")
    }
}

export const login = (username, password) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    const body = JSON.stringify({ username, password })

    try {
        const res = await axios.post('http://localhost:5000/api/user/login', body, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())
    } catch (error) {
        console.log(error.response)

        dispatch({
            type: LOGIN_FAIL
        })
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}
