import React from 'react';
import {StyleSheet} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import NewDeck from './components/NewDeck'

export default class App extends React.Component {
    render() {
        return (
            <Provider store={createStore(reducer)}>
                <NewDeck/>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
