import * as ActionTypes from '@actioncreators/ActionTypes'

export default function base(state = {}, action) {
    switch (action.type) {
        case ActionTypes.GET_USERS_REQUEST:
            case ActionTypes.GET_FILTERED_USERS_REQUEST:
            return { ...state, isLoading: true, usersRequestError: null }
        case ActionTypes.GET_USERS_FAILURE:
            case ActionTypes.GET_FILTERED_USERS_FAILURE:
            return { ...state, isLoading: false, usersRequestError: action.payload }            
        case ActionTypes.GET_USERS_SUCCESS:
            return { ...state, isLoading: false, users: action.payload }            
        case ActionTypes.GET_FILTERED_USERS_SUCCESS:
            return { ...state, isLoading: false, filteredUsers: action.payload }
        default:
            return { ...state }
    }
}
