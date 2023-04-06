import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// --------------------------------------------------------------------

import Auth from "../models/auth.models";
import User from "../models/user.models";
export type Action =
	| { type: "SET_ID"; payload: string }
<<<<<<< HEAD
=======
	| { type: "SET_TOKEN"; payload: string }
>>>>>>> dev
	| { type: "AUTH"; payload: Auth };

export type Reducer = (state: User, action: Action) => User;

export type NavigateProp = {
	// rome-ignore lint/suspicious/noExplicitAny: <explanation>
	navigation: NativeStackNavigationProp<any, any>;
};

export type CategoryCardItemData = {
	id: number;
	title: string;
	img: string;
};

export type CategoryComponentProp = {
	data: CategoryCardItemData;
};

export type ServiceCardItemData = {
	id: number;
	title: string;
	service: string;
	location: string;
	img: string;
	rating: number;
};

export type ServiceComponentProp = {
	data: ServiceCardItemData;
};

export type TabBarComponentProp = {
	color: string;
	size: number;
	iconName: string;
};
