import sapStore from '../config/sapStore.js';
import chalk from 'chalk';
import attendanceData from '../lib/getAttendanceData.js';

export default async function attendance() {
    if (!sapStore.get('sapUsername') || !sapStore.get('sapPassword')) {
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

    const attendanceData = await attendanceData();
}
