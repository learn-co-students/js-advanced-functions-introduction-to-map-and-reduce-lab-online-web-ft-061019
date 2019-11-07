// Your code here
function mapToNegativize(array){
    let negativeArray = [ ]
    for(let i = 0; i < array.length; i++){
        negativeArray.push(-1 * array[i])
    }
    return negativeArray
}

function mapToNoChange(array){
    let unchangedArray = [ ]
    for(let i = 0; i < array.length; i++){
        unchangedArray.push(array[i]) //do nothing!
    }
    return unchangedArray
}

function mapToDouble(array){
    let doubledArray = [ ]
    for(let i = 0; i < array.length; i++){
        doubledArray.push(array[i] * 2)
    }
    return doubledArray
}

function mapToSquare(array){
    let squaredArray = [ ]
    for(let i = 0; i < array.length; i++){
        squaredArray.push(array[i] ** 2)
    }
    return squaredArray
}

function reduceToTotal(array, total=0){
    array.forEach(element => total += element)
    return total
}

function reduceToAllTrue(array){
    for(let i = 0; i < array.length; i++){
        if (!array[i]) return false
    }
    return true
}

function reduceToAnyTrue(array){
    for(let i = 0; i < array.length; i++){
        if (array[i]) return true;
    }
    return false;
}