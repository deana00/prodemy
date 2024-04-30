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
    // required: ['id', 'title', 'userId']
}

export default post