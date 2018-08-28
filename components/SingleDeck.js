import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Button, Container, SubTitle, Title} from "./Common"
import {handleGetDeck} from "../actions"

class SingleDeck extends Component {
    static navigationOptions = ({navigation}) => {
        const {deckTitle} = navigation.state.params

        return (
            {
                title: deckTitle
            }
        )
    }
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

    componentDidMount() {
        const {deckTitle} = this.props.navigation.state.params
        this.props.dispatch(handleGetDeck(deckTitle))
    }

    render() {
        const {deck} = this.props
        return (
            deck ?
                <Container>
                    <Title>{deck.title}</Title>
                    <SubTitle>{deck.questions.length} cards</SubTitle>
                    <Button primary text="Start a Quiz" onPress={this.startQuiz}/>
                    <Button text="Add Card" onPress={this.addCard}/>
                </Container>
                : <Container>
                    <Title>Loading</Title>
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