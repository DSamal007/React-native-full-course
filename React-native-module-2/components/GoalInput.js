import React, { useState } from 'react';
import {
  View, 
  TextInput, 
  Button, 
  StyleSheet,
  Modal
 } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) =>{
        setEnteredGoal(enteredText)
      }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
      setEnteredGoal('')
    }

    return(
      <Modal animationType='slide' visible={props.visible}>
        <View style={styles.inputContainer}>
        <TextInput 
        placeholder='Enter Course goal' 
        style={styles.input}
        onChangeText={goalInputHandler}
        value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
         <View style={styles.button}><Button onPress={props.onClose} title='cancel' color='red'/></View>

         <View style={styles.button}><Button title="Add" onPress={addGoalHandler} /></View>
        </View> 
      </View>
      </Modal> 
    )
}


//styling 
const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:'center', 
        alignItems:'center'
      },
      input:{
        borderColor:'black', 
        width:'80%', 
        borderWidth:2, 
        padding:10,
        marginBottom:10
      },
      buttonContainer:{
        flexDirection: 'row',
        justifyContent:'space-around',
        width:'60%'
      },
      button:{
        width:'40%'
      }
})


export default GoalInput;