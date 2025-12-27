import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from "../screens/Dashboard";
import Scan from "../screens/Scan";
import History from "../screens/History";
import Settings from "../screens/Settings";
import { useUIDashboard } from "../context/UIDashboardContext";
import { Text } from 'react-native';
import Header from '../layout/Header';

export default function AppNavigator() {
    const Stack = createNativeStackNavigator();
    const {cards} = useUIDashboard();
    
    const componentMap = {
        Dashboard,
        Scan,
        History,
        Settings
    };
    
    if(!cards) return<Text>Loading...</Text>;;
    return(
        <Stack.Navigator initialRouteName="Dashboard" >
            {
            cards.map((card, index) => {
                const Component = componentMap[card.component];
                if (!Component) return null;
                
                return (
                <Stack.Screen 
                    name={card.name} 
                    key={index} 
                    component={Component}
                    options={{
                        headerShown: true,
                        header: () => <Header />
                    }} 
                />
                )
            })
            }
        </Stack.Navigator>
    )
}