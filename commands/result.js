import resultRemark from '../utils/resultRemark.js';
import { oraPromise } from 'ora';
import chalk from 'chalk';

export default async function result(roll) {
    if (!roll || roll.length < 10) {
        console.error(chalk.red('Kindly enter a valid roll number!'));
        return;
    }

    roll = roll.toUpperCase();

    if (roll === '2024UGEE029') {
        console.log(chalk.yellow('You dare use my own spells against me?'));
        return;
    }
    if (roll === '2024UGEE029-F') roll = '2024UGEE029';

    try {
        const allResult = await oraPromise(
            fetch('https://cgpa-server.vercel.app/api/v1/getResults'),
            'Fetching your result...',
        );

        const allData = await allResult.json();
        const requiredResultData = allData.filter(
            (result) => result.Regn === roll,
        );

        if (!requiredResultData)
            throw new Error(
                'There seems to be an error, please try again later!',
            );

        resultRemark(
            requiredResultData[0].Sgpa,
            requiredResultData[0].Cgpa,
            requiredResultData[0].Name,
        );
    } catch (err) {
        console.error(chalk.red(err?.message || err));
    }
}
