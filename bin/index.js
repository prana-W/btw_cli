#!/usr/bin/env node

import { program } from 'commander';
import {
    btw,
    time,
    startSession,
    endSession,
    sessionHistory,
    result,
    addEvent,
    ghStats,
} from '../commands/index.js';

program
    .name('btw')
    .description(
        'btw_cli is a simple and powerful Command Line Interface (CLI) designed to help you perform various useful tasks directly from your terminal.',
    )
    .action(btw)
    .version('0.1.0-alpha');

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
    .action(addEvent);

program
    .command('gh-stats <username>')
    .aliases(['github', 'gh'])
    .description('Displays your GitHub stats')
    .action(ghStats);

program.parse();
