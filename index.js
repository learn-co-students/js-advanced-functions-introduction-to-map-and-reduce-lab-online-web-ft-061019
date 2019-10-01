//Map

function mapToNegativize(sourceArray) {
    let newArray = []
    for (const num in sourceArray) {
       const negative = sourceArray[num] * -1
       newArray.push(negative)
    }
    return newArray
 }

 function mapToNoChange(sourceArray) {
    let newArray = [...sourceArray]
    return newArray
 }

 function mapToDouble(sourceArray) {
    let newArray = []
    for (const num in sourceArray) {
       const doubled = sourceArray[num] * 2
       newArray.push(doubled)
    }
    return newArray
 }

 function mapToSquare(sourceArray) {
    let newArray = []
    for (const num in sourceArray) {
       const doubled = sourceArray[num] ** 2
       newArray.push(doubled)
    }
    return newArray
 }

// Reduce

 function reduceToTotal(sourceArray, startingPoint = 0) {
    let finalTotal = startingPoint
    sourceArray.forEach(item => {
       finalTotal = finalTotal + item
    });
    return finalTotal
 }

 function reduceToAllTrue(sourceArray) {
    let allTrue = true 
    sourceArray.forEach(item => {
       if (!!item === false) {
          allTrue = false
       }
    })
    return allTrue
 }

 function reduceToAnyTrue(sourceArray) {
    let anyTrue = false
    sourceArray.forEach(item => {
       if (!!item === true) {
          anyTrue = true
       }
    })
    return anyTrue
 }