import { View } from "react-native";
import { useUIConfig } from "../../context/UIHeaderContext"
import { headerStyles } from "../../styles/headerStyle";
import Element from "./Element";

const HeaderTop = () => {
    const {headerTopData} = useUIConfig();
    const elements = headerTopData();
    
    return (
        <View style={headerStyles.headerTopBar}>
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
