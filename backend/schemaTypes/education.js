export default {
    name: "education",
    title: "Education",
    type: "document",
    fields: [
        {
            name: 'school',
            title: 'School Name',
            type: 'string',
        },
        {
            name: 'degree',
            title: 'Degree Name',
            type: 'string',
        },
        {
            name: 'major',
            title: 'Major Name',
            type: 'string',
        },
        {
            name: 'year',
            title: 'Year',
            type: 'string',
        },
        {
            name: "order",
            title: "Order",
            type: "number",
            description: "Displaying order from top to bottom",
        },
    ],
}
