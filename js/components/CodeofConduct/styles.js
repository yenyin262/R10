import { StyleSheet, Platform } from "react-native";
import { colors, fonts } from "../../config/styles";
const styles = StyleSheet.create({
  containerText: {
    flexDirection: "row"
  },
  description: {
    fontSize: 17.5,
    fontFamily: fonts.baseFont,
    ...Platform.select({
      android: {
        color: colors.MediumGrey,
        fontWeight: "400"
      }
      // ios: { color: "black" }
    }),
    lineHeight: 25,
    fontWeight: "100",
    marginHorizontal: 15
  },
  aboutTitle: {
    color: colors.Purple,
    marginLeft: 5,
    fontWeight: "500",
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular",
        fontSize: 18,
        marginVertical: 10,
        width: "96%",
        marginLeft: 10,
        marginHorizontal: 2,
        flex: 1,
        flexWrap: "wrap"
      },
      ios: {
        fontFamily: fonts.baseFont,
        fontWeight: "bold",
        fontSize: 18,
        marginTop: 10
      }
    })
  },
  add: {
    fontSize: 20,
    fontWeight: "500",
    color: colors.Purple,
    marginLeft: 20,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular",

        textAlign: "leftAlign",
        marginVertical: 8,
        marginBottom: 20
      },
      ios: {
        fontFamily: fonts.baseFont,
        marginTop: 10,
        marginBottom: 20
      }
    }),

    textAlign: "justify"
  }
});

export default styles;
