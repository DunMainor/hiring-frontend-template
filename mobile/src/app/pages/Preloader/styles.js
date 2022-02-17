import { StyleSheet } from 'react-native'

import { Constants, Colors, Utils } from '@common'

const { width , height} = Constants

const styles = (props) => StyleSheet.create({
  img_splash: {
    alignSelf: 'center',
    height: height * 0.35,
    width: height * 0.35,
  },
  txt_welcome:{
    alignSelf: 'center',
    color: props?.appTheme === 'dark' ? Colors.White : Colors.Black,
    fontSize: Utils.scaledSize(20),
  },
  view_preloader: {
    alignContent: 'center',
    backgroundColor: props?.appTheme === 'dark' ? Colors.Black : Colors.White,
    height: '100%',
    justifyContent: 'center',
    width: '100%',
  }
})

export default styles
