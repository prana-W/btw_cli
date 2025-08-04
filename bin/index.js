#!/usr/bin/env node

import updateNotifier from 'update-notifier';
import enquirer from 'enquirer';
import pkg from '../package.json' with { type: 'json' };
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
    attendance,
    setSap,
    codeforces,
} from '../commands/index.js';

const notifier = updateNotifier({ pkg });

const { prompt } = enquirer;

if (notifier.update) {
    const { shouldUpdate } = await prompt({
        type: 'confirm',
        name: 'shouldUpdate',
        message: `A new version (${notifier.update.latest}) is available! You’re on ${notifier.update.current}. Do you want to update now?`,
    });

    if (shouldUpdate) {
        const { execSync } = await import('child_process');
        try {
            execSync(`npm install -g ${pkg.name}`, { stdio: 'inherit' });
            console.log('✅ Successfully updated. Please rerun the command.');
            process.exit(0);
        } catch (err) {
            console.error(
                '❌ Update failed. Try running manually: npm i -g',
                pkg.name,
            );
        }
    }
}

program
    .name('btw')
    .description(
        'btw_cli is a simple and powerful Command Line Interface (CLI) designed to help you perform various useful tasks directly from your terminal.',
    )
    .action(btw)
    .version(pkg.version);

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
    .command('result [roll]')
    .description('Displays your result')
    .action(result);

program
    .command('add-event')
    .aliases(['calender', 'cal'])
    .description('Add an event in Google Calendar')
    .action(addEvent);

program
    .command('gh-stats [username]')
    .aliases(['github', 'gh'])
    .description('Displays your GitHub stats')
    .action(ghStats);

program
    .command('attendance')
    .aliases(['att', 'a'])
    .description('Displays your Attendance Data')
    .action(attendance);

program
    .command('set-sap')
    .aliases(['sap'])
    .description('Set your SAP Credentials for accessing Attendance Data')
    .action(setSap);

program
    .command('codeforces [username]')
    .aliases(['cf'])
    .option('-c, --contests', 'Check upcoming contests')
    .option('-s, --stats', 'Check profile Stats')
    .description('View upcoming contests and stats on Codeforces')
    .action(codeforces);

program.parse(process.argv);
