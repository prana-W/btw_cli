import chalk from 'chalk';
import { githubApiUrl } from '../../constants/index.js';

export default async function getGitHubAPIData(username) {
    try {
        const url = `${githubApiUrl}/${username}`;

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Failed to fetch data from GitHub API');
        }

        const jsonResponse = await response.json();

        return {
            name: jsonResponse?.name || jsonResponse?.login || null,
            bio: jsonResponse?.bio || null,
            followers: jsonResponse?.followers || null,
            following: jsonResponse?.following || null,
        };
    } catch (err) {
        console.error(
            chalk.red('Error in fetching GitHub API data!'),
        );
    }
}
