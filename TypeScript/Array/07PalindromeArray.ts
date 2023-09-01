let a: number[]=[1,2,3,4,5]
let b: number[]=[1,2,0,2,1]
let c: number[]=[0,0,0,0]

// Check if an array is a palindrome.

let PalindromeArray=(arr:number[]):boolean=>{
  let newArr:number[]= [...arr].reverse();
  let c:boolean= arr.every((e,i)=>e===newArr[i])
  return c;
}

console.log(PalindromeArray(a))
console.log(PalindromeArray(b))
console.log(PalindromeArray(c))
