import { View, Text , TouchableOpacity, Image, StyleSheet} from "react-native-web"
import { useNavigation } from "@react-navigation/native"
import { useContext } from "react"
import { StoreContext } from "../../store"

const Shoes = ({img, cost, text}) => {
    const { setShoe} = useContext(StoreContext)

    const navigation = useNavigation()

    const  filterDesc = (desc) => {
        if(desc.length < 22){
            return(desc)
        }else {
            return `${desc.substring(0, 22)}...`
        }
    }

  

    const press = () => {

        setShoe(curr =>{
            return {
                img : img,
                nameShoe : text,
                price : cost

            }
        })
    
        navigation.navigate('Detail')
    }
    return(
        <TouchableOpacity style = {styles.container} onPress={press}>
           <Image  source={img} style ={styles.shoesImg}/>
           <Text style={styles.shoesText}>{ filterDesc(text)}</Text>
           <View >
                <Text style={[styles.shoesText, {opacity : '0.4'}]}> {cost}</Text>
           </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
       paddingVertical : '2%',
       alignItems : 'center',
       justifyContent : 'center',
    }, 
    shoesImg : {
        width : 175,
        height : 175
    }, 
    shoesText : {
        fontSize : 16
    }
})

export default Shoes

