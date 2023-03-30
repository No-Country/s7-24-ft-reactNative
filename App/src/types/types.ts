import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// --------------------------------------------------------------------

export type NavigateProp = {
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
