let n=5;
for(let i=1; i<=n; i++){
    let row="";

    for(let k=1; k<=n-i; k++){
        row+=" "
    }

    for(let j=1; j<=i; j++ ){
        row+="*"
    }

    console.log(row)


}

for(let i=n-1; i>=1; i--){
    let row="";
    for(let k=1; k<=n-i; k++){
        row+=" "
    }

    for(let j=1; j<=i; j++){
        row+="*"
    }
    console.log(row)
}