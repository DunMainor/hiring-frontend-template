
import React, { Fragment, useEffect } from 'react'
import { FlatList, View, Text, TextInput } from "react-native";
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreators from '@actioncreators'
import { UserCard } from "@components";
import styles from './styles';

const Users = (props) => {
  const { users, filteredUsers, getUsers, getFilteredUsers, appTheme } = props;
  const [statusFilter, setStatusFilter] = React.useState('');

  useEffect(() => { getUsers() }, []);
  useEffect(() => {  getFilteredUsers(statusFilter) }, [statusFilter]);

  return (
    <View style={styles({ appTheme }).view_container} >
      <View style={styles({ appTheme }).input_container} >
        <TextInput placeholder="Filter by Status" onChangeText={setStatusFilter} style={styles({ appTheme }).input_filter} />
        <Icon type='material-community' name="filter" style={styles({ appTheme }).icon_filter} />
      </View>
      {(statusFilter.length > 0 || users?.length > 0) &&
        <FlatList
          style={styles({ appTheme }).list_container}
          data={statusFilter?.length > 0 ? filteredUsers : users}
          renderItem={({ item }) => <UserCard user={item} appTheme={appTheme} />}
          keyExtractor={(x) => x?.id}
        />
      }
    </View>
  );
}

const mapStateToProps = ({ UsersReducer, ConfigsReducer }) => ({
  users: UsersReducer?.users || [],
  filteredUsers: UsersReducer?.filteredUsers || [],
  appTheme: ConfigsReducer?.appTheme || 'light'
})

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Users)

