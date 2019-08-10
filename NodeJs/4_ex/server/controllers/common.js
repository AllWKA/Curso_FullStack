function newId(list) {
    var keys = []
    var i = 0;
    for (var k in list) {
        keys[i] = k
        i++
    };
    if (keys[0] != "0") {
        return 0;
    } else if (keys[1] != "1") {
        return 1;
    } else {
        for (let j = 0; j < keys.length - 1; j++) {
            if (keys[j + 1] - keys[j] != 1) {
                return Number.parseInt(keys[j]) + 1;
            }
        }
        return Object.keys(list).length;
    }
}