function hollowSquare(n){
    let s = '';
    for(let r=1; r<=n;r++){
        for(let c=1; c<=n;c++){
            if(r==1 || c==1 || r == n || c==n){
                s += "*";
            }else {
                s += " ";
            }
        }
        s += "\n";
        
    }
    console.log(s);
}

console.log(hollowSquare(4));
console.log(hollowSquare(5));
console.log(hollowSquare(6));
console.log(hollowSquare(10));