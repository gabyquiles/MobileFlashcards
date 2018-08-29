import React, {Component} from 'react'
import {Platform} from 'react-native'
import {NavigationActions, StackActions} from 'react-navigation';
import {Ionicons} from '@expo/vector-icons'
import {Button, CenteredColumn, Container, SubTitle, Title} from './Common'
import {clearLocalNotification, setLocalNotification} from "../utils/helpers"

class QuizScore extends Component {
    static navigationOptions = {
        title: "Score",
        headerLeft: null
    }
    toDeck = () => {
        const {navigation} = this.props
        const {deckTitle} = navigation.state.params
        const resetAction = StackActions.reset({
            index: 1,
            actions: [
                NavigationActions.navigate({
                    routeName: 'Home',
                }),
                NavigationActions.navigate({
                    routeName: 'SingleDeckView',
                    params: {
                        deckTitle
                    }
                }),
            ],
        });
        navigation.dispatch(resetAction);
    }
    restartQuiz = () => {
        const {navigation} = this.props
        const {deckTitle} = navigation.state.params
        const resetAction = StackActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({
                    routeName: 'StartQuiz',
                    params: {
                        deckTitle
                    }
                }),
            ],
        });
        navigation.dispatch(resetAction);
    }

    componentDidMount() {
        clearLocalNotification().then(setLocalNotification)
    }

    render() {
        const {navigation} = this.props
        const {answeredCorrectly, total, deckTitle} = navigation.state.params
        const correctPercentage = Math.round((answeredCorrectly / total) * 100)
        return (
            <CenteredColumn style={{paddingTop: 10, paddingLeft: 10, paddingRight: 10}}>
                <Title>Congratulations!!</Title>
                <Container>
                    <Ionicons
                        name={Platform.OS === 'ios' ? 'ios-happy-outline' : 'md-happy'}
                        size={100}
                    />
                </Container>
                <CenteredColumn>
                    <SubTitle>You answered correctly {correctPercentage}% of the questions</SubTitle>
                    <Button onPress={this.restartQuiz}>Restart Quiz</Button>
                    <Button onPress={this.toDeck}>Back To Deck</Button>
                </CenteredColumn>
            </CenteredColumn>
        )
    }
}

export default QuizScore