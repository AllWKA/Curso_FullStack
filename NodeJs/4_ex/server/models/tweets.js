var Tweet = new Schema({
    text: {
        type: Number,
        max: [280, "esta toh largo lkkko que pereza"]
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});