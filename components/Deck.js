import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Animated, StyleSheet} from 'react-native'
import {Card, SubTitle} from './Common'

class Deck extends Component {
    state = {
        scaleValue: new Animated.Value(1)
    }

    animatedAction = () => {
        const {onPress} = this.props
        const {scaleValue} = this.state
        Animated.sequence([
            Animated.timing(scaleValue, {duration: 200, toValue: 1.5}),
            Animated.spring(scaleValue, {toValue: 1, friction: 4})
        ]).start()
        onPress()
    }

    render() {
        const {deck, onPress} = this.props
        const {scaleValue} = this.state
        return (
            <Card onPress={this.animatedAction}>
                <Animated.Text style={[styles.title, {transform: [{scale: scaleValue}]}]}>{deck.title}</Animated.Text>
                <SubTitle>{deck.questions.length} cards</SubTitle>
            </Card>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30
    }
})

function mapStateToProps(decks, {deckId}) {
    return {
        deck: Object.values(decks).filter((deck) => {
            return deck.title === deckId
        })[0]
    }
}

export default connect(mapStateToProps)(Deck)