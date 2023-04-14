import { useContext, useEffect, useState } from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
// --------------------------------------------------------------------

import { onAuthStateChanged } from "firebase/auth";
import { CategoryCard, SearchBar, ServiceCard } from "../../components";
import { COLORS } from "../../constants";
import UserContext from "../../context/UserContext";
import { getCategories } from "../../controllers/categories.controller";
import { getServices } from "../../controllers/services.controller";
import { FirebaseGetAuth } from "../../firebase/app";
import CategoryModel from "../../models/category.models";
import ServiceModel from "../../models/services.models";
import { NavigateProp } from "../../types/types";
// --------------------------------------------------------------------

export default function HomeScreen({ navigation }: NavigateProp) {
	const [categoriesData, setCategoriesData] = useState<CategoryModel[]>([]);
	const [servicesData, setServicesData] = useState<ServiceModel[]>([]);
	const { dispatch } = useContext(UserContext);

	useEffect(() => {
		onAuthStateChanged(FirebaseGetAuth, (user) => {
			console.log(user);
			if (user) {
				dispatch({
					type: "AUTH",
					payload: {
						id: user.uid,
						email: user.email || "",
						name: user.displayName || "",
					},
				});
			} else {
				navigation.navigate("Login");
			}
		});
	}, []);

	useEffect(() => {
		async function getData() {
			const dataCat = await getCategories();
			const dataServices = await getServices();

			setCategoriesData(dataCat);
			setServicesData(dataServices);
		}

		getData();
	}, []);

	return (
		<ScrollView style={{ backgroundColor: COLORS.background }}>
			<SearchBar />
			<View style={styles.boxBrownContainer}>
				<Text style={{ color: "#fff", fontSize: 20 }}>
					Todo lo que buscas, en un {"\n"} solo lugar.
				</Text>
			</View>
			<View style={styles.categoriesContainer}>
				<Text style={{ fontSize: 20 }}>Categorías</Text>
				<FlatList
					style={styles.categoryTable}
					data={categoriesData}
					renderItem={({ item }) => <CategoryCard data={item} />}
					numColumns={2}
					ItemSeparatorComponent={() => <View style={{ margin: 10 }} />}
				/>
				<Text style={{ fontSize: 15, marginTop: 20 }}>Más recomendados</Text>
				<FlatList
					style={styles.categoryTable}
					data={servicesData}
					renderItem={({ item }) => <ServiceCard data={item} />}
					ItemSeparatorComponent={() => <View style={{ margin: 5 }} />}
				/>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	boxBrownContainer: {
		backgroundColor: COLORS.primary,
		paddingHorizontal: 24,
		paddingTop: 40,
		paddingBottom: 40,
	},
	categoriesContainer: {
		paddingHorizontal: 24,
		paddingTop: 30,
		paddingBottom: 100,
	},
	categoryTable: {
		marginTop: 20,
		gap: 5,
		paddingVertical: 4,
	},
	icon: {
		width: 24,
		height: 24,
		tintColor: "#49454F",
	},
});
