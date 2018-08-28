import {RECEIVE_DECKS, RECEIVE_SINGLE_DECK} from "../actions"

function decks(state = {}, action) {
    switch (action.type) {
        case RECEIVE_DECKS:
            return {
                ...state,
                ...action.decks
            }
        case RECEIVE_SINGLE_DECK:
            return {
                ...state,
                [action.deck.title]: action.deck
            }
        default:
            return state
    }
}

export default decks