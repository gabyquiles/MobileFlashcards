import React, {Component} from 'react'
import {connect} from 'react-redux'
import {FlatList, StyleSheet, Text} from 'react-native'
import {handleInitialData} from "../actions"
import Deck from "./Deck"
import {Container, Title} from "./Common"

class DeckList extends Component {
    componentDidMount() {
        // resetCards()
        this.props.dispatch(handleInitialData())
    }

    renderHeader() {
        return (
            <Text style={styles.mainTitle}>Decks Available</Text>
        )
    }


    render() {
        const {deckIds} = this.props
        return (
            deckIds.length > 0
                ? <FlatList
                    ListHeaderComponent={this.renderHeader}
                    data={deckIds}
                    renderItem={({item}) => (<Deck deckId={item.key} onPress={() => {
                        this.props.navigation.navigate(
                            'SingleDeckView',
                            {deckTitle: item.key}
                        )
                    }}/>)}
                />
                : <Container>
                    <Title>No Decks Created</Title>
                </Container>
        );
    }
}

const styles = StyleSheet.create({
    mainTitle: {
        fontSize: 35
    }
})

function mapStateToProps(decks) {
    // In order to avoid a warking on FlatList we need the data in format [{key: 1}, {key: 2}]
    return {
        deckIds: Object.keys(decks).map((deckId) => ({key: deckId}))
    }
}

export default connect(mapStateToProps)(DeckList)