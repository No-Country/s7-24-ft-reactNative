import React, { useRef } from "react";
import {
    Dimensions,
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import BottomSheet from "react-native-raw-bottom-sheet";
import { COLORS } from "../constants";
import ObjectStyles from "../styles/objects/objects";

// --------------------------------------------------------------------

// --------------------------------------------------------------------

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

function BottomSheetContent({ img, refRBSheet }: any) {
    return (
        <View style={{ alignItems: "center", paddingTop: 70 }}>
            <TouchableOpacity
                style={{ position: "absolute", top: 20, right: 20 }}
                onPress={() => refRBSheet.current?.close()}
            >
                <Text>x</Text>
            </TouchableOpacity>
            <Image
                source={{ uri: img }}
                style={{
                    height: 127,
                    width: 232,
                    borderRadius: 20,
                    position: "absolute",
                    top: -63,
                }}
            />
            <Text style={ObjectStyles.fontMain}>
                ¡Compártelo con tus clientes!
            </Text>
            <View
                style={{
                    flexDirection: "row",
                    gap: 25,
                    marginTop: 20,
                    justifyContent: "center",
                }}
            >
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require("../assets/icons/InstagramShare.svg")}
                />
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require("../assets/icons/FacebookShare.svg")}
                />
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require("../assets/icons/TwitterShare.svg")}
                />
                <Image
                    style={{ width: 25, height: 25 }}
                    source={require("../assets/icons/WhatsappShare.svg")}
                />
                <Image
                    style={{ width: 35, height: 8 }}
                    source={require("../assets/icons/PointsShare.svg")}
                />
            </View>
            <TouchableOpacity style={styles.copyBtn}>
                <Image
                    style={{ width: 15, height: 21 }}
                    source={require("../assets/icons/CopyShare.svg")}
                />
                <Text
                    style={[ObjectStyles.fontMain, { color: COLORS.primary }]}
                >
                    copy link
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default function BottomSheetShare({ img }: any) {
    const refRBSheet = useRef(null);

    return (
        <View>
            <TouchableOpacity
                style={styles.btnShare}
                onPress={() => refRBSheet.current?.open()}
            >
                <Image
                    style={{ width: 17, height: 16 }}
                    source={require("../assets/icons/ShareIcon.svg")}
                />
                <Text style={ObjectStyles.fontMain}>Compartir</Text>
            </TouchableOpacity>
            <BottomSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={deviceHeight * 0.3}
                customStyles={{
                    wrapper: {
                        backgroundColor: "#FFFFFF60",
                    },
                    draggableIcon: {
                        display: "none",
                    },
                    container: {
                        borderRadius: 20,
                        marginHorizontal: 14,
                        width: deviceWidth - 28,
                        overflow: "visible",
                    },
                }}
            >
                <BottomSheetContent img={img} refRBSheet={refRBSheet} />
            </BottomSheet>
        </View>
    );
}

const styles = StyleSheet.create({
    btnShare: {
        paddingVertical: 25,
        flexDirection: "row",
        justifyContent: "center",
        gap: 15,
        borderBottomWidth: 2,
        borderBottomColor: "#817A7Aaa",
    },
    copyBtn: {
        borderRadius: 20,
        width: deviceWidth - 88,
        borderColor: COLORS.primary,
        borderWidth: 2,
        backgroundColor: COLORS.white,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        paddingVertical: 10,
    },
});
