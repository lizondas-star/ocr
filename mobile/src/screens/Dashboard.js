import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
// import Header from "../layout/Header";

export default function Dashboard({ onNavigate }) {
  const features = [
    { id: 1, title: "Scan Text", subtitle: "Extract text from images", icon: "📄" },
    { id: 2, title: "Document Scanner", subtitle: "Scan documents", icon: "📋" },
    { id: 3, title: "History", subtitle: "View past scans", icon: "📚" },
    { id: 4, title: "Settings", subtitle: "App preferences", icon: "⚙️" },
  ];

  return (
    <View style={styles.container}>
      {/* <Header title="Dashboard" showBack={false} /> */}
      <ScrollView style={styles.content}>
        <Text style={styles.welcome}>Welcome to OCR App</Text>
        <View style={styles.grid}>
          {features.map((feature) => (
            <TouchableOpacity 
              key={feature.id} 
              style={styles.card}
              onPress={() => onNavigate && onNavigate(feature.title)}
            >
              <Text style={styles.icon}>{feature.icon}</Text>
              <Text style={styles.cardTitle}>{feature.title}</Text>
              <Text style={styles.cardSubtitle}>{feature.subtitle}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
  },
  content: {
    flex: 1,
    padding: 20,
  },
  welcome: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 30,
    textAlign: "center",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    backgroundColor: "#1E1E1E",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15,
    alignItems: "center",
  },
  icon: {
    fontSize: 40,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 5,
  },
  cardSubtitle: {
    fontSize: 12,
    color: "#aaa",
    textAlign: "center",
  },
});