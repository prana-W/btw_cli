import chalk from 'chalk';
import {codeforcesApiUrl} from '../constants/index.js';

export default async function codeforces(username, options) {
    if (options?.stats && !username) {
        console.error(chalk.red('Username is required to view stats!'));
        return;
    }

    // Fetches all the contests that have a negative relativeTimeSeconds, that is, which are yet to occur, meaning upcoming contests
    try {
        if (options?.contests) {

            const response = await fetch(`${codeforcesApiUrl}/contest.list`);
            if (!response.ok) {
                throw new Error('Failed to fetch upcoming contests. Kindly check your network or try again later.');
            }
            const allContests = (await response.json())?.result;
            // console.log(allContests);

            let upcomingContests = [];

            let index = 0;

            while (allContests[index]?.relativeTimeSeconds <= 0) {
                upcomingContests.push(allContests[index]);
                index++;
            }

            console.log(upcomingContests);

        }
    }
    catch (err) {
        console.error(chalk.red(err?.message || err));
        return;
    }


}