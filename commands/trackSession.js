import sessionData from '../storage/session.json' with { type: 'json' };
import timeConversion from '../utils/timeConversion.js';
import fs from 'fs';

function startSession() {
    if (sessionData.isSessionActive) {
        console.error(
            'An existing session is already active. Kindly end the current session before starting a new one.',
        );
        return;
    }
    fs.writeFileSync(
        '../storage/session.json',
        JSON.stringify({
            ...sessionData,
            startTimestamp: Date.now(),
            isSessionActive: true,
        }),
        'utf8',
    );
    console.log('Session started successfully! Run \'btw end-session\' to end the session.');
}

//todo: Pop the sessionHistory if over 5 sessions
function endSession() {
    if (!sessionData.isSessionActive) {
        console.error(
            'No active session found. Please start a session before attempting to end it.',
        );
        return;
    }
    const currentTime = Date.now();

    const { convertedTime: sessionDuration, unit } = timeConversion(
        currentTime - sessionData.startTimestamp,
    );

    fs.writeFileSync(
        '../storage/session.json',
        JSON.stringify({
            ...sessionData,
            endTimestamp: currentTime,
            isSessionActive: false,
            sessionHistory: [
                `${sessionDuration} ${unit}`,
                ...sessionData.sessionHistory,
            ],
        }),
        'utf8',
    );

    console.log(`Congrats! You worked for ${sessionDuration} ${unit}!`);
}

function sessionHistory() {
    const sessionHistory = sessionData.sessionHistory;

    sessionHistory.map((session) => {
        console.log(session);
    })
}

export { startSession, endSession, sessionHistory };
