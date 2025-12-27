import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from "../screens/Dashboard";
import Scan from "../screens/Scan";
import History from "../screens/History";
import Settings from "../screens/Settings";
import { UIDashboardProvider, useUIDashboard } from "../context/UIDashboardContext";

function BodyContent() {
  const Stack = createNativeStackNavigator();
  const {cards} = useUIDashboard();
  
  const componentMap = {
    Dashboard,
    Scan,
    History,
    Settings
  };
  
  if(!cards) return null;
  
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard" >
        {
          cards.map((card, index) => {
            const Component = componentMap[card.component];
            if (!Component) return null;
            
            return (
              <Stack.Screen name={card.name} key={index} component={Component} />
            )
          })
        }
      </Stack.Navigator>
    </NavigationContainer>
  )
}


export default function Body() {
  return (
    <UIDashboardProvider>
      <BodyContent />
    </UIDashboardProvider>
  )
}


