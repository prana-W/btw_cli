import {
    getGitHubAPIData,
    getGitHubStreak,
    getGitHubOtherStats,
} from '../lib/githubData/index.js';
import chalk from 'chalk';

export default async function ghStats(username) {
    try {
        const response = await Promise.all([
            getGitHubAPIData(username),
            getGitHubStreak(username),
            getGitHubOtherStats(username),
        ]);

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
                'Error in fetching all GitHub stats! Check username and network connection.',
            ),
        );
    }
}
