import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Container, SubTitle, Title} from "./Common";

class SingleDeck extends Component {
    //TODO: Not refreshing after adding a card
    addCard = () => {
        const {deck, navigation} = this.props
        navigation.navigate(
            'NewCard',
            {deckTitle: deck.title}
        )
    }

    startQuiz = () => {
        const {deck, navigation} = this.props
        navigation.navigate(
            'StartQuiz',
            {deckTitle: deck.title}
        )
    }

    render() {
        const {deck} = this.props
        return (
            <Container>
                <Title>{deck.title}</Title>
                <SubTitle>{deck.questions.length} cards</SubTitle>
                <Button primary text="Start a Quiz" onPress={this.startQuiz}/>
                <Button text="Add Card" onPress={this.addCard}/>
            </Container>
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

export default connect(mapStateToProps)(SingleDeck)