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
    let total = startingPoint
    for (let i = 0; i < sourceArray.length; i++ ) {
      total = total + sourceArray[i]
    }
    return total
 }

 function reduceToAllTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (!sourceArray[i]) return false
      }
      return true
 }

 function reduceToAnyTrue(sourceArray) {
    for (let i = 0; i < sourceArray.length; i++ ) {
        if (sourceArray[i]) return true
      }
      return false
 }