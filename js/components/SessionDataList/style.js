import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    marginBottom: 7
  },
  separator: {
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1
  },
  location: {
    fontSize: 15,
    marginTop: 8,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: "Montserrat" }
    }),
    color: "#999999",
    marginLeft: 20,
    marginBottom: 8
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "400",
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular",
        color: "#999999",
        fontWeight: "400"
      },
      ios: { fontFamily: "Montserrat", color: "black" }
    }),
    marginLeft: 20
  },
  time: {
    fontSize: 16,
    paddingTop: 7,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular",
        color: "#999999"
      },
      ios: { fontFamily: "Montserrat", color: "black" }
    }),

    padding: 20,
    paddingBottom: 7,
    backgroundColor: "#e6e6e6"
  }
});

export default styles;
