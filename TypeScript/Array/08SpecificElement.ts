let a: number[]=[1,2,3,4,5]

// Find the index of a specific element in an array.

let SpecificElement=(arr:number[], ele):number=>{
  let i : number = arr.indexOf(ele)
 if (i == -1) {
    return "not found";
  } else {
    return i;
  }
}

console.log(SpecificElement(a,2))
console.log(SpecificElement(a,5))
console.log(SpecificElement(a,8))


