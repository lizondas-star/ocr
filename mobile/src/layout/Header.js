
import { View } from "react-native";
import { headerStyles } from "../styles/headerStyle";
import { UIHeaderProvider, useUIConfig } from "../context/UIHeaderContext";
import HeaderTop from "../components/header/Header-top";

const componentMap = { HeaderTop };

function HeaderContent() {
  const {data, loading} = useUIConfig();
  const modules = data.module || [];
  if(data.length === 0) return null;
  
  return (
    <View style={headerStyles.header}>
      {
        loading && <View style={headerStyles.headerSkeleton}></View>
      }
      {
        !loading && modules.map((module, index) => {
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
    <UIHeaderProvider>
      <HeaderContent />
    </UIHeaderProvider>
  );
}