
const lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';
export const commentList = [
    {
        author: 'Muhammad',
        text: lorem,
        replies:[
            {
                author:'Ali',
                text: lorem,
                replies: [],
            }
        ],
    },
    {
        author: 'Kamel',
        text: lorem,
        replies:[
            {
                author:'Abd-elrahman',
                text: lorem,
                replies: [
                    {
                        author:'Sara',
                        text: lorem,
                        replies: [
                            {
                                author:'Adam',
                                text: lorem,
                                replies: [],
                            }
                        ],
                    }
                ],
            }
        ],
    },
    {
        author: 'Emad',
        text: lorem,
        replies:[
            {
                author:'Ahmed',
                text: lorem,
                replies: [],
            }
        ],
    },
    {
        author: 'Talal',
        text: lorem,
        replies:[
            {
                author:'Hani',
                text: lorem,
                replies: [],
            }
        ],
    },
    {
        author:'Saad',
        text: lorem,
        replies: [],
    },
    {
        author:'Amir',
        text: lorem,
        replies: [],
    }
]