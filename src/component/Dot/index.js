import { View, Text, StyleSheet, Dimensions } from "react-native"


const Dot = ({color}) => {
    return(
        <View style={[styles.container, { backgroundColor : color}]}>
          
        </View>
    )
}


const styles = StyleSheet.create({
  container : {
    width : Dimensions.get('window').width * 0.050,
    height : Dimensions.get('window').width * 0.050,
    borderRadius : Dimensions.get('window').width * 0.050 / 2,
    marginHorizontal : '2.5%',
    elevation : 5,

  }
})


export default Dot