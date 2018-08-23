import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Container, MainButton, SecondaryButton, SubTitle, Title} from "./Common";

class SingleDeck extends Component {
    render() {
        const {deck} = this.props
        console.log(deck)
        return (
            <Container>
                <Title>{deck.title}</Title>
                <SubTitle>{deck.questions.length} cards</SubTitle>
                <MainButton text="Start a Quiz"/>
                <SecondaryButton text="Add Card"/>
            </Container>
        )
    }
}

function mapStateToProps(decks, {navigation}) {
    const {deckId} = navigation.state.params
    return {
        deck: Object.values(decks).filter((deck) => {
            return deck.title === deckId
        })[0]
    }
}

export default connect(mapStateToProps)(SingleDeck)