import {AsyncStorage} from 'react-native'

const FLASHCARDS_KEY = 'Flashcards:data'


export function getDecks() {
    return AsyncStorage.getItem(FLASHCARDS_KEY)
}

export function getDeck(id) {

}

export function saveDeckTitle(title) {
    const newDeck = {
        title: {
            title,
            questions: []
        }
    }
    return AsyncStorage.mergeItem(FLASHCARDS_KEY, JSON.stringify(newDeck))
}

export function addCardToDeck(title, card) {

}