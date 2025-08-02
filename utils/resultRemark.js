import chalk from 'chalk';
import CliTable3 from 'cli-table3';

const attendanceTable = new CliTable3({
    style: {
        compact: true,
    },
});

// Comments on your Result because why not?!
export default function restartSession(sgpa, cgpa, name) {
    let remark = null;
    if (cgpa >= 9) {
        remark = 'touch grass!';
    } else if (cgpa >= 8.5 && cgpa < 9) {
        remark = 'i bet you want 9+';
    } else if (cgpa >= 8 && cgpa < 8.5) {
        remark = 'you are in safe zone!';
    } else if (cgpa >= 7 && cgpa < 8) {
        remark = 'skills >>> cgpa, hehehe';
    } else if (cgpa >= 6 && cgpa < 7) {
        remark = 'you can do better';
    } else if (cgpa < 6 && cgpa > 0) {
        remark = 'go study now!';
    } else if (cgpa === 0) {
        remark = 'no comments...';
    } else {
        remark = 'Invalid CGPA value.';
    }

    attendanceTable.push(
        {
            Name: name,
        },
        {
            SGPA: chalk.bold(sgpa),
        },
        {
            CGPA: chalk.bold(cgpa),
        },
    );

    console.log(attendanceTable.toString());
    console.log(chalk.italic(remark));
}
