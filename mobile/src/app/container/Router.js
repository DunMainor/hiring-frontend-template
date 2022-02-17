import React from 'react'
import { Text, useWindowDimensions, View } from 'react-native';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Colors, Utils } from '@common'

// Pages
import {
  Preloader,
  Users,
  Devices
} from '@pages'

const Stack = createStackNavigator()
const Tabs = createMaterialTopTabNavigator()

export default function Router(rootProps) {
  const navigationRef = useNavigationContainerRef()
  const { width, height } = useWindowDimensions()

  const { appTheme = 'dark' } = rootProps
  const darkTheme = appTheme === 'dark'

  const tabsScreenOptions = ({ route, navigation }) => ({ headerShown: false, })

  const tabBarOptions = ({ route }) => ({
    headerShown: false,
    tabBarLabel: ({ focused }) => {
      const labelContainerStyle = {
        backgroundColor: focused ? darkTheme ? Colors.DarkOverlay : Colors.LightGray : darkTheme ? Colors.DarkOverlay : Colors.LightGray,
        width: width * 0.25,
        elevation: 3,
        width: width * .48,
        height: height * .05,
        justifyContent: 'center',
        borderRadius: height * .015,
      }
      const labelStyle = {
        fontSize: focused ? Utils.scaledSize(18) : Utils.scaledSize(14),
        color: focused ? darkTheme ? Colors.OffWhite : Colors.Gray : darkTheme ? Colors.LightGray : Colors.Gray,
        textAlign: 'center',
        fontWeight: focused ? '700' :'600',
      }
      switch (route?.name) {
        case 'UsersStack': return <View style={labelContainerStyle}><Text style={labelStyle}>{'Users'}</Text></View>
        case 'DevicesStack': return <View style={labelContainerStyle}><Text style={labelStyle}>{'Devices'}</Text></View>
        default: return ''
      }
    },
    tabBarIndicatorStyle: { height: 0, },
    tabBarStyle: { backgroundColor: darkTheme ? Colors.DarkBackground : Colors.LightBackground,  justifyContent:'space-between',  },
  })

  const SplashStack = () => (
    <Stack.Navigator screenOptions={{}} >
      <Stack.Screen component={Preloader} name='Preloader' options={{ headerShown: false }} />
    </Stack.Navigator>
  )

  const UsersStack = () => (
    <Stack.Navigator screenOptions={{}} >
      <Stack.Screen component={Users} name='Users' options={tabsScreenOptions} />
    </Stack.Navigator>
  )

  const DevicesStack = () => (
    <Stack.Navigator screenOptions={{}} >
      <Stack.Screen component={Devices} name='Devices' options={tabsScreenOptions} />
    </Stack.Navigator>
  )

  const MainTabs = () => (
    <Tabs.Navigator
      initialRouteName={'DevicesStack'}
      backBehavior={'initialRoute'}
      screenOptions={tabBarOptions}
      initialLayout={{ width, height }}
    >
      <Tabs.Screen component={DevicesStack} name='DevicesStack' options={{}} />
      <Tabs.Screen component={UsersStack} name='UsersStack' options={{}} />
    </Tabs.Navigator>
  )

  return (
    <NavigationContainer ref={navigationRef} >
      <Stack.Navigator initialRouteName='SplashStack' screenOptions={{ headerShown: false }} >
        <Stack.Screen component={SplashStack} name='SplashStack' />
        <Stack.Screen component={MainTabs} name={'MainTabs'} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
