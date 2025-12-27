import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from "../styles/globalStyles";
import { dashboardStyle } from "../styles/dashboardStyle";
import { MaterialIcons } from "@expo/vector-icons";
export default function Dashboard() {
  const navigation = useNavigation();
  return (
    <View style={globalStyles.container}>
        <View style={globalStyles.content}>
          <Text style={dashboardStyle.welcome}> Dashboard </Text>
          <View style={dashboardStyle.grid}>
            <TouchableOpacity style={dashboardStyle.card} title="Scan Image" onPress={() => navigation.navigate("Scan")} >
              <MaterialIcons name="document-scanner" style={dashboardStyle.icon} />
              <Text style={dashboardStyle.cardTitle}>Scan Image</Text>
            </TouchableOpacity>

            <TouchableOpacity style={dashboardStyle.card} title="History" onPress={() => navigation.navigate("History")} >
              <MaterialIcons name="history" style={dashboardStyle.icon} />
              <Text style={dashboardStyle.cardTitle}>Scan Image</Text>            
            </TouchableOpacity>

            <TouchableOpacity style={dashboardStyle.card} title="Settings" onPress={() => navigation.navigate("Settings")} >
              <MaterialIcons style={dashboardStyle.icon} name="settings"/>
              <Text style={dashboardStyle.cardTitle}>Settings</Text>
            </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardSubtitle: {
    fontSize: 12,
    color: "#aaa",
    textAlign: "center",
  },
});