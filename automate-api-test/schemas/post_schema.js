const post = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        title: { type: 'string' },
        body: { type: 'string' },
        userId: { type: 'number' },
        tags: {
            type: 'array',
            items: { type: 'string' }
        },
        reactions: { type: 'number' }
    },
    required: ['userId']
}

export default post