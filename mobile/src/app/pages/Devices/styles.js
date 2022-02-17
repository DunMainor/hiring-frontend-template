import { StyleSheet } from 'react-native'

import { Constants, Colors, Utils } from '@common'

const { width, height } = Constants

const styles = (props) => StyleSheet.create({
    icon_filter: {
        backgroundColor: props?.appTheme === 'dark' ? Colors.LightGray : Colors.Gray,
        borderBottomRightRadius: height * .015,
        borderTopRightRadius: height * .015,
        color: props?.appTheme === 'dark' ? Colors.LightGray : Colors.Gray,
        fontSize: Utils.scaledSize(18),
        height: height * .06,
        justifyContent: 'center',
        width: width * .1,
    },
    input_container: {
        alignItems: 'center',
        backgroundColor: props?.appTheme === 'dark' ? Colors.DarkOverlay: Colors.LightGray,
        flexDirection: 'row',
        height: height * .065,
        justifyContent: 'center',
        marginVertical: height * .015,
        width,
    },
    input_filter: {
        alignSelf: 'center',
        backgroundColor: props?.appTheme === 'dark' ? Colors.LightGray: Colors.LightGray,
        borderBottomLeftRadius: height * .015,
        borderTopLeftRadius: height * .015,
        color: props?.appTheme === 'dark' ? Colors.DarkGray : Colors.DarkGray,
        height: height * .06,
        paddingHorizontal: width * .025,
        width: width * .85,
    },
    list_container: {
        width,
    },
    view_container: {
        backgroundColor: props?.appTheme === 'dark' ? Colors.DarkBackground: Colors.LightBackground,
        flex: 1,
    },
})

export default styles