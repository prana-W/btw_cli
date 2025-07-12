import dayjs from 'dayjs';

const addTaskToGoogleCalPrompts = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your task?',
        initial: 'My Task',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description of your task?',
        initial: 'My Task Description',
    },
    {
        type: 'input',
        name: 'start',
        message: 'When does your task start?',
        initial: 'Leave blank for current time and edit later. Examples: 1d, 2w, etc',
    },
];

export { addTaskToGoogleCalPrompts };
