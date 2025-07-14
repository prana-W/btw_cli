import puppeteer from 'puppeteer';
import chalk from 'chalk';
import { githubStreakUrl } from '../../constants/index.js';

// Web-Scraping data from Nirzak's GitHub Streak Stats HTML page.
// credits: https://nirzak-streak-stats.vercel.app
export default async function getGithubStreak(username) {
    try {

        class GitHubStreak {
            constructor(contribution, currentStreak, longestStreak) {
                this.contribution = contribution;
                this.currentStreak = currentStreak;
                this.longestStreak = longestStreak;
            }
        }

        const browser = await puppeteer.launch({
            headless: true,
            args: ['--no-sandbox', '--disable-setuid-sandbox']
        });

        const page = await browser.newPage();

        const url = `${githubStreakUrl}${username}`;

        await page.goto(url);

        let textElements = await page.$$eval('text', (elements) => {
            return elements.map((el) => el.textContent.trim());
        });

        if (!textElements.length) {
            throw new Error(`Failed to fetch Streak Data.`);
        }

        return {...(new GitHubStreak(
            `${textElements[0]} (${textElements[2]})`,
            `${textElements[3]} (${textElements[5]})`,
            `${textElements[6]} (${textElements[8]})`,
        ))};

    } catch (err) {
        console.error(chalk.red('Error in fetching GitHub streak data!'));
    }
}
