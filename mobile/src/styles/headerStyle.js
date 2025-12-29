import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgb(54 28 28)",
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 35
  },
  headerBack: {
    justifyContent: "flex-start",
  },

  items: {
    flexDirection: "row",
  },

  item: {
    marginLeft: 10
  },

  icon: {
    fontSize: 25
  },

  headerSkeleton: {
    height: 20,
    backgroundColor: "#222",
    opacity: 0.4,
  },

  itemBack: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

})