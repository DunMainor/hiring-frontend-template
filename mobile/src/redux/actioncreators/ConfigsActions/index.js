import * as ActionTypes from '../ActionTypes'

export const resetState = () => ({ type: ActionTypes.RESET_APP_STATE })

export const setAppTheme = (theme) => ({ type: ActionTypes.SET_APP_THEME, theme })