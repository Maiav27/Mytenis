import { useState } from "react"
import { Text, View, StyleSheet } from "react-native"

const SizeButton = ({tamanhoClicado, bgColor, color,  onClick, tamanho}) =>{
   
    
 
    
    return(
        <View style={[styles.container, {backgroundColor : tamanho == tamanhoClicado ?  bgColor : '#FFF'}]} onClick={onClick} >
            <Text style={[styles.text, { color : tamanho == tamanhoClicado ?  color : 'black'}]}> {tamanho} </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
       width : 150,
       height : 50,
       justifyContent : 'center',
       alignItems : 'center',
       borderRadius : 4,
       borderColor : '#e6e6e6',
       borderWidth : 3,
       marginHorizontal : 10,
        
    }, 
    text : {
       
        fontSize : 18,
        textAlign : 'center',
        textAlignVertical : 'center'
    }
})

export default SizeButton