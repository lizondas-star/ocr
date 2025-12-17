
import { headerStyles } from "../styles/headerStyle";
import { UIConfigProvider, useUIConfig } from "../context/UIConfigContext";
import HeaderTop from "./Header-top";
import '../assets/Element.css'

const componentMap = { HeaderTop };

function HeaderContent() {
  const {data} = useUIConfig();
  const modules = data.module || [];
  
  return (
    <div className="header">
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
      {/* <HeaderTop /> */}
      {/* {showBack ? (
        <TouchableOpacity onPress={onBackPress}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.placeholder} /> */}
    </div>
  );
}

export default function Header() {
  return (
    <UIConfigProvider>
      <HeaderContent />
    </UIConfigProvider>
  );
}