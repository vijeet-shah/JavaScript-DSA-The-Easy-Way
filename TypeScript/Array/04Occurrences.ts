let array: number[] = [3, 6, 2, 9, 23,3,5, 7, 4 ,5,6,6]

// Count the occurrences of a specific element in an array.
let occurrences =(arr:number[], element: number):number =>{
  let x:number = 0;
    arr.forEach((e)=>{
      if(e === element){
        x++;
      }
    })
  if(x==0){
     console.log(`No ${element} element Present`)
    return;
  }
  return x;
}

console.log(occurrences(array,6))
console.log(occurrences(array,12))
console.log(occurrences(array,5))
