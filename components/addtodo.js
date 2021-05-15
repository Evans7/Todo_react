import React ,{useState}from 'react';
import {  StyleSheet, Text, Button , TextInput, View} from 'react-native';
export default function Addtodo({onAddHandler}) {
    const [text,setText] = useState('');
    const changeHandler= (newVal) =>{
      setText(newVal);
    }
return (
<View style={styles.input}>
<TextInput style={styles.button}
  placeholder='Enter what you need to do' 
  onChangeText={changeHandler}
/>
<Button style={styles.button} onPress={()=>onAddHandler(text)} title="Add" color='blue'/>
</View>
)
}
const styles= StyleSheet.create({
input: {
    margin:10,
    padding:30,
    borderBottomColor:"#ddd",
    borderBottomWidth:2
},
button:{
  flex:1,
  borderWidth:1,
  borderRadius:10,
  margin:10,
  padding:10,
  borderStyle:'dashed',
  borderColor:'white'
  
}
})