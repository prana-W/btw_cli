import sapStore from '../config/sapStore.js';
import chalk from 'chalk';
import attendanceData from '../lib/getAttendanceData.js';

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
            // display the saved data
            return;
        }

        // Fetch the Attendance Data again from the website

        const response = await attendanceData(username, password);
    } catch (err) {}
}
