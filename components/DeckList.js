import React, {Component} from 'react'
import {connect} from 'react-redux'
import {StyleSheet, Text} from 'react-native'
import {handleInitialData} from "../actions"
import Deck from "./Deck"
import {Container} from "./Common"

class DeckList extends Component {
    componentDidMount() {
        this.props.dispatch(handleInitialData())
    }

    render() {
        const {deckIds} = this.props
        return (
            <Container style={styles.list}>
                <Text style={styles.mainTitle}>Decks Available</Text>
                {deckIds.map((deckId) => (
                    <Deck deckId={deckId} key={deckId} onPress={() => {
                        this.props.navigation.navigate(
                            'SingleDeckView',
                            {deckId: deckId}
                        )
                        console.log("WEEEEPA")
                    }}/>

                ))}
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 35
    },
    list: {
        paddingTop: 30,
        justifyContent: 'flex-start',
    }
})

function mapStateToProps(decks) {
    return {
        deckIds: Object.keys(decks)
    }
}

export default connect(mapStateToProps)(DeckList)