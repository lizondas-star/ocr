import { View, StyleSheet } from "react-native";
import { useState } from "react";
import { globalStyles } from "./src/styles/globalStyles";
import Dashboard from "./src/screens/Dashboard";
import Header from "./src/layout/Header";

export default function App() {
  const [currentPage, setCurrentPage] = useState("Dashboard");

  const getPageTitle = () => {
    switch(currentPage) {
      case "Dashboard": return "OCR App";
      case "Scan Text": return "Text Scanner";
      case "Document Scanner": return "Doc Scanner";
      case "History": return "Scan History";
      case "Settings": return "Settings";
      default: return "OCR App";
    }
  };

  return (
    <View style={globalStyles.container}>
      <Header title={getPageTitle()} />
      <Dashboard onNavigate={(feature) => setCurrentPage(feature)} />
    </View>
  );
}

const styles = StyleSheet.create({

  // content: {
  //   flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   padding: 20,
  // },
  // title: {
  //   fontSize: 32,
  //   fontWeight: "bold",
  //   color: "#fff",
  //   marginBottom: 10,
  // },
  // subtitle: {
  //   fontSize: 18,
  //   color: "#aaa",
  //   marginBottom: 40,
  // },
  // button: {
  //   backgroundColor: "#1E88E5",
  //   paddingVertical: 15,
  //   paddingHorizontal: 30,
  //   borderRadius: 10,
  // },
  // buttonText: {
  //   color: "#fff",
  //   fontSize: 18,
  //   fontWeight: "bold",
  // },
});
