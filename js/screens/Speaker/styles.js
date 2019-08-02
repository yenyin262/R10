import { StyleSheet } from "react-native";
import { colors, fonts } from "../../config/styles";

const styles = StyleSheet.create({
  speakerView: {
    height: "98%",
    width: "90%",
    marginHorizontal: 15,
    marginTop: 10,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 10
  },
  subText: {
    marginHorizontal: 50,
    fontSize: 28,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular",
        color: colors.MediumGrey,
        marginLeft: "auto",
        marginRight: "auto"
      },
      ios: { fontFamily: fonts.baseFont, color: "black", fontWeight: "bold" }
    }),
    marginBottom: 20
  },

  speakerBio: {
    fontSize: 18,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: fonts.baseFont }
    }),
    fontWeight: "200",
    lineHeight: 30,
    marginHorizontal: 10
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 60,
    // marginLeft: 90,
    marginLeft: "auto",
    marginRight: "auto",
    marginVertical: 20
  },

  readMorebuttonContainer: {
    paddingRight: 15,
    height: 50,
    ...Platform.select({
      android: {
        width: "87%",
        marginBottom: 45
      },
      ios: {
        width: "90%"
      }
    }),
    marginVertical: 25
  },
  aboutSpeakerText: {
    textAlign: "justify",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    fontSize: 19,
    fontWeight: "400",
    color: "white",
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: fonts.baseFont }
    }),
    flexDirection: "column-reverse"
  },

  readMorebutton: {
    borderRadius: 40,
    marginLeft: 30
  },
  readMoreText: {
    flexWrap: "wrap",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    paddingTop: 5,
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular",
        width: "100%"
      },
      ios: { fontFamily: "Montserrat-light" }
    }),
    flexDirection: "column-reverse"
  },
  modal: {
    flexDirection: "row",
    marginTop: 40
  },
  icon: {
    fontWeight: "200",
    color: "white",
    alignContent: "flex-end",
    marginLeft: 20,
    marginRight: 50
  }
});

export default styles;
