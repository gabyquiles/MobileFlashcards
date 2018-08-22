import {AsyncStorage} from 'react-native'
import {formatDeck} from "./helpers"

const FLASHCARDS_KEY = 'Flashcards:data'


export function getDecks() {
    return AsyncStorage.getItem(FLASHCARDS_KEY)
        .then((results) => {
            console.log(results)
        })
}

export function getDeck(id) {

}

export function saveDeckTitle(title) {
    const data = formatDeck(title)
    return AsyncStorage.mergeItem(FLASHCARDS_KEY, JSON.stringify(data))
}

export function addCardToDeck(title, card) {

}