import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Dashboard from "../screens/Dashboard";
import Scan from "../screens/Scan";
import History from "../screens/History";
import Settings from "../screens/Settings";
import { Text } from 'react-native';
import Header from '../layout/Header';
import { useComponent } from '../context/componentContext';
import { UIHeaderProvider } from '../context/UIHeaderContext';

export default function AppNavigator() {
    const Stack = createNativeStackNavigator();
    const {data} = useComponent();    
    const componentMap = {
        Dashboard,
        Scan,
        History,
        Settings
    };
    
    if(data.length === 0) return<Text>Loading...</Text>;
    
    const screens = Object.values(data || []);
    const firstScreenName = screens[0]?.name;

    return( 
        <Stack.Navigator initialRouteName={firstScreenName} >
            {
                screens.map((screen, index) => {                    
                    const Component = componentMap[screen.component];
                    if (!Component) return null;
                    return (
                        <Stack.Screen 
                            name={screen.name} 
                            key={index} 
                            component={Component}
                            options={{
                                headerShown: true,
                                header: () => (
                                    <UIHeaderProvider screen={screen.name}>
                                        <Header />
                                    </UIHeaderProvider>
                                )
                            }} 
                        />
                    )
                })
            } 
        </Stack.Navigator>
    )
}