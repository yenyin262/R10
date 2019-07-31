import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  container: {
    marginTop: 7,
    marginBottom: 7
  },
  separator: {
    borderBottomColor: colors.LightGrey,
    borderBottomWidth: 1
  },
  location: {
    fontSize: 16,
    marginVertical: 10,
    ...Platform.select({
      android: {
        fontFamily: fonts.baseFontRegular,
        // color: colors.LightGrey,
        color: colors.MediumGrey,
        fontWeight: "900"
      },
      ios: { fontFamily: fonts.baseFont, color: colors.MediumGrey }
    }),
    marginHorizontal: 20
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: "400",
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular",
        color: colors.MediumGrey,
        fontWeight: "600"
      },
      ios: { fontFamily: fonts.baseFont, color: "black" }
    }),

    marginHorizontal: 20
  },
  time: {
    fontSize: 16,
    paddingTop: 7,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular",
        color: colors.MediumGrey,
        fontWeight: "900"
      },
      ios: { fontFamily: fonts.baseFont, color: "black" }
    }),

    padding: 20,
    paddingBottom: 7,
    backgroundColor: colors.LightGrey
  },
  favIcon: {
    color: colors.Red,
    marginVertical: 9,
    paddingRight: 20
  },
  locationContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default styles;
