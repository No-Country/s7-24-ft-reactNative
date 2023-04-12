import { NavigationContainer } from "@react-navigation/native";
import { lazy, Suspense } from "react";
import "react-native-gesture-handler";
import LazyLoadingStart from "./src/components/LazyLoadingStart";
import UserProviderUser from "./src/context/UserProviderUser";

const IndexPages = lazy(() => import("./src/routes/StackNavigator"));

export default function App() {
    return (
        <UserProviderUser>
            <NavigationContainer>
                <Suspense fallback={<LazyLoadingStart />}>
                    <IndexPages />
                </Suspense>
            </NavigationContainer>
        </UserProviderUser>
    );
}
