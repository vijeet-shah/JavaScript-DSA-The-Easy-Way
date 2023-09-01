let array: number[] = [3, 6, 2, 9, 23,3,5, 7, 4 ,5,6,6]

// Remove duplicate elements from an array.
let RemoveDuplicate =(arr:number[], element: number):number[] =>{
  let  newArr : number[]= [];
  arr.forEach((e)=>{
    if(!newArr.includes(e)){
      newArr.push(e)
    }
  })
  return newArr;
}

console.log(RemoveDuplicate(array))
