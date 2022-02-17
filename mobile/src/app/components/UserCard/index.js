import React from "react";
import { Image, Text, View } from "react-native";
import { Utils } from "@common";
import styles from "./styles";

const UserStartEndTime = ({ starts_at, ends_at, appTheme }) => (<Text style={styles({appTheme}).txt_start_end} >{`${Utils.getDateFormated(starts_at)} - ${Utils.getDateFormated(ends_at)}`}</Text>)

const UserStatus = ({ status, appTheme }) => (<Text style={styles({  status, appTheme }).txt_user_status}>{status}</Text>)

const UserInfo = ({ name, email, status, starts_at, ends_at, appTheme }) => (<View style={styles().view_user_info}>
  <Text style={styles({appTheme}).txt_name}>{name}</Text>
  <Text style={styles({appTheme}).txt_email}>{email}</Text>
  {starts_at && ends_at &&<UserStartEndTime starts_at={starts_at} ends_at={ends_at}  appTheme={appTheme} />}
  <UserStatus status={status} appTheme={appTheme} />
</View>)

const UserCard = ( { user: { attributes }, appTheme }) => (<View style={styles({ appTheme }).container}>
    <Image style={styles().img_avatar} source={{ uri: "https://i.pravatar.cc/300", height: 100, width: 100 }} resizeMethod={'auto'} resizeMode={'contain'} />
    <UserInfo {...attributes} appTheme={appTheme} />
  </View>)

export default UserCard;
