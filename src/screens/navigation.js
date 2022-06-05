import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./HomeScreen";
import NewPostScreen from "./NewPostScreen";
import LoginScreen from "./LoginScreen";

const Stack = createStackNavigator();
const screenOptions = {
  headerShown: false,
};

const SignInStack = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="LoginScreen" screenOptions={screenOptions}>
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="NewPostScreen" component={NewPostScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default SignInStack;
