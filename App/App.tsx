import { NavigationContainer } from "@react-navigation/native";
import { lazy, Suspense } from "react";
import "react-native-gesture-handler";
import { Loader } from "./src/components";
import LazyLoadingStart from "./src/components/LazyLoadingStart";
import { LoaderProvider } from "./src/context/LoaderContext";
import UserProviderUser from "./src/context/UserProviderUser";

const IndexPages = lazy(() => import("./src/routes/StackNavigator"));

export default function App() {
    return (
        <UserProviderUser>
            <LoaderProvider>
                <Loader />
                <NavigationContainer>
                    <Suspense fallback={<LazyLoadingStart />}>
                        <IndexPages />
                    </Suspense>
                </NavigationContainer>
            </LoaderProvider>
        </UserProviderUser>
    );
}
