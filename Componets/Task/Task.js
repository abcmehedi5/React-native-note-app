import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>

            <View style={styles.circuler}>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        margin: 10,
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center'

    },
    itemLeft: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        opacity: 0.5,
        backgroundColor: '#4DB4F4'
    },
    itemText: {
        color:'black',
        paddingHorizontal:24
    },
    circuler:{
        width:15,
        height:15,
        borderColor:'black',
        borderWidth:3,
        borderRadius:50
    }

})

export default Task;