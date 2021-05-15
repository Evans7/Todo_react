import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View,Alert,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './components/header'
import TodoList from './components/todolist'
import Addtodo from './components/addtodo'
function App(){
  const [todos, setTodos] = useState([
       { text: 'Placeholder', key: '1'}
  ]);

  const ondeletehandler = (key) => {
    setTodos((prevTodos)=> {
      return prevTodos.filter(todo => todo.key!=key)

    } )
  }
  const onAddHandler = (newval) => {
    if(newval.length>3){
      console.log("OKay");
    setTodos((prev)=>{
      return[{text:newval,key:Math.random()},...prev]

    })
  }
  else {
    Alert.alert("Oops","Entered todo must be over 3 letters long!",[
      {text:"Okay!",onPress:()=>console.log("Alert closed")}
    ]);
  }
  }
  return (
    <TouchableWithoutFeedback onPress={()=>Keyboard.dismiss()}>
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
      <Addtodo onAddHandler={onAddHandler}></Addtodo>
          <View style={styles.list}>
            <FlatList 
            data={todos}
            renderItem={({item})=>(
                <TodoList item={item} ondeletehandler={ondeletehandler}></TodoList>
            )}
            />
          </View>
          
      </View>
 
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080',
    margin:5,
 
  },
  content : {
    flex:1,
    backgroundColor: '#sfe',
   padding:30,

 
  },
  list:{

    backgroundColor:"coral",
    flex:1,
    padding:10,
    fontSize:50
  }

});



export default App;
