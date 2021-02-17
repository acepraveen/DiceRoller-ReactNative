import React, {useState} from 'react'
import {View,Image,Text,StyleSheet, TouchableOpacity} from 'react-native'
import d1 from './assets/dice1.png'
import d2 from './assets/dice2.png'
import d3 from './assets/dice3.png'
import d4 from './assets/dice4.png'
import d5 from './assets/dice5.png'
import d6 from './assets/dice6.png'
const  App=()=>{
  const Roller=()=>{
    const rNo=Math.floor((Math.random()*6)+1)
    const rNo1=Math.floor((Math.random()*6)+1)
    switch(rNo){
      case 1:
        seturi(d1)
        seturi1(d1)
        break;
      case 2:
        seturi(d2)
        break;
      case 3:
        seturi(d3)
        break;
      case 4:
        seturi(d4)
        break;
      case 5:
        seturi(d5)
        break;
      case 6:
        seturi(d6)
        break;
      default:
        seturi(d1)
        break;
    }
    switch(rNo1){
      case 1:
        seturi1(d1)
        break;
      case 2:
        seturi1(d2)
        break;
      case 3:
        seturi1(d3)
        break;
      case 4:
        seturi1(d4)
        break;
      case 5:
        seturi1(d5)
        break;
      case 6:
        seturi1(d6)
        break;
      default:
        seturi1(d1)
        break;
    }
  }
  const [uri1,seturi1]=useState(d1)
  const [uri,seturi]=useState(d6)
  return(
    <>
    <View style={styles.container}>
      <Text style={styles.title}>DICE ROLLER</Text>
      <View style={{flexDirection:'row'}}>
      <Image 
      style={styles.image}
      source={uri1}/>
      <Image 
      style={styles.image}
      source={uri}/>
      </View>
      <TouchableOpacity
      onPress={Roller}
      >
    <Text style={styles.btn}>Roll Dice</Text>
    </TouchableOpacity>
    </View>
    <Text style={{fontWeight:'bold'}}>Made with Love by Praveen</Text>
    </>
  )
}
export default App

const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#B4161B'
  },
  image:{
    height:160,
    width:160,
    margin:8
  },
  btn:{
    color:'white',
    fontSize:22,
    fontWeight:'bold',
    borderWidth:3,
    borderColor:'#03C6C7',
    paddingHorizontal:41,
    paddingVertical:16,
    marginTop:42,
    borderRadius:11
  },
  title:{
    color:'#E8BD0D',
    fontSize:22,
    fontWeight:'bold',
    borderWidth:3,
    borderColor:'#F7CD2E',
    paddingHorizontal:51,
    paddingVertical:15,
    marginTop:-103,
    marginBottom:182,
    borderRadius:65
  }
})