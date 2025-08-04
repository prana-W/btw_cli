import chalk from 'chalk';
import upcomingContests from '../lib/codeforces/upcomingContests.js';
import { oraPromise } from 'ora';
import CliTable3 from 'cli-table3';

const table = new CliTable3({
    head: ['Contest', 'Date and Time'],
});

export default async function codeforces(username, options) {
    if (options?.stats && !username) {
        console.error(chalk.red('Username is required to view stats!'));
        return;
    } else if (!options && !username) {
        console.log('Run `btw codeforces -h` to see available options.');
    }

    // Fetches all the contests that have a negative relativeTimeSeconds, that is, which are yet to occur, meaning upcoming contests
    try {
        if (options?.contests) {
            const upcomingContestsResponse = await oraPromise(
                upcomingContests(),
                'Fetching upcoming contests...',
            );

            upcomingContestsResponse.forEach((contest) => {
                const data = [contest.name, contest.date];
                table.push(data);
            });

            console.log('\n' + table.toString());
            console.log(
                chalk.dim.bold('\nNote: ') +
                    chalk.dim.italic(
                        'In case of visual issues, try resizing your terminal window!',
                    ),
            );
        }
    } catch (err) {
        console.error(chalk.red(err?.message || err));
        return;
    }
}
