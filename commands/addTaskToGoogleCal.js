import open from 'open';
import dayjs from 'dayjs';
import enquirer from 'enquirer';
import { addTaskToGoogleCalPrompts as questions } from '../utils/prompts.js';

const { prompt } = enquirer;
const currentTime = dayjs().locale('in').format('YYYYMMDDTHHmmss') + 'Z';

function createRedirectLink({
    title = 'Title',
    description = 'Description',
    start = currentTime,
    end = currentTime,
}) {
    const baseUrl =
        'https://calendar.google.com/calendar/render?action=TEMPLATE';

    return `${baseUrl}&text=${encodeURIComponent(title)}&dates=${start}/${end}&details=${encodeURIComponent(description)}`;
}

export default async function addTaskToGoogleCal() {
    try {
        const answers = await prompt(questions);

        const response = await open(createRedirectLink(answers));

        if (!response) throw new Error('There was an error opening the link.');
    } catch (err) {
        console.error(err?.message || err);
    }
}
