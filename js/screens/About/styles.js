import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  indicator: {
    width: 200,
    height: 200
  },

  image: {
    height: 60,
    width: 250,
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 20
  },

  lineSeparator: {
    marginTop: 30,
    borderBottomColor: colors.LightGrey,
    borderBottomWidth: 1,
    marginHorizontal: 10,
    width: "90%"
  },

  header: {
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular",
        color: colors.MediumGrey,
        fontSize: 28,
        marginBottom: 10
      },
      ios: {
        fontFamily: fonts.baseFont,
        fontWeight: "bold",
        fontSize: 30
      }
    }),
    margin: 15,
    marginTop: 10
  },
  aboutText: {
    fontSize: 17.5,
    margin: 18,

    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular",
        color: colors.MediumGrey
      },
      ios: { fontFamily: fonts.baseFont, fontWeight: "100", lineHeight: 25 }
    }),

    marginTop: 15
  }
});

export default styles;
