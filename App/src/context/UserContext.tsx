import { createContext } from "react";
import User from "../models/user.models";
import { Action } from "../types/types";

export const initialState: User = {
	authorization: "not-authorization",
	id: "",
	email: "",
	name: "",
	city: "",
	country: "",
	locality: "",
	photoUrl: "",
	address: "",
	numberAddress: 0,
	service: "",
	descriptionService: "",
	moreInformation: "",
	phone: 0,
	whatsApp: 0,
};

const UserContext = createContext<{
    state: User;
    dispatch: React.Dispatch<Action>;
}>({
    state: initialState,
    dispatch: () => null,
});

export default UserContext;
