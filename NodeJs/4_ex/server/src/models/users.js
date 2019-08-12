var User = {
    userName: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    tweets: [
        {
            id: {
                type: Schema.Types.ObjectId,
                ref: 'Tweet'
            }
        }
    ]
}