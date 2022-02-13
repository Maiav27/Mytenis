
import { View, Text , StyleSheet, ScrollView} from "react-native"
import Shoes from "../Shoes"
import { useNavigation } from "@react-navigation/native"
const Footer = () =>{
    const navigation = useNavigation()
    const click = ( ) =>{
         navigation.navigate('Detail')
         console.log('pegoouss')
    }
    return(
      <View>
         <Text style={styles.title}> Você tambem pode gostar</Text>
         <View style={{flexDirection : 'row'}}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} >
               <View style={{marginHorizontal : 10}} onPress={click}>
                  <Shoes img={require('../../assets/1.png')} cost='R$ 360,90' text='nike alguma coisa'/>
               </View>
               <View style={{marginHorizontal : 10}} onClick={() => navigation.navigate('Detail')}>
                  <Shoes img={require('../../assets/2.png')} cost='R$ 380,90' text='nike legal'/>
               </View>
               <View style={{marginHorizontal : 10}} onClick={() => navigation.navigate('Detail')}>
                  <Shoes img={require('../../assets/3.png')} cost='R$ 380,90' text='nike top'/>
               </View>
            </ScrollView>
         </View>
      </View>
    )
}


 const styles = StyleSheet.create({
    title : {
        fontSize : 24,
        fontFamily : 'Anton_400Regular',
        marginVertical: '2%',
        paddingHorizontal : '2%'
    }
 })

export default Footer