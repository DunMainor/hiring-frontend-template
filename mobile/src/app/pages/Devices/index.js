
import React, {  useEffect } from 'react'
import { FlatList, TextInput, View, Text } from "react-native";
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import ActionCreators from '@actioncreators'
import { DeviceCard } from "@components";
import styles from './styles';

const Devices = (props) => {
  const {appTheme, devices, filteredDevices, getDevices, getFilteredDevices } = props;
  const [nameFilter, setNameFilter] = React.useState('');
  useEffect(() => { getDevices() }, []);
  useEffect(() => { getFilteredDevices(nameFilter) }, [nameFilter]);

  return (
    <View style={styles({ appTheme }).view_container} >
      <View style={styles({ appTheme }).input_container} >
        <TextInput placeholder="Filter by Name" onChangeText={setNameFilter} style={styles({ appTheme }).input_filter} />
        <Icon type='material-community' name="filter" style={styles({ appTheme }).icon_filter} />
      </View>
      {(nameFilter.length > 0 || devices?.length > 0) &&
        <FlatList
          style={styles().list_container}
          data={nameFilter?.length > 0 ? filteredDevices : devices}
          renderItem={({ item }) => <DeviceCard device={item} appTheme={appTheme} />}
          keyExtractor={(x) => x?.id}
        />}
    </View>
  );
}

const mapStateToProps = ({ DevicesReducer, ConfigsReducer }) => ({
  devices: DevicesReducer?.devices || [],
  filteredDevices: DevicesReducer?.filteredDevices || [],
  appTheme: ConfigsReducer?.appTheme || 'light'
})

const mapDispatchToProps = (dispatch) => bindActionCreators(ActionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Devices)

