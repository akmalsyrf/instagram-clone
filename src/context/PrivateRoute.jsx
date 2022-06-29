import { useContext } from "react";
import { UserContext } from "./UserContext";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

export const PrivateRoute = ({ component: Component, ...rest }, props) => {
	console.log("Component", Component);
	console.log("Rest", { ...rest });

	const [state] = useContext(UserContext);
	const navigation = useNavigation();
	return (
		<>
			{/* <Route {...rest} render={(props) => (state.isLogin ? <Component {...props} /> : <Redirect to="/home" />)} /> */}
			<Component {...props} />
		</>
	);
};
