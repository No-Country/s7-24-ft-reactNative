import { createContext, useReducer } from "react";
import Children from "../models/children.models";
import User from "../models/user.models";
import { Action, Reducer } from "../types/types";

const initialState: User = {
	authorization: "not-authorization",
	id: "",
	email: "",
	name: "",
	password: "",
	city: "",
	country: "",
	locality: "",
	photoUrl: "",
};

export const UserContext = createContext<{
	state: User;
	dispatch: React.Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => null,
});

const reducer = (state: User, action: Action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				...action.payload,
			};

		case "REGISTER":
			return {
				...state,
				...action.payload,
			};

		case "SET_AUTHORIZATION":
			return {
				...state,
				authorization: action.payload,
			};
	}
};

const UserProviderUser = ({ children }: Children) => {
	const [state, dispatch] = useReducer<Reducer>(reducer, initialState);
	return (
		<UserContext.Provider
			value={{
				state,
				dispatch,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export default UserProviderUser;
