
import { View } from "react-native";
import { headerStyles } from "../styles/headerStyle";
import { useEffect, useState } from "react";
import { apiGet } from "../api/client";
import Element from "../components/header/Element";


export default function Header() {
  const [data, setData] = useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiGet('ui/header');
      setData(response);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  if(data.length === 0) return null;
  
  return (
    <View style={headerStyles.header}>
        <Element element={data} /> 
    </View>
  );
}