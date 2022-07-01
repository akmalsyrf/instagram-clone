import { UserContextProvider } from "./src/context/UserContext";
import AsyncStorageLib from '@react-native-async-storage/async-storage';

import Screens from "./src/screens/navigation";
import { setAuthToken } from './src/config/api'

//check token in localstorage
(async function checkToken() {
  const token = await AsyncStorageLib.getItem("@token")
  if (token) {
    setAuthToken(token);
  }
})()

export default function App() {
  return (
    <UserContextProvider>
      <Screens />
    </UserContextProvider>
  )
}
