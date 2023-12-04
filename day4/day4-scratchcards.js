import fs from 'fs';

function cardPoints(winningNumbers, cardNumbers){
    let points=0;

    for(const number of cardNumbers){
        if(winningNumbers.includes(number)){
            points===0? points=1: points*=2;
        }
    }

    return points;
    
}

function analyseCards(cards){

    let sumOfPoints = 0;

    for(let i=0; i<cards.length; i++){
        
        sumOfPoints+=cardPoints(
            cards[i].split('|')[1].match(/\d+/g),
            cards[i].split('|')[0].match(/\d+/g)
        )

    }

    return sumOfPoints;

}

// const cards = fs.readFileSync('./examplePT1.txt','utf-8').trim().split('\r\n').map((card) => card.split(':')[1].trim());
const cards = fs.readFileSync('./inputPT1.txt','utf-8').trim().split('\r\n').map((card) => card.split(':')[1].trim());


console.log(analyseCards(cards));
