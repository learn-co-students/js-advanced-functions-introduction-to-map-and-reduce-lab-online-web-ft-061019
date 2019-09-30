// Your code here
function mapToNegativize(sourceArray) {
   let newArr = []
   for (const num in sourceArray) {
      const multiplied = sourceArray[num] * -1
      newArr.push(multiplied)
   }
   return newArr
}

function mapToNoChange(sourceArray) {
   let newArr = [...sourceArray]
   return newArr
}

function mapToDouble(sourceArray) {
   let newArr = []
   for (const num in sourceArray) {
      const doubled = sourceArray[num] * 2
      newArr.push(doubled)
   }
   return newArr
}

function mapToSquare(sourceArray) {
   let newArr = []
   for (const num in sourceArray) {
      const squared = sourceArray[num] ** 2
      newArr.push(squared)
   }
   return newArr
}

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