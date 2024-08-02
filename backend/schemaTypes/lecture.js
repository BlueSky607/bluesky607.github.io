export default {
    name: "lecture",
    title: "Lecture",
    type: "document",
    fields: [
        {
            name: 'name',
            title: 'Lecture Name',
            type: 'string',
        },
        {
            name: "description",
            title: "Description",
            type: 'array',
            of: [
                {
                    type: 'block',
                    lists: [
                        { title: 'Bullet', value: 'bullet' },
                        { title: 'Number', value: 'number' }
                    ]
                }
            ],
            description: "Biography Discription"
        }
    ],
}
