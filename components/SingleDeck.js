import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, MainButton, SecondaryButton, SubTitle, Title} from "./Common";

class SingleDeck extends Component {
    addCard = () => {
        const {deck, navigation} = this.props
        navigation.navigate(
            'NewCard',
            {deckTitle: deck.title}
        )
    }

    render() {
        const {deck} = this.props
        return (
            <Container>
                <Title>{deck.title}</Title>
                <SubTitle>{deck.questions.length} cards</SubTitle>
                <MainButton text="Start a Quiz" onPress={this.startQuiz}/>
                <SecondaryButton text="Add Card" onPress={this.addCard}/>
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