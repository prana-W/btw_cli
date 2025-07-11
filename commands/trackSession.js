import sessionStore from '../config/sessionStore.js';
import timeConversion from '../utils/timeConversion.js';

function startSession() {
    if (sessionStore.get('isSessionActive')) {
        console.error(
            'An existing session is already active. Kindly end the current session before starting a new one.',
        );
        return;
    }

    sessionStore.set('startTimestamp', Date.now());
    sessionStore.set('isSessionActive', true);

    console.log(
        "Session started successfully! Run 'btw end-session' to end the session.",
    );
}

function endSession() {
    if (!sessionStore.get('isSessionActive')) {
        console.error(
            'No active session found. Please start a session before attempting to end it.',
        );
        return;
    }
    const currentTime = Date.now();

    const { convertedTime: sessionDuration, unit } = timeConversion(
        currentTime - sessionStore.get('startTimestamp'),
    );

    const sessionHistory = sessionStore.get('sessionHistory');
    if (sessionHistory?.length >= 5) {
        sessionStore.set('sessionHistory', sessionHistory.pop());
    }

    sessionStore.set('endTimestamp', currentTime);
    sessionStore.set('isSessionActive', false);
    if (sessionHistory?.length > 0)
        sessionStore.set('sessionHistory', [
            `${sessionDuration} ${unit}`,
            ...sessionHistory,
        ]);
    else sessionStore.set('sessionHistory', [`${sessionDuration} ${unit}`]);

    console.log(`Congrats! You worked for ${sessionDuration} ${unit}!`);
}

function sessionHistory() {
    const sessionHistory = sessionStore.get('sessionHistory') || [];

    !!sessionHistory &&
        sessionHistory.map((session) => {
            console.log(session);
        });
}

export { startSession, endSession, sessionHistory };
