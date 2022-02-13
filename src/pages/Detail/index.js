import {useState} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';
import { useContext, useEffect} from 'react';
import { StoreContext } from '../../store';
import Dot from '../../component/Dot'
import SizeButton from '../../component/SizeButton';
import Button from '../../component/Button';
import Footer from '../../component/Footer';

// import { Container } from './styles';

const Detail = ({navigation}) => {
     const {shoe} = useContext(StoreContext)
     //const [tamanhoClicado, setTamanhoClicado] = useState(0)
    console.log(shoe)

   useEffect(()=>{

        navigation.setOptions({
             headerTitle : shoe.nameShoe
        })
        window.scrollTo(0, 0)
      
   }, [])
  return(
       <ScrollView style={styles.container}   >
           <Image source={shoe.img} style={styles.image} resizeMode='cover'/>
           <View>
               <View > 
                    <Text style={[styles.title, {fontSize : 30, opacity : '0.4'}]}>{shoe.nameShoe}</Text>
               </View>
               <View> 
                    <Text style={[styles.title, {fontSize : 24}]}>{shoe.price}</Text>
               </View>
               <View style={styles.dotContainer}>
                 <Dot color ='red'/>
                 <Dot color='blue'/>
                 <Dot color='green'/>
               </View>
               <View style={{flexDirection : 'row', width : '100%'}}>
                 <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                         <SizeButton tamanho = '39' bgColor ='#17181a' color='#FFF'  />
                         <SizeButton tamanho = '40' bgColor ='#17181a' color='#FFF'    />
                         <SizeButton tamanho = '42' bgColor ='#17181a' color='#FFF'  />
                         <SizeButton tamanho = '43' bgColor ='#17181a' color='#FFF'/>
                         <SizeButton tamanho = '44' bgColor ='#17181a' color='#FFF'    />
                 </ScrollView> 
               </View>
               <View style={styles.textContent}>
                   <Text style={styles.textTitle}>
                       {shoe.nameShoe}
                   </Text>
                   <Text style={styles.textContent}>
                     Descrição
                   </Text>
                   <Text style={styles.textList}>
                     - Categoria : Amorteciento
                   </Text>
                   <Text style={styles.textList}>
                     - Material : Mesh
                   </Text>
               </View>

               <Button/>
               <View  style={styles.line}/>

               <Footer/>
           </View>
       </ScrollView>
  )
}


const styles = StyleSheet.create({
     container : {
      flex : 1,
      width : '100%',
      backgroundColor : '#FFF'
     },
     image : {
        width : '100%',
        height : '222px'
     }, 
     title : {
          fontFamily : 'Anton_400Regular',
          paddingHorizontal: '2%'
     },
     dotContainer : {
          flexDirection : 'row',
          marginVertical : '7%'
     }, 
     textContent : {
          fontSize : 16,
          lineHeight : 25,
          marginVertical : '2%',
          paddingHorizontal : '2%'
     },
     textTitle : {
          fontSize : 22,
          marginVertical : '2%'
          
     },
     textList : {
          fontSize : 16,
          lineHeight : 25
     },
      line : {
           borderWidth : 1,
           borderBottomColor : '#DDD',
           marginVertical : '2%'
      }
})

export default Detail;