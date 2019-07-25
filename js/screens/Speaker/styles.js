import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  subText: {
    marginTop: 30,
    marginLeft: 20,
    color: "black",
    fontSize: 28,
    fontFamily: "Montserrat",
    marginBottom: 20
  },

  speakerBio: {
    fontSize: 18,
    fontFamily: "Montserrat",
    fontWeight: "200",
    lineHeight: 30
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    // marginTop: 20,
    marginLeft: 20
  },

  favebuttonContainer: {
    // marginRight: 40,
    // marginLeft: 40,
    marginTop: 25,
    paddingTop: 10,
    paddingBottom: 10,
    // backgroundColor: "#9963ea",

    // borderWidth: 0.5,
    height: 50
    // marginTop: "auto",
  },
  faveText: {
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    paddingTop: 5,
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    fontFamily: "Montserrat",
    flexDirection: "column-reverse"

    // alignItems: "flex-end"
  },

  favebutton: {
    borderRadius: 40
  },
  faveText: {
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 10,
    paddingTop: 5,
    fontSize: 20,
    fontWeight: "400",
    color: "white",
    fontFamily: "Montserrat",
    flexDirection: "column-reverse"
    // alignItems: "flex-end"
  }
});

export default styles;
