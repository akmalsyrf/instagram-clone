import { useState, useEffect, useContext } from "react";
import { Text } from "react-native";
import { io } from "socket.io-client";
import AsyncStorageLib from "@react-native-async-storage/async-storage";

import { UserContext } from "../context/UserContext";
import { SOCKET_URL } from "../config/variable";

let socket;
export default function DirectMessageScreen() {
	//contact selected, list contacts, and messages
	const [contact, setContact] = useState(null);
	const [contacts, setContacts] = useState([]);
	const [messages, setMessages] = useState([]);

	const [state] = useContext(UserContext);
	useEffect(async () => {
		socket = io(SOCKET_URL, {
			auth: {
				token: await AsyncStorageLib.getItem("@token"),
			},
			query: {
				id: state.user.id,
			},
		});
		// define corresponding socket listener
		socket.on("new message", () => {
			console.log("contact", contact);
			console.log("triggered", contact?.id);
			socket.emit("load messages", contact?.id);
		}); // listen error sent from server
		socket.on("connect_error", (err) => {
			console.error(err.message); // not authorized
		});
		loadContacts();
		loadMessages();

		return () => {
			socket.disconnect();
		};
	}, [messages]);

	const loadContacts = () => {};
	const loadMessages = () => {};
	return <Text>DirectMessageScreen</Text>;
}
