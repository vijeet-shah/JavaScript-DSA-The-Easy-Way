let a: number[]=[1,2,3,4,5,6]

// Reverse an array.

let ReverseArray=(arr:number[]):number[]=>{
  let newArr :number[]=[];
  for(let i = arr.length-1; i>=0;i--){
    newArr.push(arr[i])
  }
  return newArr
}

console.log(ReverseArray(a))
