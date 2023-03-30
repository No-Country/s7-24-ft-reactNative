import Form from "../models/login.models";
import User from "../models/user.models";
export type Action =
	| { type: "REGISTER"; payload: Form }
	| { type: "LOGIN"; payload: Form }
	| { type: "SET_AUTHORIZATION"; payload: string };

export type Reducer = (state: User, action: Action) => User;
