import { View, Text, StyleSheet, Button, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from "../styles/globalStyles";
import { dashboardStyle } from "../styles/dashboardStyle";
import { MaterialIcons } from "@expo/vector-icons";
import { useUIDashboard } from "../context/UIDashboardContext";
export default function Dashboard() {
  const navigation = useNavigation();
  const {cards} = useUIDashboard();
  
  return (
    <View style={globalStyles.container}>
        <View style={globalStyles.content}>
          <Text style={dashboardStyle.welcome}> Dashboard </Text>
          <View style={dashboardStyle.grid}>
            {
              cards?.map((card, i) => {
                if (card.name === 'Dashboard') return null;
                
                return(
                  <TouchableOpacity key={i} style={dashboardStyle.card} title={card.title} onPress={() => navigation.navigate(card.component)} >
                    { card.icon && <View style={dashboardStyle.icon}> {card.icon} </View> }
                    { card.MaterialIcons && <MaterialIcons name={card.MaterialIcons} style={dashboardStyle.icon} /> }
                    
                    <Text style={dashboardStyle.cardTitle}>{card.title || card.name}</Text>
                  </TouchableOpacity>
                )
              })
            }
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