import puppeteer from 'puppeteer';
import { githubStreakUrl } from '../../constants/index.js';

// Web-Scraping data from Nirzak's GitHub Streak Stats HTML page.
// credits: https://nirzak-streak-stats.vercel.app
export default async function getGithubStreak(username) {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
        const page = await browser.newPage();

        const url = `${githubStreakUrl}${username}`;

        await page.goto(url);

        let textElements = await page.$$eval('text', (elements) => {
            return elements.map((el) => el.textContent.trim());
        });

        if (!textElements.length) {
            throw new Error(`Failed to fetch Streak Data.`);
        }

        let newTextElements = [];

        for (let i = 0; i < textElements.length - 2; i += 3) {
            let arr = [
                textElements[i + 1],
                `${textElements[i]} (${textElements[i + 2]})`,
            ];
            newTextElements.push(arr);
        }

        return Object.fromEntries(newTextElements);
    } catch (err) {
        throw err;
    } finally {
        await browser.close();
    }
}
