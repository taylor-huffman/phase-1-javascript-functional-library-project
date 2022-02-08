function inputConversion(data) {
    let modifiedData = []
    if (Array.isArray(data)) {
        modifiedData = [...data]
    } else {
        modifiedData = Object.values(data)
    }
    return modifiedData
}


function myEach(collection, callback) {
    for (let item in collection) {
        callback(collection[item])
    }
    return collection
}


function myMap(collection, callback) {
    let modifiedCollection = inputConversion(collection)
    return modifiedCollection.map(item => callback(item))
}


function myReduce(collection, callback, acc) {
    let modifiedCollection = inputConversion(collection)
    if(!acc) {
        acc = modifiedCollection[0]
        modifiedCollection = modifiedCollection.slice(1)
    }
    for (let item of modifiedCollection) {
        acc = callback(acc, item, modifiedCollection)
    }
    return acc
}


function myFind(collection, predicate) {
    let modifiedCollection = inputConversion(collection)
    return modifiedCollection.find(element => predicate(element))
}


function myFilter(collection, predicate) {
    let modifiedCollection = inputConversion(collection)
    return modifiedCollection.filter(element => predicate(element))
}


function mySize(collection) {
    let modifiedCollection = inputConversion(collection)
    let itemCount;
    if (modifiedCollection === []) {
        itemCount = 0
    } else {
        itemCount = modifiedCollection.length
    }
    return itemCount
}


function myFirst(array, n) {
    if(!n) {
        return array[0]
    } else {
        return array.slice(0, n)
    }
}

function myLast(array, n) {
    let modifiedArray = [...array]
    if(!n) {
        return modifiedArray.pop()
    } else {
        return modifiedArray.slice(-n)
    }
}


function mySortBy(array, callback) {
    let modifiedArray = [...array] 
    if(typeof array[0] === 'number') {
        return modifiedArray.sort((a, b) => callback(a) - callback(b))
    } else {
        return modifiedArray.sort((a, b) => {
            if (callback(a) < callback(b)) {
              return -1
            }
            if (callback(a) > callback(b)) {
              return 1
            }
            return 0
          })
    }
}


function myFlatten(array, boolean, newArr=[]) {
    newArr
    if(boolean === true) {
        newArr = array.flat()
        return newArr
    }
    const stack = [...array]
    const res = []
    while (stack.length) {
        const next = stack.pop()
        if (Array.isArray(next)) {
            stack.push(...next)
        } else res.push(next)
    }
    newArr = res.reverse()
    return newArr
}


function myKeys(object) {
    return Object.keys(object)
}


function myValues(object) {
    return Object.values(object)
}