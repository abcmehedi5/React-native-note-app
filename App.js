import React, { useState } from 'react';
import { ScrollView, View, Text, StyleSheet, KeyboardAvoidingView, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import Task from './Componets/Task/Task';
import MyList from './Componets/test/MyList';

const App = () => {
  // display text,,
  const [task, setTask] = useState();
  const [taskItem, setTaskItem] = useState([]);

  const handleAddTask = () => {
    setTaskItem([...taskItem, task])
    setTask(null)
    Keyboard.dismiss()
  }

  return (
    <View style={styles.container}>
      {/* <MyList/> */}

      {/* today task */}
      <View style={styles.taskWraper}>
        <Text style={styles.sectionTitle}>Today's Task</Text>

        <View style={styles.items}>

          {
            taskItem.map((item, index) => {
             return <Task key={index} text={item} />
            })
          }

          {/* <Task text={'Task 1'} />
          <Task text={'Task 1'} />
          <Task text={'Task 1'} />
          <Task text={'Task 1'} /> */}
        </View>
      </View>


      <KeyboardAvoidingView style={styles.writeTaskWraper}>
        <TextInput style={styles.input} value={task} onChangeText={text => setTask(text)} placeholder='Write a task' />
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.taskWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>


    </View>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed'
  },
  taskWraper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black'
  },
  items: {
    marginTop: 14
  },
  writeTaskWraper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 60,
    borderColor: 'black',
    borderWidth: 1,
    width: 250,
  },
  taskWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1,
  },
  addText: {
    color: 'black'
  },
})



export default App;
