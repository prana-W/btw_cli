import puppeteer from 'puppeteer';
import chalk from 'chalk';
import { githubLanguageStatsUrl } from '../../constants/index.js';

// Web-Scraping data from GitHub Readme Stats HTML page.
// credits: https://github-readme-stats.vercel.app
export default async function getGithubLanguageStats(username) {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
        const page = await browser.newPage();

        const url = `${githubLanguageStatsUrl}/?username=${username}&include_all_commits=true&count_private=true`;

        await page.goto(url);

        let textElements = await page.$$eval('text.lang-name', (elements) => {
            return elements.map((el) => el.textContent.trim());
        });

        let newTextElements = [];

        for (let i = 0; i < textElements.length - 1; i += 2) {
            newTextElements.push(textElements.slice(i, i + 2));
        }

        return Object.fromEntries(newTextElements);
    } catch (err) {
        throw err;
    } finally {
        await browser.close();
    }
}
