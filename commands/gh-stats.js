import {
    getGitHubAPIData,
    getGitHubStreak,
    getGitHubOtherStats
} from '../lib/githubData/index.js';

export default async function ghStats(username) {
    const response = await Promise.all([
            getGitHubAPIData(username),
            getGitHubStreak(username),
        getGitHubOtherStats(username),
    ]);


    const niceResponse = response.filter(element => !!element )
    console.log(niceResponse);
}