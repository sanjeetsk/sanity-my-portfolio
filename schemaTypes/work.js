// schemas/work.js
export default {
    name: 'work',
    title: 'Work',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
            description: 'Title of the project',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Brief description of the project',
        },
        {
            name: 'imgUrl',
            title: 'Image URL',
            type: 'image',
            description: 'Image representing the project',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'teckStacks',
            title: 'Tech Stacks',
            type: 'array',
            of: [{ type: 'image' }],
            description: 'Technologies used in the project',
        },
        {
            name: 'projectLink',
            title: 'Project Link',
            type: 'url',
            description: 'URL to the live project',
        },
        {
            name: 'codeLink',
            title: 'Code Link',
            type: 'url',
            description: 'URL to the source code repository',
        },
        {
            name: 'youtubeLink',
            title: 'Youtube Link',
            type: 'url',
            description: 'URL to the video description'
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'string' }],
            description: 'Tags to categorize the project',
        },
        {
            name: 'createdAt',
            title: 'Created At',
            type: 'datetime',
            description: 'Date when the project was created',
        },
    ],
};
