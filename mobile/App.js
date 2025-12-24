import { View } from "react-native";
import { globalStyles } from "./src/styles/globalStyles";
import Header from "./src/layout/Header";
import Body from "./src/layout/Body";

export default function App() {

  return (
    <View style={globalStyles.container}>
      <Header/>
      <Body />
    </View>
  );
}
