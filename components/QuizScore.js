import React, {Component} from 'react'
import {Animated, Platform} from 'react-native'
import {NavigationActions, StackActions} from 'react-navigation';
import {Ionicons} from '@expo/vector-icons'
import {Button, CenteredColumn, Container, SubTitle, Title} from './Common'
import {clearLocalNotification, setLocalNotification} from "../utils/helpers"

class QuizScore extends Component {
    static navigationOptions = {
        title: "Score",
        headerLeft: null
    }
    state = {
        scaleValue: new Animated.Value(1)
    }
    animateSmiley = () => {
        const {scaleValue} = this.state
        Animated.sequence([
            Animated.timing(scaleValue, {duration: 200, toValue: 1.04}),
            Animated.spring(scaleValue, {toValue: 1, friction: 4})
        ]).start()
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
        this.animateSmiley()
    }

    render() {
        const {navigation} = this.props
        const {answeredCorrectly, total, deckTitle} = navigation.state.params
        const correctPercentage = Math.round((answeredCorrectly / total) * 100)
        const {scaleValue} = this.state
        return (
            <CenteredColumn style={{paddingTop: 10, paddingLeft: 10, paddingRight: 10}}>
                <Title>Congratulations!!</Title>
                <Container>
                    <Animated.Text style={{transform: [{scale: scaleValue}]}}>
                        <Ionicons
                            name={Platform.OS === 'ios' ? 'ios-happy-outline' : 'md-happy'}
                            size={100}
                        />
                    </Animated.Text>
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