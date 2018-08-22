import React, {Component} from 'react'
import {connect} from 'react-redux'
import {Text, View} from 'react-native'
import {Title} from "./Common"
import {handleInitialData} from "../actions";

class DeckList extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const {deckIds} = this.props
        return (
            <View>
                <Title>Aquiii</Title>
                {deckIds.map((deckId) => (
                    <Text>{deckId}</Text>
                ))}
            </View>
        );
    }
}

function mapStateToProps(decks) {
    return {
        deckIds: Object.keys(decks)
    }
}

export default connect(mapStateToProps)(DeckList)