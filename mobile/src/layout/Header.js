import { View } from "react-native";
import { headerStyles } from "../styles/header";
import { useEffect, useState } from "react";
import { apiGet } from "../api/client";

export default function Header() {
  const [response, setResponse] = useState([]);
  useEffect(() => {    
    fetchData();
  }, []);
  
  const fetchData = async () => {
    try {
      const res = await apiGet('ui/header');
      setResponse(res);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  console.log(response);
  
  return (
    <View style={headerStyles.header}>
      {/* {showBack ? (
        <TouchableOpacity onPress={onBackPress}>
          <Text style={styles.backButton}>←</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}
      <Text style={styles.headerTitle}>{title}</Text>
      <View style={styles.placeholder} /> */}
    </View>
  );
}