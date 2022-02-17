import { StyleSheet } from 'react-native'

import { Constants, Colors, Utils } from '@common'

const { width, height } = Constants
const statusColors = { current: "#C5F6A7", upcoming: "#F4F6A7" };

const styles = (props) => StyleSheet.create({
    img_avatar:{
        borderRadius: width*.15,
        height: width*.3,
        width: width*.3
    },
    switch_lock_state: {
        color: Colors.Red,
    },
    txt_device_status: {
        alignSelf: 'flex-end',
        backgroundColor: statusColors[props?.status] || Colors.White,
        borderRadius:height * .015,
        height: height * .03,
        paddingHorizontal: width * .02,
        textAlign: 'center',
        width: width * .2,
    },
    txt_lock_state: {
        color: props?.isLocked?  Colors.WhatsAppGreen: Colors.Red,
        fontSize: Utils.scaledSize(25),
        fontWeight: '600',
        paddingLeft: width * .02,
    },
    txt_model: {
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
    view_container: {
        alignSelf: 'center',
        backgroundColor: props?.appTheme === 'dark' ? Colors.DarkOverlay: Colors.OffWhite,
        borderRadius: width * .015,
        flexDirection: "row",
        marginVertical: height * .008,
        padding: height * .02,
        width: width * .95,
    },
    view_device_info: {
        flexDirection: "column",
        justifyContent:'space-evenly',
        paddingHorizontal: width * .02
    },
    view_device_lock_state: {
        flexDirection: "row",
        justifyContent: 'space-between',
        width: width * .55,
    },
    view_lock_state: {
        alignItems: 'center',
        flexDirection: "row",
        justifyContent: 'space-evenly',
        paddingHorizontal: width * .02,
    },
});

export default styles