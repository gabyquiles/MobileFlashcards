import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {connect} from 'react-redux'
import {Button, SubTitle, Title} from "./Common"

class Quiz extends Component {
    static navigationOptions = {
        title: "Quiz",
        headerLeft: null
    }

    state = {
        currentCardIdx: 0,
        showAnswer: false,
        answeredCorrectly: 0,
        answered: 0
    }

    cardsLeft = () => (this.props.deck.questions.length - this.state.answered)

    toggleAnswer = () => {
        const {showAnswer} = this.state
        this.setState((state) => ({showAnswer: !showAnswer}))
    }

    markCorrect = () => {
        const answeredCorrectly = this.state.answeredCorrectly + 1
        this.setState((state) => ({answeredCorrectly}))
        this.nextCard()
    }

    nextCard = () => {
        const answered = this.state.answered + 1
        this.setState((state) => ({answered}))
        if (this.cardsLeft() > 1) {
            const currentCardIdx = this.state.currentCardIdx + 1
            this.setState((state) => ({currentCardIdx}))
        }
    }

    toScore = (answeredCorrectly) => {
        const {deck, navigation} = this.props
        navigation.navigate(
            'QuizScore',
            {answeredCorrectly, total: deck.questions.length, deckTitle: deck.title}
        )
    }

    componentDidUpdate() {
        const {answered, answeredCorrectly} = this.state
        const {deck} = this.props
        if (answered === deck.questions.length) {
            this.toScore(answeredCorrectly)
        }
    }

    render() {
        const cardsLeft = this.cardsLeft()
        const {currentCardIdx, showAnswer} = this.state
        const {deck} = this.props
        const currentCard = deck.questions[currentCardIdx]

        return (
            <View>
                <Text>{cardsLeft} cards left</Text>
                <Title>{currentCard.question}</Title>
                <SubTitle>{showAnswer && currentCard.answer}</SubTitle>
                <Button onPress={this.toggleAnswer} text={showAnswer ? "Hide Answer" : "Show Answer"}/>
                <Button onPress={this.markCorrect} text="Correct"/>
                <Button onPress={this.nextCard} text="Incorrect"/>
            </View>
        )

    }
}

function mapStateToProps(decks, {navigation}) {
    const {deckTitle} = navigation.state.params
    return {
        deck: Object.values(decks).filter((deck) => {
            return deck.title === deckTitle
        })[0]
    }
}

export default connect(mapStateToProps)(Quiz)