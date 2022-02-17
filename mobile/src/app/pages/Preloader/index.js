import React, { useEffect } from 'react'
import { View, Image,Text } from 'react-native'
import { Media } from '@common';
import styles from './styles';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreators from '@actioncreators'

const Preloader = (props) => {
  const { navigation, appTheme } = props;

  useEffect(() => { setTimeout(() => { navigation.navigate('MainTabs'); }, 3000) }, []);

  return (
    <View style={styles({ appTheme }).view_preloader} >
      <Image source={Media.SplashScreen} style={styles().img_splash} resizeMethod='resize' resizeMode={'contain'} />
      <Text style={styles({appTheme}).txt_welcome} >{'Welcome...'}</Text>
    </View>
  )
}

const mapStateToProps = ({ ConfigsReducer }) => ({
  appTheme: ConfigsReducer?.appTheme
})

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Preloader)
