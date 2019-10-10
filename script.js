const test = [1, 2, 3, 4, 5, 6]







function newForEach(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i])
    }
}

function asdf(input) {
    console.log(input)
}

newForEach(test, asdf)






function newMap(array, callback) {
    let output = []
    for (let i = 0; i < array.length; i++) {
        output.push(callback(array[i]))
    }
    return output
}
function joe(a) {
    return a * 2
}
console.log(newMap(test, joe))








function newSome(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            return true
        }
    }
    return false
}
function ybrayym(b) {
    if (b % 2 === 0) {
        return true
    }
    else { return false }
}
console.log(newSome(test, ybrayym))








function newFind(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return array[i]
        }
    }
}
function devin(number) {
    if (number > 5) {
        return number
    } else return false
}
console.log(newFind(test, devin))





function newFindIndex(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i])) {
            return [i]
        }
    }
}
console.log(newFindIndex(test, devin))









function newEvery(array, callback) {
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i]) === true) {
            return true
        }
    }
    return false
}
function whatever(final) {
    if (final > 10) {
        return true
    }
    else { return false }
}
console.log(newEvery(test, whatever))









function newFilter(array, callback) {
    let result = []
    for (let i = 0; i < array.length; i++) {
        if (callback(array[i] > 2))
        result.push(callback(array[i]))
    }
    return result
}
function idk(r) {
    return r
}
console.log(newFilter(test, idk))