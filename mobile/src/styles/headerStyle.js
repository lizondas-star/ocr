import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  header: {
    display: 'block',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgb(54 28 28)",
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 15,
  },

  headerTopBar: {
    flexDirection: 'row'
  },
  headerTopBarItem: {
    display: 'block',
    flex: '1'
  },

  headerTopBarItemUl: {
    listStyleType: 'none',
  }

})