import React from 'react';
import {StyleSheet} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import reducer from './reducers'
import middleware from './middleware'
import DeckList from "./components/DeckList"

export default class App extends React.Component {
    render() {
        const store = createStore(reducer, middleware)

        return (
            <Provider store={store}>
                <DeckList/>
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
