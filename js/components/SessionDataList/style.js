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
    fontSize: 16,
    marginVertical: 10,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: "Montserrat" }
    }),
    color: "#999999",
    marginHorizontal: 20
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

    marginHorizontal: 20
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
  },
  favIcon: {
    color: "#cf392a",
    marginVertical: 9,
    paddingRight: 20
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default styles;
