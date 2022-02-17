import * as ConfigsActions from './ConfigsActions'
import * as UsersActions from './UsersActions'
import * as DevicesActions from './DevicesActions'

const ActionCreators = {
    ...ConfigsActions, ...UsersActions, ...DevicesActions
}

export default ActionCreators
