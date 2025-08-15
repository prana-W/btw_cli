import Conf from 'conf';

const linkSchema = {
    quickLink: {
        type: 'array',
        items: {
            type: 'object',
            properties: {
                name: {
                    type: 'string',
                    minLength: 1
                },
                url: {
                    type: 'string',
                   minLength: 1
                }
            },
            required: ['name', 'url']
        },
        default: []
    }
};

const linkStore = new Conf({
    projectName: 'btw-cli',
    configName: 'linkStore',
    linkSchema,
});

export default linkStore;