import React from 'react';
import {  StyleSheet, Text, TouchableOpacity,View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
export default function todoitems({item,ondeletehandler}){
return (
<TouchableOpacity style={styles.main} onPress={()=> ondeletehandler(item.key)}>
    <View style={styles.submain}>
    <MaterialIcons name="delete" size={40} color={"grey"}/>
    <Text style={styles.list}>{item.text}</Text>
    </View>
</TouchableOpacity>
)
}
const styles=StyleSheet.create({
    main:{
        padding:10
    },
    list:{
        flex:1,
        padding:15,
        fontSize:20,
        marginLeft:20,
         textAlign:'left',
         /*
         borderWidth:1,
         borderColor:'pink',
         borderStyle:"dashed", 
         borderRadius:10 */
    
    },
    submain:{
        flex:1,
        flexDirection:"row",
    }
    
    })