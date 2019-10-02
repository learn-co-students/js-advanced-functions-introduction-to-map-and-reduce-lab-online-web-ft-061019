// Your code here
function mapToNegativize(array) {
    let newArray = []
    for (let num in array) {
        newArray.push(array[num] * -1)
    }
    return newArray
}

function mapToNoChange(array) {
    let newArray = [...array]
    return newArray
}

function mapToDouble(array) {
    let newArray = []
    for (let num in array) {
        newArray.push(array[num] * 2)
    }
    return newArray
}

function mapToSquare(array) {
    let newArray = []
    for (let num in array) {
        newArray.push(array[num] ** 2)
    }
    return newArray
}

function reduceToTotal(array, startingPoint = 0) {
    let total = startingPoint
    array.forEach(num => {
        total = total + num
    })
    return total
}

function reduceToAllTrue(array) {
    let truthy = true
    array.forEach(i => {
        if (!!i === false){
            truthy = false
        }
    })
    return truthy
}

function reduceToAnyTrue(array) {
    for (let i = 0; i < array.length; i++ ) {
        if (array[i]) return true
    }
    return false
}