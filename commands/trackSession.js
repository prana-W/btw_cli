import sessionStore from '../config/sessionStore.js';
import timeConversion from '../utils/timeConversion.js';
import chalk from 'chalk';

function startSession() {
    if (sessionStore.get('isSessionActive')) {
        console.error(
            chalk.red(
                'An existing session is already active. Kindly end the current session before starting a new one.',
            ),
        );
        return;
    }

    sessionStore.set('startTimestamp', Date.now());
    sessionStore.set('isSessionActive', true);

    console.log(
        `Session started successfully! Run ${chalk.green('btw end-session')} or ${chalk.green('btw es')} to end the session.`,
    );
}

function endSession() {
    if (!sessionStore.get('isSessionActive')) {
        console.error(
            chalk.red(
                'No active session found. Please start a session before attempting to end it.',
            ),
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

    console.log(
        `Congrats! You worked for ${chalk.yellow(sessionDuration + ' ' + unit)}!`,
    );
}

function sessionHistory() {
    const sessionHistory = sessionStore.get('sessionHistory') || [];

    !!sessionHistory &&
        sessionHistory.map((session) => {
            console.log(session);
        });
}

export { startSession, endSession, sessionHistory };
