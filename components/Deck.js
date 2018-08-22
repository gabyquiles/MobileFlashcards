import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Card, SubTitle, Title} from './Common'

class Deck extends Component {
    render() {
        const {deck} = this.props
        return (
            <Card>
                <Title>{deck.title}</Title>

                <SubTitle>{deck.questions.length} cards</SubTitle>
            </Card>
        )
    }
}

function mapStateToProps(decks, {deckId}) {
    return {
        deck: Object.values(decks).filter((deck) => {
            return deck.title === deckId
        })[0]
    }
}

export default connect(mapStateToProps)(Deck)