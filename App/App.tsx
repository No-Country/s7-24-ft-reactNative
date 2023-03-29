import { NavigationContainer } from "@react-navigation/native";
import { lazy, Suspense } from "react";
import LazyLoadingStart from "./src/components/LazyLoadingStart";
import UserProviderUser from "./src/context/UserProviderUser";

const IndexPages = lazy(() => import("./src/pages/index/Index"));

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
