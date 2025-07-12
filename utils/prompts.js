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
];

export { addTaskToGoogleCalPrompts };
