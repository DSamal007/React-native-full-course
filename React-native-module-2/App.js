import React, { useState } from 'react';
import { StyleSheet, 
  Text, 
  View, 
  TextInput,
  Button, 
  ScrollView,
  FlatList
 } from 'react-native';
 import GoalItem from './components/GoalItem';
 import GoalInput from './components/GoalInput';

export default function App() { 
 
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddmode, setIsAddMode] = useState(false);



  const addGoalHandler = goalTitle =>{
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle}])
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId =>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id != goalId)
    })
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false)
  }


  return (
    
      <View style={styles.screen}>
        <Button title='add a new goal' onPress={()=> setIsAddMode(true)}/>
        <GoalInput visible={isAddmode} onClose={cancelGoalAdditionHandler} onAddGoal={addGoalHandler}/>

      <FlatList 
        data={courseGoals}
        keyExtractor={(item,index)=>item.id} 
        renderItem={ itemData => ( 
        <GoalItem
          id={itemData.item.id}
          onDelete={removeGoalHandler}
          title={itemData.item.value}/> )}
      />      
          
    </View>
  
    
  );
}
  
const styles = StyleSheet.create({
  screen : {
    padding:50
  },
 
})

















////////     A BASIC SETUP REACT NATIVE //////////////

// import React, { useState } from 'react';
// import { StyleSheet, 
//   Text, 
//   View, 
//   TextInput,
//   Button, 
//   ScrollView,
//   FlatList
//  } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.screen}>
//       <View style={styles.inputContainer}>
//         <TextInput 
//         placeholder='Enter Course goal' 
//         style={styles.input}/>
//         <Button title="Add" /> 
//       </View>      
//     </View>
//   );
// }
  
// const styles = StyleSheet.create({
//   screen : {
//     padding:50
//   },
//   inputContainer:{
//     flexDirection:'row', 
//     justifyContent:'space-between', 
//     alignItems:'center'
//   },
//   input:{
//     borderColor:'black', 
//     width:'80%', 
//     borderWidth:2, 
//     padding:10
//   }
// })
    