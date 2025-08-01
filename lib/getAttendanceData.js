import puppeteer from 'puppeteer';
import { sapHomePageUrl, attendancePageUrl } from '../constants/index.js';

// Making a class for a Subject
class Subject {
    constructor(subject_code, subject_name, total_classes, attendance) {
        this.subject_code = subject_code;
        this.subject_name = subject_name;
        this.total_classes = total_classes;
        this.attendance = attendance;
    }
}

export default async function getAttendanceData(username, password) {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    try {
        const page = await browser.newPage();

        // Navigate the page to a URL
        await page.goto(sapHomePageUrl);

        await page.setViewport({ width: 2000, height: 1000 });

        // Logging in to the site
        await page.type('input[name="txtuser_id"]', username);
        await page.type('input[name="txtpassword"]', password);
        await page.click('input[name="btnsubmit"]');

        await page.waitForNavigation();

        await page.goto(attendancePageUrl);

        // Selects the useful tdElements from the page.
        // TODO: As of now, I have hardcoded the index of the td elements to be selected. This can be improved by using a more dynamic approach.
        let tdElements = await page.$$eval('td', (elements) => {
            return elements
                .filter((element, index) => element !== null && index > 9)
                .map((element) => {
                    return element.innerText;
                });
        });

        let jsonData = [];

        for (let i = 0; i < tdElements.length; i += 7) {
            jsonData.push({
                ...new Subject(
                    ...tdElements.slice(i + 1, i + 3),
                    ...tdElements.slice(i + 4, i + 7),
                ),
            });
        }

        // Remove the last useless object
        jsonData.pop();

        const extraInformation = {
            roll: username,
            date: new Date().toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'long',
                year: 'numeric',
            }),
            current_time: new Date().toLocaleTimeString(),
        };
        jsonData.unshift(extraInformation);

        if (jsonData.length <= 1) {
            throw new Error(
                'Kindly check your SAP credentials or try again later. To resubmit your credentials, use the `btw set-sap` command.',
            );
        }

        return jsonData;
    } catch (err) {
        throw err;
    } finally {
        await browser.close();
    }
}
