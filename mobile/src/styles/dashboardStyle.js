import { StyleSheet } from "react-native";

export const dashboardStyle = StyleSheet.create({
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
    cardTitle: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 5,
    },
    icon: {
        fontSize: 40,
        marginBottom: 10,
        color: '#fff'
    },
})