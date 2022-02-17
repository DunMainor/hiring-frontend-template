import * as ActionTypes from '@actioncreators/ActionTypes'

export default function base(state = {}, action) {
    switch (action.type) {
        case ActionTypes.RESET_APP_STATE:
            return {
                type: action?.type,
            }
        case ActionTypes.SET_APP_THEME:
            return {
                ...state,
                type: action?.type,
                appTheme: action?.theme,
            }
        default:
            return { ...state }
    }
}
