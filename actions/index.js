import {formatCard} from "../utils/helpers";
import {addCardToDeck, getDeck, getDecks, saveDeckTitle} from "../utils/api";

export const RECEIVE_DECKS = "RECEIVE_DECKS"
export const RECEIVE_SINGLE_DECK = "RECEIVE_SINGLE_DECK"

export function receiveDecks(decks) {
    return {
        type: RECEIVE_DECKS,
        decks
    }
}

export function receiveSingleDeck(deck) {
    return {
        type: RECEIVE_SINGLE_DECK,
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
        saveDeckTitle(title).then((deck) => dispatch(receiveSingleDeck(deck)))
    }
}

export function handleAddCard(title, question, answer) {
    return (dispatch) => {
        const card = formatCard(question, answer)
        addCardToDeck(title, card).then((deck) => dispatch(receiveSingleDeck(deck)))
    }
}

export function handleGetDeck(title) {
    return (dispatch) => {
        getDeck(title).then((deck) => dispatch(receiveSingleDeck(deck)))
    }
}