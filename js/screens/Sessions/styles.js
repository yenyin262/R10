import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  locationTitle: {
    marginHorizontal: 20,
    color: colors.MediumGrey,
    fontSize: 20,
    ...Platform.select({
      android: {
        fontFamily: fonts.baseFontRegular,
        fontSize: 17,
        marginTop: 20
      },
      ios: {
        fontFamily: fonts.baseFont,
        fontSize: 20,
        fontWeight: "500",
        marginVertical: 22
      }
    })
  },
  sessionTitle: {
    ...Platform.select({
      android: {
        fontFamily: fonts.baseFontRegular,
        color: colors.MediumGrey,
        fontWeight: "300",
        fontSize: 22,
        marginBottom: 10,
        top: -10
      },
      ios: { fontFamily: fonts.baseFont, fontWeight: "500", fontSize: 32 }
    }),
    marginHorizontal: 20
  },

  time: {
    color: colors.Red,
    fontWeight: "600",
    ...Platform.select({
      android: {
        fontFamily: fonts.baseFontRegular,
        fontSize: 18
      },
      ios: { fontFamily: fonts.baseFont, fontSize: 20, marginTop: 20 }
    }),

    marginHorizontal: 20
  },
  description: {
    marginHorizontal: 20,
    marginVertical: 20,

    fontFamily: fonts.baseFont,
    ...Platform.select({
      android: {
        lineHeight: 28,
        fontWeight: "100",
        fontSize: 18
      },
      ios: { lineHeight: 32, fontWeight: "200", fontSize: 22 }
    })
  },
  subText: {
    marginVertical: 15,
    marginHorizontal: 20,
    color: colors.MediumGrey,

    ...Platform.select({
      android: {
        fontFamily: fonts.baseFontRegular,
        fontSize: 18
      },
      ios: { fontFamily: fonts.baseFont, fontWeight: "500", fontSize: 20 }
    }),
    marginBottom: 20
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginLeft: 20
  },
  speakerContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  speakerName: {
    fontSize: 19,
    marginLeft: 10,
    ...Platform.select({
      android: {
        fontFamily: fonts.baseFontRegular,
        color: colors.MediumGrey,
        fontWeight: "900"
      },
      ios: { fontFamily: fonts.baseFont, fontWeight: "500" }
    }),
    paddingHorizontal: 5
  },
  lineSeparator: {
    width: "90%",
    alignSelf: "center",
    borderBottomColor: colors.LightGrey,
    borderBottomWidth: 1,
    marginVertical: 15
  },

  favebuttonContainer: {
    marginVertical: 13,
    paddingTop: 10,
    paddingBottom: 10,
    height: 50,
    width: "65%",
    marginLeft: "auto",
    marginRight: "auto"
  },
  faveText: {
    textAlign: "center",
    marginRight: "auto",
    marginLeft: "auto",
    marginTop: 11,
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    ...Platform.select({
      android: {
        fontFamily: fonts.baseFontRegular
      },
      ios: {
        fontFamily: fonts.baseFont
      }
    })
  },

  favebutton: {
    borderRadius: 37.5,
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: "auto",
    marginTop: "auto"
  },

  favIcon: {
    color: colors.Red,
    marginVertical: 22
  },
  containerTitle: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%"
  }
});

export default styles;
