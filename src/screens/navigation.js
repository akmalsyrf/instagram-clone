import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./HomeScreen";
import NewPostScreen from "./NewPostScreen";
import LoginScreen from "./LoginScreen";
import SignUpScreen from "./SignUpScreen";
// import NewStoryScreen from './NewStory'

const Stack = createStackNavigator();
const Bottom = createBottomTabNavigator();
const screenOptions = {
  headerShown: false,
};

const SignInStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
      {/* <Stack.Screen name="NewStoryScreen" component={NewStoryScreen} /> */}
    </Stack.Navigator>
  </NavigationContainer>
);

const HomeTabs = () => (
  <Bottom.Navigator></Bottom.Navigator>
)

export default SignInStack;
