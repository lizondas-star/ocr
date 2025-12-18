import { StyleSheet } from "react-native";

export const headerStyles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgb(54 28 28)",
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingTop: 35
  },

  headerTopBar: {
    width:'100%',
    flexDirection: "row",
  },

  headerTopBarColunm: {
    flex: 1,
    color: '#fff',
    flexDirection: 'row'
  },

  headerTopBarColunm_middle: {
    justifyContent: 'center',
  },

  headerTopBarColunm_right: {
    justifyContent: 'flex-end',
  },

  headerTopLogo: {
    width: 100,
  },

  logo: {
    fontSize: 30
  },

  icon: {
    fontSize: 25
  }

})