import chalk from 'chalk';
import sessionStore from '../../config/sessionStore.js';
import timeConversion from '../../utils/timeConversion.js';

export default function endSession() {
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
