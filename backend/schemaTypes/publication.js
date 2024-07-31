export default {
    name: "publication",
    title: "Publication",
    type: "document",
    fields: [
        {
            name: 'name',
            title: 'Title',
            type: 'string',
            description: "Publication Title",
        },
        {
            name: 'date',
            title: 'Published Date',
            type: 'date',
        },
        {
            name: 'category',
            title: 'Published Category',
            type: 'string',
            description: "Category of the publication (구분)"
        },
    ],
}
