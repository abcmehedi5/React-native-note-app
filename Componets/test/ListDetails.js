import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, TextInput } from 'react-native';

const ListDetails = ({ data }) => {
    const [value ,setData] = useState(null)
    const handle = (e) =>{
        // const val = e.value
        // setData(val)
    }
    return (
        <View>
            <Text>{data.title}</Text>
            <Text> My value: {value}</Text>
            <Button style={styles.btn}
                title='Click'
                color='green'
            />

            <TextInput
                style={styles.input}
                value={value}
                onChangeText={handle}
                placeholder="Text here"
                keyboardType="text"
            />

        </View>
    );
};



const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
export default ListDetails;