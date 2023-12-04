import fs from 'fs';
/* let me preface this by saying that I really wanted to see how hard is it to solve this problem while
** focusing on numbers and anyzing their surroundings, after having some success with that
** in part 1, part 2 complicated things by A LOT so I didn't feel like doing it right away.
** I will come back to part 2 and probs leave this convoluted solution here just so that I can look
** back at it and laugh in a few years time */
function containsSpecialChar(input, startIndex, segLen){

    if(startIndex === -1){startIndex=0;}
    else{segLen++;}

    console.log("testing with index of len on word", startIndex,segLen, input);

    return /[^\d|\w|.]/.test(input.substr(startIndex,segLen));

}

function checkEngine(engine){
    let maxI=engine.length;
    let maxJ=engine[0].length;

    console.log("maxes", maxI,'  ', maxJ)

    let sum = 0;

    for(let i=0; i<maxI; i++){
        for(let j=0; j<maxJ; j++){

            if(/\d/.test(engine[i][j])){
                let k=j+1;
                while(/\d/.test(engine[i][k]) && k!=maxJ){
                    k++;
                }

                console.log("I've found a number on indexes",i,j,k);
                
                let upCheck,downCheck, sideCheck;
                //call fn to check string above
                if(i != 0) upCheck = containsSpecialChar(engine[i-1],j-1,k+1-j);
                if(i+1 != maxI) downCheck = containsSpecialChar(engine[i+1],j-1,k+1-j);
                sideCheck = /[^\d|\w|.]/.test(engine[i][j-1?j-1:0]) || /[^\d|\w|.]/.test(engine[i][k]);
                // call fn to check up string
                // call fn to check down string

                console.log("my checks are",upCheck,downCheck,sideCheck)
                
                if(upCheck||downCheck||sideCheck) {
                    console.log("I'd like to add this number:", engine[i].substr(j,k-j))
                    
                    sum+=Number(engine[i].substr(j,k-j));}
                // if all OR-ed true add to sum
                //move j to k
                j=k-1;
            }
        }
    }

    return sum;

}


// const engine = fs.readFileSync('./examplePT1.txt','utf-8').trim().split('\r\n');
const engine = fs.readFileSync('./inputPT1.txt','utf-8').trim().split('\r\n');

// 514932 not right, too low


// console.log(...engine[0].match(/\d+/));

console.log(/\d/.test(engine[0][0]));

console.log("my sum is:",checkEngine(engine));
