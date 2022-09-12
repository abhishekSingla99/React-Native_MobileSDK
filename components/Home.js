import { View, Text, Button,StyleSheet, Image } from 'react-native'
import React from 'react'
import Header from './Header'

const Home = ({navigation}) => {
  return (
    <View style={styles.container} >
        <Header title="Student Management System"/>
        <Image source={require('../assets/studentImage.png')}  style={{width: 400, height: 400}} />
     <View style={styles.actionBtns}>

      <Button title='Add Student' onPress={()=>navigation.navigate("AddStudent")}/>
      <Button title='Student List' onPress={()=>navigation.navigate("StudentList")}/>
     </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
container:{
    flex:1,
    // margin:20
},
actionBtns:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginHorizontal:20,
    marginTop:5
}

})