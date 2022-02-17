import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from '@reducers';
import { Preloader } from '@pages';
import App from './App';
import reactotron from 'reactotron-react-native';

reactotron.log("Root: ", store,persistor);

const Root = () => (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App {...this.props} />
        </PersistGate>
      </Provider>
);

export default Root;
