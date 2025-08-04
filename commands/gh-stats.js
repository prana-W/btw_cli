import {
    getGitHubAPIData,
    getGitHubStreak,
    getGitHubOtherStats,
} from '../lib/githubData/index.js';
import chalk from 'chalk';
import { oraPromise } from 'ora';

export default async function ghStats(username) {

    if (!username) {
        console.error(chalk.red('Kindly enter a valid username!'));
        return;
    }

    try {
        const response = await oraPromise(
            Promise.all([
                getGitHubAPIData(username),
                getGitHubStreak(username),
                getGitHubOtherStats(username),
            ]),
            'Fetching GitHub Stats...',
        );

        const niceResponse = response.filter((element) => !!element);

        if (niceResponse.length !== 3) {
            throw new Error('Not all data fetched successfully.');
        }

        const veryNiceResponse = {
            'GitHub Account Stats': { ...niceResponse[0], ...niceResponse[1] },
            'Most Used Languages': { ...niceResponse[2] },
        };
        console.log(veryNiceResponse);
    } catch (err) {
        console.error(
            chalk.red(
                'Error encountered! Kindly check your username and network connection or try again later.',
            ),
        );
    }
}
