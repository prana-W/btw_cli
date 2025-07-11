#!/usr/bin/env node
import { program } from 'commander';
import { currentTime } from './commands/currentTime.js';
import {
    startSession,
    endSession,
    sessionHistory,
} from './commands/trackSession.js';

program
    .name('btw')
    .description(
        'btw - by the W, is a basic CLI Tool built by Pranaw Kumar for doing stuffs directly from the terminal!',
    )
    .version('1.0.0');

program
    .command('greet <name>')
    .description('Greet someone')
    .option('-u, --uppercase', 'Uppercase the name')
    .action((name, options) => {
        const message = options.uppercase ? name.toUpperCase() : name;
        console.log(`Hello, ${message}!`);
    });

program
    .command('time')
    .description('Display the current time')
    .action(currentTime);

program
    .command('start-session')
    .aliases(['start', 'ss'])
    .description('Starts and tracks a work session')
    .action(startSession);

program
    .command('end-session')
    .aliases(['end', 'es'])
    .description('Ends and displays the duration of the current work session')
    .action(endSession);

program
    .command('session-history')
    .aliases(['session-h', 'sh'])
    .description('Displays the history of the past 5 sessions')
    .action(sessionHistory);

program.parse();
