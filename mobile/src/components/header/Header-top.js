import { TouchableOpacity, View } from "react-native";
import { useUIConfig } from "../../context/UIHeaderContext"
import { headerStyles } from "../../styles/headerStyle";
import Element from "./Element";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../../styles/globalStyles";

const HeaderTop = () => {
    const {headerTopData} = useUIConfig();
    const elements = headerTopData();
    const navigation = useNavigation();
    const canGoBack = navigation.canGoBack();
    
    return (
        <View style={headerStyles.headerTopBar}>
            {
                canGoBack && (
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons  name="arrow-back" style={[headerStyles.icon, globalStyles.Color.white]} />
                    </TouchableOpacity>
                )
            }
            {
                elements?.map((element, index) => {                    
                    if(!element.status) return null;

                    return (
                        <Element key={index} element={element} />
                    )
                })
            }
        </View>
    )
}

export default HeaderTop
