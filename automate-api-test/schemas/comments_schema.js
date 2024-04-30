const comments = {
    type: 'object',
    properties: {
        comments: {
            type: 'array',
            items: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                    body: { type: 'string' },
                    postId: { type: 'number' },
                    user: { 
                        type: 'object',
                        properties: {
                            id: { type: 'number' },
                            username: { type: 'string' }
                        }
                    }
                }
            }
        },
        total: { type: 'number' },
        skip: { type: 'number' },
        limit: { type: 'number' }
    }
}

export default comments