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
    fontSize: 17,
    marginVertical: 10,
    ...Platform.select({
      android: {
        fontFamily: fonts.baseFontRegular,
        color: colors.MediumGrey,
        fontWeight: "500"
      },
      ios: {
        fontFamily: fonts.baseFont,
        color: colors.MediumGrey,
        fontWeight: "500"
      }
    }),
    marginHorizontal: 20
  },
  title: {
    fontSize: 19,
    marginTop: 10,
    fontWeight: "400",
    ...Platform.select({
      android: {
        fontFamily: fonts.baseFontRegular,
        color: colors.MediumGrey,
        fontWeight: "900"
      },
      ios: { fontFamily: fonts.baseFont }
    }),

    marginHorizontal: 20
  },
  time: {
    fontSize: 16,
    paddingTop: 7,
    ...Platform.select({
      android: {
        fontFamily: fonts.baseFontRegular,
        color: colors.MediumGrey,
        fontWeight: "900"
      },
      ios: { fontFamily: fonts.baseFont, fontWeight: "500" }
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
