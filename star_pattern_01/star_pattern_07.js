let n=4;

for(let i=0; i<=n; i++){
    let row="";
    for(let j=0; j<=n; j++){
        if (i===Math.floor(n/2)||j===Math.floor(n/2)) {
            row+="*"
            
        }
        else{
            row+=" "
        }
    }

    console.log(row);
}

