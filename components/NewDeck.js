import React, {Component} from 'react'
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native'

class NewDeck extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>What is the title of your new deck?</Text>
                <View style={styles.row}>
                    <TextInput style={styles.field}/>
                </View>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>Submit</Text>
                </TouchableOpacity>
            </View>
        )
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
    },
    title: {
        fontSize: 30,
    },
    field: {
        flex: 1,
        borderWidth: 2,
        borderColor: '#000000',
        borderRadius: 5,
        margin: 20,
        fontSize: 22,
    },
    btn: {
        backgroundColor: '#000000',
        borderRadius: 5,
        padding: 10,
        paddingRight: 30,
        paddingLeft: 30
    },
    btnText: {
        color: '#FFFFFF',
        fontSize: 22,
        textAlign: 'center'
    }
})

export default NewDeck