const limitSkip = {
    type: 'object',
    properties: {
        posts: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    title: { type: 'string' },
                    reactions: { type: 'number' },
                    userId: { type: 'number' }
                }
            }
        },
        total: { type: 'number' },
        skip: { type: 'number' },
        limit: { type: 'number' }
    }
}

export default limitSkip