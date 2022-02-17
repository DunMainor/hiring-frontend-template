import * as ActionTypes from '../ActionTypes'
import { fetchDevices } from "@services/RESTService"

export const getDevices = () => (dispatch) => {
    dispatch({ type: ActionTypes.GET_DEVICES_REQUEST })
    fetchDevices()
        .then((res) => dispatch({ type: ActionTypes.GET_DEVICES_SUCCESS, payload: res?.data }))
        .catch((err) => dispatch({ type: ActionTypes.GET_DEVICES_FAILURE, payload: err }))
}

export const getFilteredDevices = (name="") => (dispatch) => {
    dispatch({ type: ActionTypes.GET_FILTERED_DEVICES_REQUEST })
    fetchDevices([{ criteria: "name", value: name }])
        .then((res) => dispatch({ type: ActionTypes.GET_FILTERED_DEVICES_SUCCESS, payload: res?.data }))
        .catch((err) => dispatch({ type: ActionTypes.GET_FILTERED_DEVICES_FAILURE, payload: err }))
}