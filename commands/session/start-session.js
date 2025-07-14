import sessionStore from '../../config/sessionStore.js';
import chalk from 'chalk';

export default function startSession() {
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
