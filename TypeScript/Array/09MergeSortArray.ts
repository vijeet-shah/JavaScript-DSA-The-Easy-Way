let a: number[]=[1,2,3,4,5]
let b: number[]=[6,8,6,9,3,5,2]
let c: number[]=[-2,6,-4,7,-3,0,2,1]


// Merge two sorted arrays into a single sorted array.

let MergeSortedArray=(arr1:number[], arr2:number[]):number[]=>{
  let mySort:number =(a:any,b:any)=> a > b ? 1 : a < b ? -1 : 0;
  let newArr : number[] = [...arr1,...arr2];
  return newArr.sort(mySort)
}

console.log(MergeSortedArray(a,b))
console.log(MergeSortedArray(a,c))


