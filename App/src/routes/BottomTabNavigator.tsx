import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image } from "react-native";
import { COLORS, ROUTES } from "../constants";

// --------------------------------------------------------------------

import {
  ArrowBackNavigatoHeader,
  LogoNavigatorHeader,
  MenuNavigatorHeader,
  TabBarIconNavigatorBottom,
} from "../components";
import {
  HomeScreen,
  MessagesScreen,
  ProfileScreen,
  SearchScreen,
} from "../pages";

// --------------------------------------------------------------------

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.tabColor,
        tabBarInactiveTintColor: COLORS.white,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontSize: 20,
          fontWeight: "500",
        },
        tabBarStyle: {
          backgroundColor: COLORS.bottomBar,
          paddingBottom: 10,
          paddingTop: 10,
          position: "absolute",
          bottom: 0,
          height: 80,
        },
      }}
    >
      <Tab.Screen
        name={ROUTES.HOME_TAB}
        component={HomeScreen}
        options={{
          title: "Home",
          headerTitleStyle: {
            display: "none",
          },
          tabBarIcon: ({ color, size }) => (
            <TabBarIconNavigatorBottom
              color={color}
              iconName="Home"
              size={size}
            />
          ),
          headerLeft: () => <LogoNavigatorHeader />,
          headerRight: () => <MenuNavigatorHeader />,
        }}
      />
      <Tab.Screen
        name={ROUTES.SEARCH}
        component={SearchScreen}
        options={{
          title: "Buscar",
          tabBarIcon: ({ color, size }) => (
            <TabBarIconNavigatorBottom
              color={color}
              iconName="Search"
              size={size}
            />
          ),
        }}
      />
      <Tab.Screen
        name={ROUTES.PROFILE}
        component={ProfileScreen}
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <TabBarIconNavigatorBottom
              color={color}
              iconName="Profile"
              size={size}
            />
          ),
          headerLeft: () => <ArrowBackNavigatoHeader />,
          headerRight: () => <MenuNavigatorHeader />,
        }}
      />
      <Tab.Screen
        name={ROUTES.MESSAGES}
        component={MessagesScreen}
        options={{
          title: "Mensajes",
          headerTitle: "Chat",
          tabBarIcon: ({ color, size }) => (
            <TabBarIconNavigatorBottom
              color={color}
              iconName="Messages"
              size={size}
            />
          ),
          headerLeft: () => {
            return (
              <Image
                style={{ width: 30, height: 29, marginLeft: 24 }}
                source={require("../assets/icons/UserIcon.svg")}
              />
            );
          },
          headerRight: () => <MenuNavigatorHeader />,
        }}
      />
    </Tab.Navigator>
  );
}
