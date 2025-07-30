import Conf from 'conf';

// Schema related to information of the SAP (Student Academic Portal) of NIT JSR
const sapSchema = {
    username: {
        type: 'string',
        default: null,
    },
    password: {
        type: 'string',
        default: null,
    },
    lastUpdated: {
        type: 'date',
        default: null,
    },
    attendanceData: {
        type: 'array',
        default: null,
    },
};

const sapStore = new Conf({
    projectName: 'btw-cli',
    configName: 'sapStore',
    sapSchema,
});

export default sapStore;
