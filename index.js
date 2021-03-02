// Add your functions here
function map(src, c) {
    let n = []

    for(let i=0; i<src.length; i++) {
        let theElement = src[i]
        n.push(c(theElement))
    }
    return n
}

function reduce(src, c, startingPoint) {
    let n = (!!startingPoint) ? startingPoint : src[0]
    let i = (!!startingPoint) ? 0 : 1

    for (; i<src.length; i++) {
        n = c(src[i], n)
    }
    return n
}