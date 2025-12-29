import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { globalStyles } from "../styles/globalStyles";
import { dashboardStyle } from "../styles/dashboardStyle";
import { MaterialIcons } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { apiGet } from "../api/client";
import { useComponent } from "../context/componentContext";
export default function Dashboard() {
  const [cards , setCards] = useState([]);
  const navigation = useNavigation();
  const {getComponent} = useComponent();
  

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const response = await apiGet('ui/dashboard');
      setCards(response);
    } catch (error) {
      console.error('Error:', error);      
    }
  }
  
  
  return (
    <View style={globalStyles.container}>
        <View style={globalStyles.content}>
          <Text style={dashboardStyle.welcome}> Dashboard </Text>
          <View style={dashboardStyle.grid}>
            {
              cards?.map((card, i) => {
                const Component = getComponent(card);
                return(
                  <TouchableOpacity key={i} style={dashboardStyle.card} title={Component.title} onPress={() => navigation.navigate(Component.component)} >
                    { Component.icon && <View style={dashboardStyle.icon}> {Component.icon} </View> }
                    { Component.MaterialIcons && <MaterialIcons name={Component.MaterialIcons} style={dashboardStyle.icon} /> }
                    
                    <Text style={dashboardStyle.cardTitle}>{Component.title || Component.name}</Text>
                  </TouchableOpacity>
                )
              })
            }
          </View>
        </View>
    </View>
  );
}

// const styles = StyleSheet.create({
//   cardSubtitle: {
//     fontSize: 12,
//     color: "#aaa",
//     textAlign: "center",
//   },
// });