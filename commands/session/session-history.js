import sessionStore from '../../config/sessionStore.js';

export default function sessionHistory() {
    const sessionHistory = sessionStore.get('sessionHistory') || [];

    !!sessionHistory &&
    sessionHistory.map((session) => {
        console.log(session);
    });
}