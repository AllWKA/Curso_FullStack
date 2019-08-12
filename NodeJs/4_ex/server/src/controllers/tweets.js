function deleteTweeInUser(userId, tweetId) {
    users[userId].tweets = users[userId].tweets.filter(tweet => tweet != tweetId);
}
function addTweetToUser(userId, tweetId) {
    users[userId].tweets.push(tweetId)
}
function sortDate() {
    var tweetsArray = [];
    var i = 0;
    for (var key in tweets) {
        tweetsArray[i] = tweets[key]
        i++;
    }
    return tweetsArray.sort((a, b) => moment(a.createdAt).isAfter(b.createdAt))
}
function deleteTweet(req, res) {
    if (tweets[req.params.id] != undefined && users[tweets[req.params.id].owner] != undefined) {
        var owner = tweets[req.params.id].owner;
        delete tweets[req.params.id];
        deleteTweeInUser(owner, req.params.id);
        res.send("okidoki")
    } else {
        res.send("tweet not found")
    }
}
function createTweet(req, res) {
    if (req.body.owner != undefined && req.body.text != undefined && users[req.body.owner] != undefined) {
        var id = newId(tweets);
        var owner = req.body.owner;
        var newTweet = {
            text: req.body.text,
            owner: owner,
            createdAt: new Date()
        }
        tweets[id] = newTweet;
        addTweetToUser(owner, id)
        res.send(tweets[id]);
    } else {
        res.send("bad params")
    }
}
function getTweet(req, res) {
    if (tweets[req.params.id]) {
        res.send(tweets[req.params.id])
    } else {
        res.status(500).send('tweet not found');
    }
}
function getSortedTweets(req, res) {
    if (Object.keys(tweets).length > 0) {
        res.send(sortDate());
    } else {
        res.send("No tweets")
    }
}