import Conf from 'conf';

const sessionSchema = {
    startTimestamp: {
        type: 'date',
        default: null
    },
    endTimestamp: {
        type: 'date',
        default: null
    },
    isSessionActive: {
        type: 'boolean',
        default: false
    },
    sessionHistory: {
        type: 'array',
        items: {
            type: 'string'
        }
    }
}

const sessionStore = new Conf({
    projectName: 'btw-cli',
    configName: 'sessionStore',
    sessionSchema
});

export default sessionStore;