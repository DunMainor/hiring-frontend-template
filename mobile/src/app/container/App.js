import React, { useEffect } from 'react'
import { StatusBar, useColorScheme, } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreators from '@actioncreators'

import Router from './Router'
import reactotron from 'reactotron-react-native';
import { Colors } from '@common';

const App = (props) => {
  const { setAppTheme, appTheme, } = props
  const systemTheme = useColorScheme()
  useEffect(() => reactotron.log("App Theme: ", props), []);
  useEffect(() => { setAppTheme(appTheme || systemTheme || 'light') }, []);

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={appTheme === 'dark' ? 'light-content' : 'dark-content'} backgroundColor={appTheme === 'dark' ? Colors.Black : Colors.White} />
      <Router appTheme={appTheme} />
    </SafeAreaProvider>
  )
}
const mapStateToProps = ({ ConfigsReducer }) => ({
  appTheme: ConfigsReducer?.appTheme
})

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)