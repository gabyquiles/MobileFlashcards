import React, {Component} from 'react'
import {StyleSheet, Text} from 'react-native'
import {connect} from 'react-redux'
import {B, CenteredColumn, SubTitle, Title} from "./Common"
import TextButton from './TextButton'
import {limegreen, red} from "../utils/colors"

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
            <CenteredColumn>
                <CenteredColumn>
                    <Text>{cardsLeft} cards left</Text>
                </CenteredColumn>

                <CenteredColumn>
                    <Title>{currentCard.question}</Title>
                    <SubTitle style={styles.answerText}>{showAnswer && currentCard.answer}</SubTitle>
                </CenteredColumn>

                <CenteredColumn>
                    <TextButton onPress={this.toggleAnswer}>
                        {showAnswer ? "Hide Answer" : "Show Answer"}
                    </TextButton>
                    <B onPress={this.markCorrect} style={styles.correctBtn}>
                        Correct
                    </B>
                    <B onPress={this.nextCard} style={styles.incorrectBtn}>
                        Incorrect
                    </B>
                </CenteredColumn>
            </CenteredColumn>
        )

    }
}

const styles = StyleSheet.create({
    questionContainer: {
        alignItems: 'flex-start'
    },
    correctBtn: {
        backgroundColor: limegreen
    },
    incorrectBtn: {
        backgroundColor: red
    },
    answerText: {
        height: 30
    }
})

function mapStateToProps(decks, {navigation}) {
    const {deckTitle} = navigation.state.params
    return {
        deck: Object.values(decks).filter((deck) => {
            return deck.title === deckTitle
        })[0]
    }
}

export default connect(mapStateToProps)(Quiz)