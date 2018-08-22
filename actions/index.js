import {formatDeck} from "../utils/helpers";
import {getDecks, saveDeckTitle} from "../utils/api";

export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_DECK = "ADD_DECK"

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function addDeck(deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function handleInitialData() {
    return (dispatch) => {
        getDecks().then((decks) => {
            dispatch(receiveDecks(decks))
        })
    }
}

export function handleAddDeck(title) {
    return (dispatch) => {
        const deck = formatDeck(title)
        dispatch(addDeck(deck))
        saveDeckTitle(title)
    }
}