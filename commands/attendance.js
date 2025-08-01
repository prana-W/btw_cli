import sapStore from '../config/sapStore.js';
import chalk from 'chalk';
import attendanceData from '../lib/getAttendanceData.js';
import CliTable3 from 'cli-table3';
import { oraPromise } from 'ora';

const table = new CliTable3({
    head: ['Sub. Code', 'Subject', 'Classes', 'Attendance(%)'],
    style: {
        compact: true,
    },
});

const userDataTable = new CliTable3({
    style: {
        compact: true,
    },
});

export default async function attendance() {
    try {
        const username = sapStore.get('username');
        const password = sapStore.get('password');

        if (!username || !password) {
            console.log(
                chalk.red(
                    'Please set your SAP credentials first using the `btw set-sap` command.',
                ),
            );
            return;
        }

        const timeDifference =
            (sapStore.get('lastUpdated') - Date.now()) / (1000 * 60 * 60); // in hours

        let response;

        // Display the last saved data if request is made within an hour
        if (timeDifference < 1) {
            response = sapStore.get('attendanceData');
        } else {
            // Fetch the Attendance Data again from the website and store it for use within 24 hours

            response = await oraPromise(
                attendanceData(username, password),
                'Fetching Attendance Data...',
            );

            sapStore.set('attendanceData', response);
            sapStore.set('lastUpdated', Date.now());
        }

        userDataTable.push(
            {
                'Roll Number': response[0].roll,
            },
            { Date: response[0].date },
            { 'Last Updated': response[0].current_time },
        );
        console.log(userDataTable.toString());

        response.shift();

        response.forEach((row) => {
            const rowData = Object.values(row);
            table.push(rowData);
        });

        console.log(table.toString());

        console.log(
            chalk.red('Note: ') +
                chalk.dim(
                    'In case of visual issues, please try resizing your terminal window.',
                ),
        );
    } catch (err) {
        console.error(chalk.red(err?.message || err));
    }
}

// if you seeing this, dm me anywhere to win 25rs!!
