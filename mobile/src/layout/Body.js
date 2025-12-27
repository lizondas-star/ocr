import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from "../screens/Dashboard";
import Scan from "../screens/Scan";
import History from "../screens/History";
import Settings from "../screens/Settings";

export default function Body() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard" >
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Scan" component={Scan} />
        <Stack.Screen name="History" component={History} />
        <Stack.Screen name="Settings" component={Settings} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}


