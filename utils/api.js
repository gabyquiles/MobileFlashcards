import {AsyncStorage} from 'react-native'
import {formatDeck} from "./helpers"

const FLASHCARDS_KEY = 'Flashcards:data'


export function getDecks() {
    return AsyncStorage.getItem(FLASHCARDS_KEY).then((decks) => JSON.parse(decks))
}

export function getDeck(title) {
    return AsyncStorage.getItem(FLASHCARDS_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            return data[title]
        })
}

export function saveDeckTitle(title) {
    const data = formatDeck(title)
    return AsyncStorage.mergeItem(FLASHCARDS_KEY, JSON.stringify(data)).then(() => (data[title]))
}

export function addCardToDeck(title, card) {
    return AsyncStorage.getItem(FLASHCARDS_KEY)
        .then((results) => {
            const data = JSON.parse(results)
            const deck = data[title]
            deck.questions.push(card)
            AsyncStorage.mergeItem(FLASHCARDS_KEY, JSON.stringify({
                [title]: deck
            }))
            return deck
        })
}

export function resetCards() {
    AsyncStorage.setItem(FLASHCARDS_KEY, JSON.stringify({}))
}