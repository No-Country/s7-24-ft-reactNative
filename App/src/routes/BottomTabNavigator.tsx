import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// --------------------------------------------------------------------

import {
    ArrowBackNavigatoHeader,
    LogoNavigatorHeader,
    TabBarIconNavigatorBottom,
} from "../components";
import { COLORS, ROUTES } from "../constants";
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
                tabBarActiveTintColor: COLORS.primary,
                tabBarInactiveTintColor: COLORS.tabColor,
                headerTitleAlign: "center",
                headerStyle: {
                    backgroundColor: COLORS.background,
                    borderBottomWidth: 0,
                },
                headerTitleStyle: {
                    fontSize: 20,
                    fontWeight: "500",
                    fontFamily: "Main",
                },
                tabBarStyle: {
                    backgroundColor: COLORS.white,
                    paddingBottom: 10,
                    paddingTop: 10,
                    position: "absolute",
                    bottom: 10,
                    minHeight: 68,
                    marginHorizontal: 3,
                    boxShadow: "0px 0px 23px rgba(0, 0, 0, 0.12)",
                    borderRadius: 20,
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
                }}
            />
            <Tab.Screen
                name={ROUTES.SEARCH}
                component={SearchScreen}
                options={{
                    title: "Buscar",
                    headerTitleStyle: {
                        display: "none",
                    },
                    tabBarIcon: ({ color, size }) => (
                        <TabBarIconNavigatorBottom
                            color={color}
                            iconName="Search"
                            size={size}
                        />
                    ),
                    headerLeft: () => <ArrowBackNavigatoHeader />,
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
                    headerLeft: () => <ArrowBackNavigatoHeader />,
                }}
            />
        </Tab.Navigator>
    );
}
