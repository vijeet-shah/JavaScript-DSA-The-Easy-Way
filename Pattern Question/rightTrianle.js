function rightTrangle(n){
    let s = '';
    for(let r=1; r<=n;r++){
        for(let c=1; c<=n-r;c++){
            s += ' ';
        }
        for (let x=0; x<r ;x++){
            s += '*';
            }
        s += "\n";
    }
    console.log(s);
}

console.log(rightTrangle(4));
console.log(rightTrangle(5));
console.log(rightTrangle(6));
console.log(rightTrangle(9));