import { View, Text, StyleSheet, TouchableOpacity } from "react-native"


const Button = () =>{
    return(
        <View style ={styles.container}>
          <TouchableOpacity style={styles.btnContainer} >
             <Text style={styles.title}> COMPRAR</Text>
          </TouchableOpacity>
          </View>
    )
}

const styles = StyleSheet.create({
    container : {
        alignItems : 'center',
        justifyContent : 'center',

    }, 
    btnContainer : {
        width : '90%',
        height : 50,
        backgroundColor : '#17181a',
        borderRadius : 5,
        marginVertical : '5%',
        alignItems : 'center',
        justifyContent : 'center'
    },
    title :{
        fontSize : 17,
        color : '#FFF'
    }
})

export default Button