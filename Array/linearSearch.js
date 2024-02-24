const linearSearch = (arr, num) => {
    let s='';
    for(let i=0 ; i <= arr.length ; i++){
        if(arr[i]==num){
            s=`${num} is at index ${i}`;
            break;
        }else {
            s=`${num} not found`}
    }
    console.log(s);
}

let x = [1,2,3,4,5,6]
console.log(linearSearch(x,5));