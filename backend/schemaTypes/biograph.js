export default {
    name: "biograph",
    title: "Biograph",
    type: "document",
    fields: [
        {
            name: 'description',
            title: 'Description',
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
        },
    ],
}
