const countingSheep = function (count) {

    if (count === 0) {
        return console.log('All sheep jumped over the fence')
    }
    console.log(count + ': Another sheep jumped over the fence')
    return countingSheep(--count)
}
countingSheep(3);