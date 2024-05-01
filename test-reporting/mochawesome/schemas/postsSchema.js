const baseSchema = {
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
    }
}

const postSchema = {
    ...baseSchema,
    required: ['userId']
}

const postsSchema = {
    type: 'object',
    properties: {
        posts: {
            type: 'array',
            items: {
                ...baseSchema
            }
        },
        total: { type: 'number' },
        skip: { type: 'number' },
        limit: { type: 'number' },
    }
}

const limitSkipSchema = {
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

const commentsSchema = {
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

const deletePostSchema = {
    type: 'object',
    properties: {
        ...baseSchema.properties,
        isDeleted: { type: 'boolean' },
        deletedOn: { type: 'string' }
    }
}

export { postSchema, 
         postsSchema, 
         limitSkipSchema,
         commentsSchema,
         deletePostSchema,
        }