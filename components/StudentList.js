import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Button,
} from "react-native";
import Header from "./Header";

const StudentList = ({navigation}) => {

  const [items, setItems] = useState([
    {
      
      text: 'Sidhanshu',
    },
    {
      text: 'Subhas',
    },
    {
    
      text: 'Abhishek',
    },
    {
    
      text: 'Ritika',
    },
    {
    
      text: 'Vithal',
    },
  ]);
  return (
    <View>
      <Header title="Student List " />
      <View style={styles.homeBtn}>

        <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
        </View>
      <View style={styles.listItemsContainer}>

      <FlatList
        data={items}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.listItem}>
            <View style={styles.listItemView}>
              <Text style={styles.listItemText}>{item.text}</Text>
            </View>
          </TouchableOpacity>
        )}
        />
        </View>
        
    </View>
  );
};

const styles = StyleSheet.create({
  listItemsContainer:{
    marginTop: 15,
  },
  listItem: {
    padding: 15,
    backgroundColor: "#f8f8f8",
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 18,
  },
  homeBtn:{
    flexDirection:'row',
    marginTop:15,
    marginLeft:10,
  }
});

export default StudentList;
