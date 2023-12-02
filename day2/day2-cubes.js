import fs from 'fs';

function extractMaxNumForColor(gameText, color){
    let regex = new RegExp(`\\d+.(${color})`,'g')

    return Array.isArray(gameText.match(regex)) ? 
            Math.max(...gameText.match(regex).map((el)=> Number(el.match(/\d+/)[0]))) : 0

}

function processGames(games, maxRed, maxGreen, maxBlue){

    let result =0;

    console.log(typeof(games));

    for(let i=0; i<games.length; i++){

        let maxRedCubes = extractMaxNumForColor(games[i],'red');
        let maxGreenCubes = extractMaxNumForColor(games[i],'green');
        let maxBlueCubes = extractMaxNumForColor(games[i],'blue');

        console.log("rgb for game num ", i+1, " : ",maxRedCubes,maxGreenCubes, maxBlueCubes);

        if(!(maxRedCubes > maxRed || maxGreenCubes > maxGreen || maxBlueCubes > maxBlue)){
            result += i+1;
        }

    }
    
    return result;
}

function processGamesPT2(games, maxRed, maxGreen, maxBlue){

    let result =0;

    console.log(typeof(games));

    for(let i=0; i<games.length; i++){

        let maxRedCubes = extractMaxNumForColor(games[i],'red');
        let maxGreenCubes = extractMaxNumForColor(games[i],'green');
        let maxBlueCubes = extractMaxNumForColor(games[i],'blue');

        console.log("rgb for game num ", i+1, " : ",maxRedCubes,maxGreenCubes, maxBlueCubes);

        result += maxRedCubes * maxGreenCubes * maxBlueCubes;

    }
    
    return result;
}


const games = fs.readFileSync('./examplePT1.txt','utf-8').trim().split('\r\n').map((game) => game.split(': ')[1]);

console.log(processGames(games,12,13,14));


const gamesPT1 = fs.readFileSync('./inputPT1.txt','utf-8').trim().split('\r\n').map((game) => game.split(': ')[1]);

console.log(processGames(gamesPT1,12,13,14));

// 2076 is the right solution

console.log(processGamesPT2(gamesPT1,12,13,14));

// 70950 is the right solution