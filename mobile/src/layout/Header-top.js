import { View } from "react-native-web";
import { useUIConfig } from "../context/UIConfigContext"
import { useState } from "react";
import Element from "./Element";
import { headerStyles } from "../styles/headerStyle";

const HeaderTop = () => {
    const {data} = useUIConfig();
    const headerTopData = data?.module?.filter(module => module.component === 'HeaderTop') || [];
    const elements = headerTopData[0].element; 
    
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
