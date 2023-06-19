function squareStar(n){
    s="";
    for(let r = 1; r<=n; r++){
        for(let c=1 ; c<=n;c++){
            s+="*";
    }
    s+="\n";
    }
    console.log(s)
    
}
console.log(squareStar(5));