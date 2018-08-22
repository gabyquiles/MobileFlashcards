export function formatDeck(title) {
    return {
        [title]: {
            title,
            questions: []
        }
    }
}

export function getDailyReminder() {
    return {
        today: "Remember to study today!"
    }
}