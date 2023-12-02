import fs from 'fs';

//this is just me trying to introduce jsdocs ...
/**
 * @param {string[]} calibrationValues
 * @returns {number[]}
 */
function processCalibrationValuesPT1(calibrationValues){

    let sum = 0;

    for(let i=0; i<calibrationValues.length; i++){
        let firstDigit = calibrationValues[i].match(/\d/)[0];
        let lastDigit = calibrationValues[i].match(/(\d)(?!.*\d)/)[0];

        sum += Number(firstDigit + lastDigit);
    }

    return sum;
 

}

/**
 * @param {string[]} calibrationValues
 * @returns {number[]}
 */
function processCalibrationValuesPT2(calibrationValues){

    let sum = 0;

    for(let i=0; i<calibrationValues.length; i++){
        let firstDigit = calibrationValues[i].match(/(one|two|three|four|five|six|seven|eight|nine|\d)/)[0];
        let lastDigit = calibrationValues[i].match(/(\d|one|two|three|four|five|six|seven|eight|nine)(?!.*(\d|one|two|three|four|five|six|seven|eight|nine))/)[0];

        // console.log(firstDigit,lastDigit);


        firstDigit = translateSpelledOutNumber(firstDigit);
        lastDigit = translateSpelledOutNumber(lastDigit);

        // console.log(firstDigit,lastDigit);

        sum += Number(firstDigit + lastDigit);
    }

    return sum;
 

}

function translateSpelledOutNumber(inputNum){
    switch (inputNum){
        case "one":
            return "1";

        case "two":
            return "2";

        case "three":
            return "3";
        
        case "four":
            return "4";
        
        case "five":
            return "5";

        case "six":
            return "6";

        case "seven":
            return "7";
        
        case "eight":
            return "8";

        case "nine":
            return "9";
        
        default:
            return inputNum;
    }
}

// \r due to working on windows might need to switch to just \n if you are running this on Unix based systems
// const calibrationValues = fs.readFileSync('./example.txt' , 'utf-8').trim().split('\r\n');
const calibrationValuesPT1 = fs.readFileSync('./inputPT1.txt' , 'utf-8').trim().split('\r\n');


const calibrationValuesPT2 = fs.readFileSync('./examplePT2.txt' , 'utf-8').trim().split('\r\n');


// I thought the input would change as well but it didnt xd...
// const calibrationValuesPT2 = fs.readFileSync('./inputPT1.txt' , 'utf-8').trim().split('\r\n');




let res1 = processCalibrationValuesPT1(calibrationValuesPT1);
console.log(res1);

let res2 = processCalibrationValuesPT2(calibrationValuesPT2);
console.log(res2);

// 54970 is not correct :S and its too low
// old pt1 solution of 55816 is too high..

