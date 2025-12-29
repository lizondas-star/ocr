
import { Text, TouchableOpacity, View } from "react-native";
import { headerStyles } from "../styles/headerStyle";
import Element from "../components/header/Element";
import { useUIHeaderConfig } from "../context/UIHeaderContext";
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from "@expo/vector-icons";
import { globalStyles } from "../styles/globalStyles";
import { useComponent } from "../context/componentContext";


export default function Header() {
  const {data, loading, screen} = useUIHeaderConfig();  
  const {getComponent} = useComponent();  
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();
  const component = getComponent(screen);
  
  return (
    <View style={[headerStyles.header, canGoBack && headerStyles.headerBack]}>
      {loading && <View style={headerStyles.headerSkeleton} />}
      {
        canGoBack && (
            <TouchableOpacity onPress={() => navigation.goBack()} style={headerStyles.itemBack}>
                <MaterialIcons  name="arrow-back" style={[headerStyles.icon, globalStyles.Color.white]} />
                <Text style={[globalStyles.Color.white, headerStyles.backText]}>{component?.title || component?.name || 'Back'}</Text>
            </TouchableOpacity>
        )
      }
      {!loading && !canGoBack && <Element element={data} />}
    </View>
  );
}