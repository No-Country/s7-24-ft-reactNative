import { createUserWithEmailAndPassword } from "firebase/auth";
import { useContext, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, TextInput, View, TouchableOpacity  } from "react-native";
import { ButtonFom, ErrorMessageForm, FormAuth } from "../../../components";
import UserContext from "../../../context/UserContext";
import Dates from "../../../models/datesUsers.models";
import ObjectStyles from "../../../styles/objects/objects";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { DropdownExample } from "../../../components/Dropdown";
import { COLORS, ROUTES } from "../../../constants";
import { CheckBox } from 'react-native-elements';
import RootStyles from "../../../styles/setting/setting"
import { addServiceToDB } from "../../../services/addServiceToDB.services"


export const DetailPubli = ({navigation, route}:any) => {
	const [errorPassword, setErrorPassword] = useState("");
	const [isSelected, setIsSelected] = useState(false);
	//const initialState:Dates = {idUser:'', nameUser:'',address:'',descriptionService:'', moreInformation:'', numberAddress: 0, phone: 0, service:'', whatsApp: 0}
	const [serviceStatus, setServiceStatus] = useState()

	const { dispatch, state } = useContext(UserContext);

	const {
		control,
		handleSubmit,
		formState: { errors },
	} = useForm<Dates>({
		defaultValues: {
			address: "",
			numberAddress: 0,
			service: "",
			descriptionService: "",
			moreInformation:"",
			phone: 0,
			whatsApp: 0,
		},
	});

	
	const onSubmit = (data: Dates) => {
		const {address,numberAddress,service,descriptionService,moreInformation,phone,whatsApp} = data
		//setServiceStatus({state.id, state.name,address,numberAddress,service,descriptionService,moreInformation,phone,whatsApp})
	}

	const form = () =>{
		onSubmit;
		//addServiceToDB('services');
		navigation.navigate('Publicacion')
	}

	return (
        <KeyboardAwareScrollView>
		<View style={[ObjectStyles.backgroundForm, ObjectStyles.flexBox]}>
			<FormAuth>
            <DropdownExample/>
				<View style={ObjectStyles.containerFormInput}>
					<Text style={ObjectStyles.textLabelForm}>¿Cúal es el título de tu publicación?</Text>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								placeholder="Ej: Masajes a domicilio"
								value={value}
								onBlur={onBlur}
								onChangeText={onChange}
								style={ObjectStyles.input}
							/>
						)}
						name="service"
						rules={{ required: true }}
					/>
				</View>

				<View style={ObjectStyles.containerFormInput}>
					<Text style={ObjectStyles.textLabelForm}>¿Qué incluye el servicio?</Text>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								placeholder="Descríbelo con detalles"
								onChangeText={onChange}
								onBlur={onBlur}
								value={value}
								style={ObjectStyles.input}
							/>
						)}
						rules={{ required: true }}
						name="descriptionService"
					/>
				</View>

				<View style={ObjectStyles.containerFormInput}>
					<Text style={ObjectStyles.textLabelForm}>Más información</Text>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								placeholder="Incluir detalle"
								onChangeText={onChange}
								onBlur={onBlur}
								value={value}
								style={ObjectStyles.input}
							/>
						)}
						rules={{ required: true }}
						name="moreInformation"
					/>
				</View>

                <Text style={{fontSize:16, }}>Tu ubicación</Text>

                <View style={ObjectStyles.containerFormInput}>
					<Text style={ObjectStyles.textLabelForm}>Calle</Text>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								placeholder="Nombre de la calle"
								onBlur={onBlur}
								onChangeText={onChange}
								style={ObjectStyles.input}
							/>
						)}
						rules={{ required: true }}
						name="address"
					/>
				</View>

                <View style={ObjectStyles.containerFormInput}>
				<View style={{display:'flex', flexDirection:'row'}}>
				<View>
					<Text style={ObjectStyles.textLabelForm}>Número</Text>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								placeholder="Ej: 123"
								onBlur={onBlur}
								onChangeText={onChange}
								style={styles.input}
							/>
						)}
						rules={{ required: true }}
						name="numberAddress"
					/>
					</View>
					<View style={{display:'flex',justifyContent:'center', paddingLeft:40}}>
						<Text>Sin número</Text>
					<CheckBox
        				checked={isSelected}
        				onPress={() => setIsSelected(!isSelected)}
						style={styles.containerStyle}
      				/>
					</View>
					</View>
				</View>
                <View style={ObjectStyles.containerFormInput}>
					<Text style={ObjectStyles.textLabelForm}>Número de teléfono</Text>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								placeholder="Ingrese teléfono"
								onBlur={onBlur}
								onChangeText={onChange}
								style={ObjectStyles.input}
							/>
						)}
						rules={{ required: true }}
						name="phone"
					/>
				</View>
                <View style={ObjectStyles.containerFormInput}>
					<Text style={ObjectStyles.textLabelForm}>WhatsApp</Text>
					<Controller
						control={control}
						render={({ field: { onChange, onBlur, value } }) => (
							<TextInput
								placeholder="Ingrese número"
								onBlur={onBlur}
								onChangeText={onChange}
								style={ObjectStyles.input}
							/>
						)}
						rules={{ required: true }}
						name="whatsApp"
					/>
				</View>
			</FormAuth>
            <TouchableOpacity style={styles.buttonContainer} onPress={form}>
             <Text style={styles.buttonText}>Continuar</Text>
            </TouchableOpacity>
		</View>
        </KeyboardAwareScrollView>
	);
};

const styles = StyleSheet.create({
	paragraph: {
		position: "absolute",
		bottom: 56,
		width: 179,
		fontSize: 8,
		textAlign: "center",
		color: "#000",
	},
    icon: {
         width: 280,
         height: 300,
    },
    buttonContainer: {
        width: 350,
        height: 40,
        backgroundColor: COLORS.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 35,
        marginBottom:15
    },
    buttonText: {
        color: COLORS.white,
        fontSize: 18,
    },
	input: {
		width: 164,
		height: 32,
		padding: "1em",
		borderRadius: 4,
		fontSize: 14,
		border: "1px solid #d4d4d4",
		backgroundColor: RootStyles.colorWhite,
		color: "rgba(149, 149, 149, 1)",
		boxShadow: " 0px 2px 2px rgba(0, 0, 0, 0.25)",
	},
	containerStyle: {
		backgroundColor: COLORS.background,
		borderWidth: 0,
		margin:0,
		padding:0
	  },
    

});
