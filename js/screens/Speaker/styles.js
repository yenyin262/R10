import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  speakerView: {
    height: "98%",
    width: "90%",
    marginHorizontal: 15,
    marginTop: 25,
    backgroundColor: "white",
    alignSelf: "center",
    borderRadius: 10
  },
  subText: {
    marginHorizontal: 50,
    color: "black",
    fontSize: 28,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: "Montserrat" }
    }),
    marginBottom: 20
  },

  speakerBio: {
    fontSize: 18,
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: "Montserrat" }
    }),
    fontWeight: "200",
    lineHeight: 30,
    marginHorizontal: 10
  },
  img: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginLeft: 90,
    marginVertical: 20
  },

  readMorebuttonContainer: {
    marginTop: 25,
    paddingTop: 10,
    paddingBottom: 10,
    height: 50
  },
  aboutSpeakerText: {
    textAlign: "center",
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
      ios: { fontFamily: "Montserrat" }
    }),
    flexDirection: "column-reverse"
  },

  readMorebutton: {
    borderRadius: 40,
    marginLeft: 40
  },
  readMoreText: {
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    paddingTop: 5,
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    ...Platform.select({
      android: {
        fontFamily: "Montserrat-Regular"
      },
      ios: { fontFamily: "Montserrat" }
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
