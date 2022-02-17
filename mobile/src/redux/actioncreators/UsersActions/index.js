import * as ActionTypes from '../ActionTypes'
import { fetchUsers } from "@services/RESTService"

export const getUsers = () => (dispatch) => {
    dispatch({ type: ActionTypes.GET_USERS_REQUEST })
    fetchUsers()
        .then((res) => dispatch({ type: ActionTypes.GET_USERS_SUCCESS, payload: res?.data }))
        .catch((err) => dispatch({ type: ActionTypes.GET_USERS_FAILURE, payload: err }))
}

export const getFilteredUsers = (status="") => (dispatch) => {
    dispatch({ type: ActionTypes.GET_FILTERED_USERS_REQUEST })
    fetchUsers([{ criteria: "status", value: status }])
        .then((res) => dispatch({ type: ActionTypes.GET_FILTERED_USERS_SUCCESS, payload: res?.data }))
        .catch((err) => dispatch({ type: ActionTypes.GET_FILTERED_USERS_FAILURE, payload: err }))
}