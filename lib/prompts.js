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
        initial:
            'Leave blank for current time and edit later. Examples: 1d, 2w, etc',
    },
];

const sapCredentialsPrompts = [
    {
        type: 'input',
        name: 'username',
        message: 'Enter your Username/Roll Number:',
        required: true,
    },
    {
        type: 'password',
        name: 'password',
        message: 'Enter your Password for SAP Portal:',
        required: true,
    },
];

export { addTaskToGoogleCalPrompts, sapCredentialsPrompts };
