import React, {Component} from 'react'
import {Text, View} from 'react-native'
import {connect} from 'react-redux'
import {Button, SubTitle, Title} from "./Common"

class Quiz extends Component {
    static navigationOptions = ({navigation}) => {
        const {deckTitle} = navigation.state.params

        return (
            {
                title: deckTitle
            }
        )
    }

    state = {
        currentCardIdx: 0,
        showAnswer: false,
        answeredCorrectly: 0
    }

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
        const currentCardIdx = this.state.currentCardIdx + 1
        const {deck} = this.props
        if (currentCardIdx < deck.questions.length) {
            this.setState((state) => ({currentCardIdx}))
        } else {
            //    TODO: Navigate to score screen
        }
    }

    render() {
        const {currentCardIdx, showAnswer} = this.state
        const {deck} = this.props
        const currentCard = deck.questions[currentCardIdx]
        console.log(currentCardIdx)
        console.log(currentCard)
        return (
            <View>
                <Text>{currentCardIdx + 1} of {deck.questions.length}</Text>
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