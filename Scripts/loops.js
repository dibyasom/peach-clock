//************Loops in JS ************/
let loopControlVariable= 0;

while(loopControlVariable<10){
    console.log(`${loopControlVariable} writing out`);
    loopControlVariable++;
}

//*********FOR loop*************/
for(let i=0; i<10; i++){
    for(let j=i; j<=10; j++)
        console.log(i, end='');
}