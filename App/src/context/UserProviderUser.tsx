import { useReducer } from "react";
import Children from "../models/children.models";
import User from "../models/user.models";
import { Action, Reducer } from "../types/types";
import UserContext, { initialState } from "./UserContext";

const reducer = (state: User, action: Action) => {
	switch (action.type) {
		case "AUTH":
			return {
				...state,
				...action.payload,
			};

		case "SET_TOKEN":
			return {
				...state,
				accessToken: action.payload,
			};
		case "DATES":
			return {
				...state,
				...action.payload,
			};

		default: {
			return {
				...state,
			};
		}
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
