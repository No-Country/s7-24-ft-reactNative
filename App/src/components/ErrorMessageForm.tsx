import { StyleSheet, Text } from "react-native";
import RootStyles from "../styles/setting/setting";
interface Props {
    message: string;
}

const ErrorMessageForm = ({ message }: Props) => {
    return <Text style={styles.text}>{message}</Text>;
};

const styles = StyleSheet.create({
    text: {
        color: RootStyles.colorRed,
        fontSize: 8,
        fontFamily: "Main",
    },
});

export default ErrorMessageForm;
