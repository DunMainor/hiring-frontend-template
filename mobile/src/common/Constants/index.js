import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const Constants = {
  width,
  height,
  Routes: {
    Intro: 'Intro',
  },
  Pages: {
    Preloader: 'Preloader',
    Users: 'Users',
    Devices: 'Devices',
  },
}
export default Constants
