
import { View, Text, ScrollView, Image , StyleSheet, TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons'
import Shoes from '../../component/Shoes';
import { useNavigation } from '@react-navigation/native';


// import { Container } from './styles';

 


export default function  Home () {
 
  return(
    <View  style={styles.container}>
        <View style={styles.header}>
            <Image source={require('../../assets/banner.png')} style={styles.image}/>
          <View style={styles.textContainer}>
             <Text style={styles.text}>TÊNIS</Text>
             <Text style={[styles.text, {color : '#CECECF'}]}>•</Text>
             <Text style={[styles.text, {color : '#CECECF'}]}>MASCULINO</Text>
             <TouchableOpacity style={{position: 'absolute' , right : 0, alignSelf : 'center'}}>
                <MaterialIcons name='filter-list' size={24} color='#000'  />
             </TouchableOpacity>

          </View>
      
        </View>
        <View style={styles.line}/>
        <Text style={styles.text}>LANÇAMENTOS</Text>
           <ScrollView showsVerticalScrollIndicator={false}>         
               <View style={{flexDirection : 'row', justifyContent : 'space-around'}}>
                    <Shoes  img={require('../../assets/1.png')} cost="R$140,90" text ='Nike Downshifter 10' />
                    <Shoes  img={require('../../assets/2.png')} cost="R$170,90" text ='Nike Alguma coisa'/>
               </View>
               <View style={{flexDirection : 'row', justifyContent : 'space-around'}}>
                    <Shoes  img={require('../../assets/3.png')} cost="R$140,90" text ='Nike Downshifter 20'/>
                    <Shoes  img={require('../../assets/4.png')} cost="R$170,90" text ='Nike top'/>
               </View>
               <View style={{flexDirection : 'row', justifyContent : 'space-around'}}>
                    <Shoes  img={require('../../assets/5.png')} cost="R$140,90" text ='Nike Downshifter 30'/>
                    <Shoes  img={require('../../assets/6.png')} cost="R$170,90" text ='Nike Show'/>
               </View>
           </ScrollView>
    
    
    </View>
    )
  }
const styles = StyleSheet.create({
  container: {
    flex: '1',
    width: '100%',
    backgroundColor: '#FFF',
  },
  header: {
    marginBottom: 8
  },
  image: {
    width: '100%',
     height : '160px'
  },
  textContainer : {
    flexDirection : 'row',
    marginVertical : '5%',
    marginHorizontal : '5%',

  },
  text : {
    fontFamily : 'Anton_400Regular',
    fontSize : 26, 
    marginHorizontal : '1%',

  },
  line: {
    borderBottomColor : '#D8d8d8',
    borderBottomWidth : 2
  }
});

  
  
  
  
  
 