import {
    combineReducers, createStore, applyMiddleware, compose,
} from 'redux'
import { persistReducer, persistStore } from 'redux-persist'
import hardSet from 'redux-persist/es/stateReconciler/hardSet';
import AsyncStorage from '@react-native-community/async-storage';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reactotronRedux } from 'reactotron-redux';
import Reactotron from 'reactotron-react-native';

import UsersReducer from './UsersReducer'
import ConfigsReducer from './ConfigsReducer'
import DevicesReducer from './DevicesReducer'

const storage = AsyncStorage
const middleWare = [thunk];
const config = {
    storage,
    key: 'rootReducer',
    stateReconciler: hardSet,
    whitelist: ['UsersReducer', 'ConfigsReducer', 'DevicesReducer',],
}

const persistedReducers = persistReducer(
    config,
    combineReducers({
        UsersReducer,
        ConfigsReducer,
        DevicesReducer,
    }),
)

if (__DEV__) {
    Reactotron.setAsyncStorageHandler(AsyncStorage)
        .configure({ port: 9090 })
        .useReactNative()
        .use(reactotronRedux())
        .connect()
        .clear()
}

const composer = __DEV__ ? composeWithDevTools(applyMiddleware(...middleWare), Reactotron.createEnhancer()) : compose(applyMiddleware(...middleWare));

export const store = createStore(persistedReducers, undefined, composer);
export const persistor = persistStore(store);
