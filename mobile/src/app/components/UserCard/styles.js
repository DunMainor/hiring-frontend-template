import { StyleSheet } from 'react-native'

import { Constants, Colors, Utils } from '@common'

const { width, height } = Constants
const statusColors = { current: "#C5F6A7", upcoming: "#F4F6A7" };

const styles = (props) => StyleSheet.create({
    container: {
        alignSelf: 'center',
        backgroundColor: props?.appTheme === 'dark' ? Colors.DarkOverlay: Colors.OffWhite,
        borderRadius: width * .015,
        flexDirection: "row",
        marginVertical: height * .008,
        padding: height * .02,
        width: width * .95,
    },
    img_avatar:{
        borderRadius: width*.15,
        flex:3,
        height: width*.35,
        width: width*.35
    },
    txt_email: {
        color: Colors.Gray,
        fontSize: Utils.scaledSize(16),
        fontStyle: 'italic',
        fontWeight: '600',
    },
    txt_name: {
        color: props?.appTheme === 'dark' ? Colors.OffWhite: Colors.DarkGray,
        fontSize: Utils.scaledSize(28),
        fontWeight: '900',
    },
    txt_start_end: {
        color: Colors.LightGray,
        fontSize: Utils.scaledSize(18),
        fontWeight: '700',
    },
    txt_user_status: {
        alignSelf: 'flex-end',
        backgroundColor: statusColors[props?.status] || Colors.White,
        borderRadius:height * .015,
        height: height * .03,
        paddingHorizontal: width * .02,
        textAlign: 'center',
        width: width * .2,
    },
    view_user_info: {
        flexDirection: "column",
        flex:7,
        justifyContent:'space-evenly',
        paddingHorizontal: width * .02
    }
});

export default styles