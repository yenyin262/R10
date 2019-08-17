import { StyleSheet } from "react-native";
import { fonts } from "../../config/styles";

const styles = StyleSheet.create({
  favesText: {
    fontSize: 20,
    marginTop: "20%",
    textAlign: "center",
    ...Platform.select({
      android: {
        fontFamily: fonts.baseFontRegular
      },
      ios: { fontFamily: fonts.baseFont }
    })
  },
  container: {
    ...Platform.select({
      android: {
        flex: 1
      }
    })
  }
});
export default styles;
