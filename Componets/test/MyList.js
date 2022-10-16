import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import ListDetails from './ListDetails';

const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'First Item',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Second Item',
    },


];

const MyList = () => {
    const [statepres, setstatepres] = useState(false);
    const press = () => {
        setstatepres(!statepres)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title} >To Do list </Text>
            {
               statepres && DATA.map(data => <ListDetails data={data}></ListDetails>)
            }

            <View style={styles.btn}>
                <Button
                    title='navigate'
                    color='red'
                    onPress={press}
                />

            </View>
        </View >
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 33,
        flex: 0,
    },
    btn: {
        alignSelf:'center',
        flex: 0,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',


    }
});


const styles1 = StyleSheet.create({
    container: {
        paddingTop: 50,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});

export default MyList;