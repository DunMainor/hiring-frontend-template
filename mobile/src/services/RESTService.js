import reactotron from "reactotron-react-native";
import { Utils } from "@common";

export const fetchUsers = (filters = []) => fetch(Utils.applyFiltersOnURI("http://localhost:4000/api/users?", filters))
    .then((res) => res.json())
    .catch((err) => reactotron.log("Fetch Users Encountered Error: ", err));

export const fetchDevices = (filters = []) => fetch(Utils.applyFiltersOnURI("http://localhost:4000/api/devices?", filters))
    .then((res) => res.json())
    .catch((err) => reactotron.log("Fetch Devices Encountered Error: ", err));
