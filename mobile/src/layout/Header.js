
import { View } from "react-native";
import { headerStyles } from "../styles/headerStyle";
import { UIConfigProvider, useUIConfig } from "../context/UIConfigContext";
import HeaderTop from "../components/header/Header-top";

const componentMap = { HeaderTop };

function HeaderContent() {
  const {data} = useUIConfig();
  const modules = data.module || [];
  if(data.length === 0) return null;
  
  return (
    <View style={headerStyles.header}>
      {
        modules.map((module, index) => {
          if(!module.status) return null;
          const Component = componentMap[module.component];
          
          if (!Component) return null;
          
          return (
            <Component key={index} />
          );
        })
      }
    </View>
  );
}

export default function Header() {
  return (
    <UIConfigProvider>
      <HeaderContent />
    </UIConfigProvider>
  );
}