function mapToNegativize(sourceArray){
    let newArray = []
    sourceArray.map(element => {
      newArray.push(element * -1)
    })
    return newArray
}

function mapToNoChange (sourceArray){

    return sourceArray

}


function mapToDouble(sourceArray){
    let newArray = []
    sourceArray.map(element => {
      newArray.push(element * 2)
    })
    return newArray
}


function mapToSquare(sourceArray){
    let newArray = []
    sourceArray.map(element => {
      newArray.push(element * element)
    })
    return newArray
}

//now for reduce

function reduceToTotal(sourceArray, startingPoint = 0){
    let total = sourceArray.reduce((startingPoint, element) => {
        return startingPoint + element
    },startingPoint)
    
    return total
 }
 
 function reduceToAllTrue(sourceArray){
     for(let i = 0; i < sourceArray.length; i++) {
         if (!sourceArray[i]) return false
     }
     return true
 }
 
 function reduceToAnyTrue(sourceArray){
     for(let i = 0; i < sourceArray.length; i ++){
         if(sourceArray[i]) return true
     }
     return false 
 }
 