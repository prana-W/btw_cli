import puppeteer from 'puppeteer';

export default async function getAttendanceData() {
    // Launch the browser and open a new blank page
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('https://online.nitjsr.ac.in/endsem/Login.aspx');

    await page.setViewport({ width: 2000, height: 1000 });

    const username = sapStore.get('username');
    const password = sapStore.get('password');

    // Logging in to the site
    await page.type('input[name="txtuser_id"]', username);
    await page.type('input[name="txtpassword"]', password);
    await page.click('input[name="btnsubmit"]');

    await page.waitForNavigation();

    await page.goto(
        'https://online.nitjsr.ac.in/endsem/StudentAttendance/ClassAttendance.aspx',
    );

    // Selects the useful tdElements from the page.
    // TODO: As of now, I have hardcoded the index of the td elements to be selected. This can be improved by using a more dynamic approach.
    let tdElements = await page.$$eval('td', (elements) => {
        return elements
            .filter((element, index) => element !== null && index > 9)
            .map((element) => {
                return element.innerText;
            });
    });

    // Making a class for a Subject
    class Subject {
        constructor(
            serial_number,
            subject_code,
            subject_name,
            faculty_name,
            total_classes,
            attendance,
        ) {
            this.serial_number = serial_number;
            this.subject_code = subject_code;
            this.subject_name = subject_name;
            this.faculty_name = faculty_name;
            this.total_classes = total_classes;
            this.attendance = attendance;
        }
    }

    let jsonData = [];

    for (let i = 0; i < tdElements.length; i += 7) {
        jsonData.push({ ...new Subject(...tdElements.slice(i, i + 7)) });
    }
    // Remove the last useless object
    jsonData.pop();

    const extraInformation = {
        user: process.env.USER_ID,
        date: new Date().toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'long',
            year: 'numeric',
        }),
        current_time: new Date().toLocaleTimeString(),
    };
    jsonData.unshift(extraInformation);

    console.log(jsonData);

    await browser.close();
}
