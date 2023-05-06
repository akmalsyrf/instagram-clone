import { useContext, useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AsyncStorage from '@react-native-async-storage/async-storage';

import { UserContext } from "../context/UserContext";
import { API } from '../config/api'

import HomeScreen from "./HomeScreen";
import NewPostScreen from "./NewPostScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
import NewStoryScreen from './NewStory'
import DirectMessageScreen from "./DirectMessageScreen";
import CommentScreen from "./CommentScreen";
import ProfileScreen from "./ProfileScreen";
import SearchScreen from './SearchScreen'
import ReelsScreen from './ReelsScreen'
import ShopScreen from './ShopScreen'
import { Text, View } from "react-native";

import BottomTabs from "../components/home/BottomTabs";
const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();

const HomeTabs = () => (
  // https://reactnavigation.org/docs/bottom-tab-navigator/#tabbar
  <Bottom.Navigator initialRouteName="HomeScreen" tabBar={props => <BottomTabs {...props} />} screenOptions={({ route }) => ({
    headerShown: false,
    // tabBarStyle: ({ focused, color, size }) => color = "black",
    // tabBarIcon: ({ focused, color, size }) => color = "black",
  })}>
    <Bottom.Screen name="HomeScreen" component={HomeScreen} />
    {/* <Bottom.Screen name="NewStoryScreen" component={NewStoryScreen} /> */}
    <Bottom.Screen name="SearchScreen" component={SearchScreen} />
    <Bottom.Screen name="ReelsScreen" component={ReelsScreen} />
    <Bottom.Screen name="ShopScreen" component={ShopScreen} />
    <Bottom.Screen name="ProfileScreen" component={ProfileScreen} />
  </Bottom.Navigator>
)

const SignInStack = () => {
  const [state, dispatch] = useContext(UserContext);
  const [initialRoute, setInitialRoute] = useState(null)

  const checkUser = async () => {
    try {
      const response = await API.get("/check-auth", {
        validateStatus: (status) => {
          return status == 401 || status == 403 || status == 200;
        }
      })
      if (response.status === 200) {
        let payload = response.data.data.user;
        payload.token = await AsyncStorage.getItem("@token")
        dispatch({
          type: "USER_SUCCESS",
          payload
        });
        setInitialRoute("HomeScreen")
      } else {
        dispatch({ type: "AUTH_ERROR" });
        setInitialRoute("LoginScreen")
      }
    } catch (error) {
      dispatch({ type: "AUTH_ERROR" });
      setInitialRoute("LoginScreen")
      console.log(error);
    }
  }

  useEffect(() => {
    checkUser()
  }, [])
  useEffect(() => {
    console.log(state);
  }, [state])

  return initialRoute !== null ? (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={initialRoute} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeTabs" component={HomeTabs} />
        <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
        <Stack.Screen name="DirectMessageScreen" component={DirectMessageScreen} />
        <Stack.Screen name="CommentScreen" component={CommentScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  ) : (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ width: '100%' }}>Loading ...</Text>
    </View>
  )
}

export default SignInStack;
