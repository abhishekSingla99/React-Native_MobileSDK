import React from "react";
import { Text, View, TextInput, Button, Alert,StyleSheet,ToastAndroid } from "react-native";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import Header from "./Header";
import ShowToast from "./Utils/ShowToast";
import Toast from 'react-native-toast-message';
import { launchImageLibrary } from "react-native-image-picker";

const options ={
  title: 'Select Image',
  type: 'library',
  options: {
    selectionLimit: 1,
    mediaType: 'photo',
    includeBase64: false,
 },
}
export default function AddStudentForm({navigation}) {

 
 
  const openGallery =async()=>{
    const pickedImage = await launchImageLibrary(options)
    // console.log(response.assets[0].fileName)
    console.log(pickedImage)

  }



  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      name: '',
      age: '',
      email: '',
      city:'',
    }
  });
  // const onSubmit = data => console.log(data);
// ------------------------------------
const onSubmit = async data => {
  
  try {
    const res = await axios.post(
      `http://192.168.18.101:8001/api/students`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }


    );

    console.log(res)
    Toast.show({
      type: 'success',
      text1: 'Success Information',
      text2: 'Student has been added successfully'
    })

    navigation.navigate("StudentList");
   
  } catch (error) {

    Toast.show({
      type: 'error',
      text1: 'Error Information',
      text2: `${error}`
    })
    console.log('Error: ', error);
   
  }
};
// ------------------------------------
  return (
    <View style={styles.container} >
      <Header title="Student Info."/>
          <View style={styles.formContainer}>
       <Text style={styles.label}>
       Student Name
        </Text> 
      <Controller
        control={control}
        rules={{
         required: true,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
             style={styles.inputStyle}
             autoCapitalize="none"
             autoCorrect={false}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="name"
      />
      {errors.name && <Text style={styles.errorMessage}>This is required.</Text>}




<Text style={styles.label}>
    Email
</Text>
<Controller
        control={control}
        rules={{
            required:true,
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          autoCapitalize="none"
          autoCorrect={false}
             style={styles.inputStyle}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="email"
      />
       {errors.email && <Text style={styles.errorMessage}>This is required.</Text>}


       {/* <Text style={styles.label}>
   Password
</Text>
<Controller
        control={control}
        rules={{
            required:true,
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
             style={styles.inputStyle}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="password"
      />
       {errors.password && <Text style={styles.errorMessage}>This is required.</Text>} */}

       <Text style={styles.label}>
  Age
</Text>
<Controller
        control={control}
        rules={{
            required:true,
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          autoCapitalize="none"
          autoCorrect={false}
             style={styles.inputStyle}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="age"
      />
       {errors.age && <Text style={styles.errorMessage}>This is required.</Text>}


       <Text style={styles.label}>
  City
</Text>
<Controller
        control={control}
        rules={{
            required:true,
         maxLength: 100,
        }}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
          autoCapitalize="none"
          autoCorrect={false}
             style={styles.inputStyle}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
        name="city"
      />
       {errors.city && <Text style={styles.errorMessage}>This is required.</Text>}
<View style={styles.imageUploadBtn}>

<Button title="Upload" onPress={openGallery}/>
</View>
<View style={styles.submitBtn}>

      <Button title="ADD"  onPress={handleSubmit(onSubmit)} />
</View>
</View>
    </View>
  );
}

const styles = StyleSheet.create({
 container:{
    marginTop:3,
    
 }, 
 formContainer:{
  marginHorizontal:10,
 },  

label:{
    fontSize: 18,
    marginTop: 15,
    marginBottom: 6,
    color:"#757575",
},
errorMessage:{
    marginTop: 1,
    marginBottom: 3,
    color:"#f44336",
},
inputStyle:{
  fontSize:18,
    borderWidth:1,
    borderColor:'#e0e0e0',
    paddingHorizontal:15,
    paddingVertical:7,
    borderRadius:5,
},
imageUploadBtn:{
  marginTop:30,
  width:100
},
submitBtn:{
    marginTop:30,
}

})
