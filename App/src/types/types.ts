import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// --------------------------------------------------------------------

import Form from "../models/login.models";
import User from "../models/user.models";
export type Action =
    | { type: "REGISTER"; payload: Form }
    | { type: "LOGIN"; payload: Form }
    | { type: "SET_AUTHORIZATION"; payload: string }
    | { type: "SET_ID"; payload: string };

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
