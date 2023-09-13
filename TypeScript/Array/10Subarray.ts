let a: number[] = [1, 2, 3, 4, 5];
let b: number[] = [1,4,2, 3, 5];
let c: number[] = [0,-7,9,6,-3,-4,-1,3,1];

let subArray = (arr: number[]): number[][] => {
    let mySort:number =(a:any,b:any)=> a > b ? 1 : a < b ? -1 : 0;
  arr = arr.sort(mySort);
  let newArr: number[][] = []; 
  
  for (let i = 0; i < arr.length; i++) {
    newArr.push([arr[i]]); 
    
    for (let j = i + 1; j < arr.length; j++) {
      newArr.push(arr.slice(i, j + 1)); 
    }
  }

  return newArr;
}

console.log(subArray(a));
console.log(subArray(b));
console.log(subArray(c));
