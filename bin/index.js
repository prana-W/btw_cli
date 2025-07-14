#!/usr/bin/env node

import { program } from 'commander';
import {
    time,
    startSession,
    endSession,
    sessionHistory,
    result,
    addEvent,
    ghStats
} from '../commands/index.js';

program
    .name('btw')
    .description(
        'btw_cli, is a basic CLI Tool built by Pranaw Kumar for doing stuffs directly from the terminal!',
    )
    .version('0.1.0');

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
    .aliases(['now', 't'])
    .description('Display the current time')
    .action(time);

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

program
    .command('result <roll>')
    .description('Displays your result')
    .action(result);

program
    .command('add-event')
    .aliases(['calender', 'cal'])
    .description('Add an event in Google Calendar')
    .action((options) => addEvent(options));

program
    .command('gh-stats <username>')
    .aliases(['gh', 'git'])
    .description('Displays your GitHub stats')
    .action(ghStats);

program.parse();
