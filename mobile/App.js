import { View } from "react-native";
import { globalStyles } from "./src/styles/globalStyles";
import Body from "./src/layout/Body";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {

  return (
    <View style={globalStyles.container}>
      <NavigationContainer>
        <Body />
      </NavigationContainer>
    </View>
  );
}
