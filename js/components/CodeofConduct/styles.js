import { StyleSheet, Platform } from "react-native";
import { colors, fonts } from "../../config/styles";
const styles = StyleSheet.create({
  containerText: {
    flexDirection: "row"
  },
  description: {
    fontSize: 17.5,
    fontFamily: "Montserrat-light",
    ...Platform.select({
      android: {
        color: colors.MediumGrey,
        fontWeight: "400"
      },
      ios: { color: "black" }
    }),
    lineHeight: 25,
    fontWeight: "100",
    marginHorizontal: 15
  },
  aboutTitle: {
    color: "#9963ea",
    fontWeight: "500",

    // paddingLeft: 2,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular",
        fontSize: 17,
        marginVertical: 10,
        width: "96%",
        marginLeft: 10,
        marginHorizontal: 12
      },
      ios: { fontFamily: "Montserrat-light", fontWeight: "bold", fontSize: 18 }
    })
  },
  add: {
    fontSize: 20,
    marginVertical: 8,
    color: "#9963ea",
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular",
        // marginHorizontal: 10
        textAlign: "leftAlign",
        marginLeft: 20
      },
      ios: { fontFamily: fonts.baseFont, marginHorizontal: 5 }
    }),

    textAlign: "justify"
  }
});

export default styles;
