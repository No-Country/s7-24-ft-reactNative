import SubCategoryModel from "./subCategory.models";
interface User {
	id: string;
	photoUrl: string;
	name: string;
	email: string;
	country: string;
	city: string;
	locality: string;
	address: string;
	numberAddress: number;
	service: string;
	descriptionService: string;
	moreInformation: string;
	phone: number;
	whatsApp: number;
	searchHistory: SubCategoryModel[];
}

export default User;
