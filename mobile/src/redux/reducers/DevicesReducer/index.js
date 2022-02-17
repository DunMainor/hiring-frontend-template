import * as ActionTypes from '@actioncreators/ActionTypes'

export default function base(state = {}, action) {
    switch (action.type) {
        case ActionTypes.GET_DEVICES_REQUEST:
        case ActionTypes.GET_FILTERED_DEVICES_REQUEST:
            return { ...state, isLoading: true, devicesRequestError: null }
        case ActionTypes.GET_DEVICES_FAILURE:
        case ActionTypes.GET_FILTERED_DEVICES_FAILURE:
            return { ...state, isLoading: false, devicesRequestError: action?.payload }
        case ActionTypes.GET_DEVICES_SUCCESS:
            return { ...state, isLoading: false, devices: action?.payload }
        case ActionTypes.GET_FILTERED_DEVICES_SUCCESS:
            return { ...state, isLoading: false, filteredDevices: action?.payload }
        default:
            return { ...state }
    }
}
