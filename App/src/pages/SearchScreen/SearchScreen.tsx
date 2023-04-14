import { View } from "react-native";

// --------------------------------------------------------------------

import { SearchBar } from "../../components";
import { COLORS } from "../../constants";

// --------------------------------------------------------------------

export default function SearchScreen() {
    return (
        <View style={{ backgroundColor: COLORS.background, flex: 1 }}>
            <SearchBar />
        </View>
    );
}
