import React from 'react';
import {Platform, StyleSheet} from 'react-native';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import {createBottomTabNavigator, createStackNavigator} from 'react-navigation'
import {FontAwesome, Ionicons} from '@expo/vector-icons'
import reducer from './reducers'
import middleware from './middleware'
import DeckList from "./components/DeckList"
import NewDeck from "./components/NewDeck"
import SingleDeck from "./components/SingleDeck"
import NewCard from "./components/NewCard";

const white = '#FFFFFF'
const purple = '#292477'

const Tabs = createBottomTabNavigator({
    Home: {
        screen: DeckList,
        navigationOptions: {
            tabBarLabel: 'List Of Decks',
            tabBarIcon: ({tintColor}) => <Ionicons name='ios-bookmarks' size={30} color={tintColor}/>
        }
    },
    AddDeck: {
        screen: NewDeck,
        navigationOptions: {
            tabBarLabel: 'New Deck',
            tabBarIcon: ({tintColor}) => <FontAwesome name='plus-square' size={30} color={tintColor}/>
        }
    }
}, {
    navigationOptions: {
        header: null
    },
    tabBarOptions: {
        activeTintColor: Platform.OS === 'ios' ? purple : white,
        style: {
            height: 56,
            backgroundColor: Platform.OS === "ios" ? white : purple,
            shadowColor: 'rgba(0,0,0,0.24)',
            shadowOffset: {
                width: 0,
                height: 3
            },
            shadowRadius: 6,
            shadowOpacity: 1
        }
    }
})

const QuizNavigator = createStackNavigator({
    Home: {
        screen: Tabs
    },
    SingleDeckView: {
        screen: SingleDeck,

    },
    NewCard: {
        screen: NewCard
    }
})

export default class App extends React.Component {
    render() {
        const store = createStore(reducer, middleware)

        return (
            <Provider store={store}>
                <QuizNavigator/>
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
// TODO: Reconsider icons