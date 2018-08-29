import {AsyncStorage} from 'react-native'
import {Notifications, Permissions} from 'expo'

const NOTIFICATIONS_KEY = "MobileFlashcards:notifications"

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

export function clearLocalNotification() {
    return AsyncStorage.removeItem(NOTIFICATIONS_KEY).then(Notifications.cancelAllScheduledNotificationsAsync)

}

// Show notification tomorrow at 8 pm EST
export function setLocalNotification() {
    AsyncStorage.getItem(NOTIFICATIONS_KEY)
        .then(JSON.parse)
        .then((data) => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({status}) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync()

                            let tomorrow = new Date()
                            tomorrow.setDate(tomorrow.getDate() + 1)
                            tomorrow.setHours(0)
                            tomorrow.setMinutes(0)

                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(),
                                {
                                    time: tomorrow,
                                    repeat: 'day'
                                }
                            )
                            AsyncStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(true))
                        }
                    })
            }
        })
}

function createNotification() {
    return {
        title: 'Remember to study!',
        body: "👋 don't forget to take at least one quiz for today!",
        ios: {
            sound: true
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true
        }
    }
}