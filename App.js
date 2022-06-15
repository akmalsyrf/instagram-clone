import { UserContext } from "./src/context/UserContext";
import AsyncStorage from '@react-native-async-storage/async-storage';

import Screens from "./src/screens/navigation";

//check token in localstorage
(async function checkToken() {
  if (await AsyncStorage.getItem("@token")) {
    // setAuthToken(localStorage.token);
  }
})()

export default function App() {
  return <Screens />;
}
