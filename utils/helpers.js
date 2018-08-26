export function formatDeck(title) {
    return {
        [title]: {
            title,
            questions: []
        }
    }
}

export function formatCard(question, answer) {
    return {
        question,
        answer
    }
}

export function getDailyReminder() {
    return {
        today: "Remember to study today!"
    }
}