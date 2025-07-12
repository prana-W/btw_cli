import open from 'open';
import dayjs from 'dayjs';

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

export default function addTaskToGoogleCal() {

    open(createRedirectLink({})).then(result => {
        console.log('Google Calendar link opened in your browser!');
    })
        .catch((err) => {
            console.error(err?.message || err);
        });

}