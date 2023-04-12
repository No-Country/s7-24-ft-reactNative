import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// --------------------------------------------------------------------

import Auth from "../models/auth.models";
import User from "../models/user.models";
import Dates from "../models/datesUsers.models";
export type Action =
	| { type: "SET_ID"; payload: string }
	| { type: "SET_TOKEN"; payload: string }
	| { type: "AUTH"; payload: Auth }
	| { type: "DATES"; payload: Dates };

export type Reducer = (state: User, action: Action) => User;

export type NavigateProp = {
    navigation: NativeStackNavigationProp<any, any>;
};

export type CategoryCardItemData = {
    name: string;
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

export type TabBarComponentProp = {
    color: string;
    size: number;
    iconName: string;
};
