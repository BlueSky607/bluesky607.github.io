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
            name: 'year',
            title: 'Published Year',
            type: 'string',
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            description: "Displaying order from top to bottom",
        },
        {
            name: "author",
            title: "Author",
            type: "string",
            description: "People who helped in this publication",
        },
        {
            name: "journal",
            title: "Journal",
            type: "string",
            description: "발행처",
        },
        {
            name: "link",
            title: "Link",
            type: "url",
            description: "URL to the publication",
        }
    ],
}
