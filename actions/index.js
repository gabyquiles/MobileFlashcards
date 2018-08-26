import {formatCard, formatDeck} from "../utils/helpers";
import {addCardToDeck, getDecks, saveDeckTitle} from "../utils/api";

export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const ADD_DECK = "ADD_DECK"
export const ADD_CARD = "ADD_CARD"

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

export function addCard(title, card) {
    return {
        type: ADD_CARD,
        title,
        card
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

export function handleAddCard(title, question, answer) {
    return (dispatch) => {
        const card = formatCard(question, answer)
        dispatch(addCard(title, card))
        addCardToDeck(title, card)
    }
}
