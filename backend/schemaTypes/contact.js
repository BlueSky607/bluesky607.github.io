export default {
    name: "contact",
    title: "Contact",
    type: "document",
    fields: [
        {
        name: "name1",
        title: "Name1",
        type: "string",
        description: "Your Name"
        },
        {
            name: "name2",
            title: "Name2",
            type: "string",
            description: "Other Names"
        },
        {
          name: "role",
          title: "Role",
          type: "string",
          description: "Your Role"
        },
        {
        name: "email",
        title: "Email",
        type: "email",
        },
        {
            name: "phone",
            title: "Phone Number",
            type: "string",
        },
        {
            name: "department",
            title: "Department",
            type: "string",
        },
        {
            name: "image",
            title: "Profile Image",
            type: "image",
            options: {
              hotspot: true
          },
        },
    ]
}