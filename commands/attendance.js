import sapStore from '../config/sapStore.js';
import chalk from 'chalk';
import attendanceData from '../lib/getAttendanceData.js';
import CliTable3 from 'cli-table3';
import { oraPromise } from 'ora';

const table = new CliTable3({
    head: [
        'Subject Code',
        'Subject Name',
        'Faculty Name',
        'Total Classes',
        'Attendance(%)',
    ]
});

const userDataTable = new CliTable3();

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

        if (timeDifference < 24) {
            //todo: display the saved data
            return;
        }

        // Fetch the Attendance Data again from the website

        const response = await oraPromise(attendanceData(username, password), 'Fetching Attendance Data...');

        userDataTable.push(
            {
                'Roll Number': response[0].roll,
            },
            { Date: response[0].date },
            { 'Current Time': response[0].current_time },
        );
        console.log(userDataTable.toString());


        response.shift();

        response.forEach((row) => {
            const rowData = Object.values(row);
            table.push(rowData);
        });

        console.log(table.toString());

    } catch (err) {
        console.error(chalk.red(err?.message || err));
    }
}
