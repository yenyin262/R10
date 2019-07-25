import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  indicator: {
    width: 200,
    height: 200
  },

  image: {
    height: 60,
    width: 250,
    marginLeft: 50,
    marginTop: 20
  },

  lineSeparator: {
    marginTop: 30,
    borderBottomColor: "#e6e6e6",
    borderBottomWidth: 1
  },

  header: {
    fontSize: 30,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: "Montserrat" }
    }),
    margin: 15,
    marginBottom: 20,
    marginTop: 10
  },
  aboutText: {
    fontSize: 17.5,
    margin: 18,
    fontWeight: "100",
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: "Montserrat" }
    }),
    lineHeight: 25,
    marginTop: 15
  },
  aboutTitle: {
    color: "#9963ea",
    fontWeight: "500",
    fontSize: 18,
    marginVertical: 10,
    paddingLeft: 2,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: "Montserrat" }
    })
  },
  containerText: {
    flexDirection: "row"
  },
  add: {
    fontSize: 20,
    color: "#9963ea",
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: "Montserrat" }
    }),
    marginHorizontal: 5
  },
  description: {
    fontSize: 17.5,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: "Montserrat" }
    }),
    lineHeight: 25,
    fontWeight: "100",
    marginHorizontal: 15
  }
});

export default styles;
