import { createContext } from "react";
import User from "../models/user.models";
import { Action } from "../types/types";

export const initialState: User = {
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

const UserContext = createContext<{
	state: User;
	dispatch: React.Dispatch<Action>;
}>({
	state: initialState,
	dispatch: () => null,
});

export default UserContext;
