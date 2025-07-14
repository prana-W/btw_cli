import chalk from 'chalk';

// Comments on your Result because why not?!
export default function restartSession(sgpa, cgpa, name) {
    let remark = null;
    if (cgpa >= 9.5) {
        remark = 'send me notes... Quick!';
    } else if (cgpa >= 8 && cgpa < 9.5) {
        remark = "Keep it up! You're doing great!";
    } else if (cgpa >= 7 && cgpa < 8) {
        remark = "Just a bit more efforts! You're almost there!";
    } else if (cgpa < 6) {
        remark = 'go study now!';
    } else {
        remark = 'Invalid CGPA value.';
    }

    console.log(
        `Hello, ${chalk.magenta(name)}!\n${chalk.bold('Your SGPA:')} ${chalk.green(sgpa)} and ${chalk.bold('Your CGPA:')} ${chalk.green(cgpa)}\n${chalk.italic(remark)}`,
    );
}
