function getMinMax(arr){
    return{
        min : Math.min(...arr),
        max : Math.max(...arr)
    };
}
let num = [1,2,3,4,5,6,7,8]
console.log(getMinMax(num))

// In Loops

function getMinMaxloop(arr1){
    if(arr1.length===0) return {min1 :null ,max1 :null}

    let min1 = arr1[0]
    let max1 = arr1[0]

    for(i = 1; i<arr1.length;i++){
        if(arr1[i] < min1)
            min1 = arr1[i]
        if(arr1[i] > max1)
            max1 = arr1[i]
    }
    return {min1,max1}
}
let number = [2,3,5,8,99,4,6,22,11,56,30]
console.log(getMinMaxloop(number))