// Store user details and preferences automatically to use in the future

import Conf from 'conf';

const userSchema = {
    roll: {
        type: 'string',
        default: null,
    },
    githubUsername: {
        type: 'string',
        default: null,
    },
    codeforcesHandle: {
        type: 'string',
        default: false,
    },
};

const userStore = new Conf({
    projectName: 'btw-cli',
    configName: 'userStore',
    userSchema,
});

export default userStore;
