import open from 'open';
import dayjs from 'dayjs';
import enquirer from 'enquirer';
import { addTaskToGoogleCalPrompts as questions } from '../lib/prompts.js';
import chalk from 'chalk';

const { prompt } = enquirer;

function createRedirectLink({
    title = 'Title',
    description = 'Description',
    start,
    end,
}) {
    const baseUrl =
        'https://calendar.google.com/calendar/render?action=TEMPLATE';

    return `${baseUrl}&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(description)}`;
}

export default async function addEvent() {
    try {
        const answers = await prompt(questions);

        // i can't make the below code beautiful. i am sowwy
        let startTime;

        const timeVariable = answers?.start.split(''); //Makes an array from start input ([1, 'd'])
        if (timeVariable.length !== 2) {
            startTime = dayjs().locale('in').format('YYYYMMDD');
        } else
            startTime = dayjs()
                .add(timeVariable[0], timeVariable[1])
                .locale('in')
                .format('YYYYMMDD');

        const response = await open(
            createRedirectLink({
                ...answers,
                start: startTime,
                end: startTime,
            }),
        );

        if (!response) throw new Error('There was an error opening the link.');

        console.log('Kindly confirm the details in your browser.');
    } catch (err) {
        console.error(chalk.red(err?.message || err));
    }
}
