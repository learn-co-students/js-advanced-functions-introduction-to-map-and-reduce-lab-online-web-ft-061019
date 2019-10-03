function mapToNegativize(sourceArray) {
    return sourceArray.map(num => num * -1)
}

function mapToNoChange(sourceArray) {
    return sourceArray.map(num => num)
}

function mapToDouble(sourceArray) {
    return sourceArray.map(num => num * 2)
}

function mapToSquare(sourceArray) {
    return sourceArray.map(num => num ** 2)
}

function reduceToTotal(sourceArray, startingPoint=0) {
    let total = startingPoint
        sourceArray.forEach(number => {
        total = total + number
    })
    return total
}

function reduceToAllTrue(sourceArray) {
    let element = true
    sourceArray.forEach(word => {
        if (!!word === false)
            element = false
        
    })
    return element
}

function reduceToAnyTrue(sourceArray) {
   for (let i = 0; i < sourceArray.length; i++) {
        if (sourceArray[i]) return true
    }
    return false
}



