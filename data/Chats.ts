export default {
    id: "1",
    users: [
        {
            id: "u1",
            name: "Vadim",
            imageUri:
                "https://allgamersin.com/wp-content/uploads/2020/01/Dragon-Ball-Goku-Ultra-Instinct_1.jpg",
        },
        {
            id: "u2",
            name: "Lukas",
            imageUri:
                "https://i.kinja-img.com/gawker-media/image/upload/t_original/ijsi5fzb1nbkbhxa2gc1.png",
        },
    ],
    messages: [
        {
            id: "m1",
            content: "How are you, Lukas!",
            createdAt: "2021-03-10T12:48:00.000Z",
            user: {
                id: "u1",
                name: "Vadim",
            },
        },
        {
            id: "m2",
            content: "I am good, good",
            createdAt: "2021-03-10T14:49:00.000Z",
            user: {
                id: "u2",
                name: "Lukas",
            },
        },
        {
            id: "m3",
            content: "What about you?",
            createdAt: "2021-03-10T14:49:40.000Z",
            user: {
                id: "u2",
                name: "Lukas",
            },
        },
        {
            id: "m4",
            content: "Good as well, preparing for the stream now.",
            createdAt: "2021-03-10T14:50:00.000Z",
            user: {
                id: "u1",
                name: "Vadim",
            },
        },
        {
            id: "m5",
            content: "How is your uni going?",
            createdAt: "2021-03-10T14:51:00.000Z",
            user: {
                id: "u1",
                name: "Vadim",
            },
        },
        {
            id: "m6",
            content:
                "It is a bit tough, as I have 2 specializations. How about yours? Do you enjoy it?",
            createdAt: "2021-03-10T14:49:00.000Z",
            user: {
                id: "u2",
                name: "Lukas",
            },
        },
        {
            id: "m7",
            content:
                "Big Data is really interesting. Cannot wait to go through all the material.",
            createdAt: "2021-03-10T14:53:00.000Z",
            user: {
                id: "u1",
                name: "Vadim",
            },
        },
    ],
};
