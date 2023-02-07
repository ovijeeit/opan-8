
// Problem-01 Lets play a mind game 
// please input any positive number and return 
function mindGame(num) {
    if (typeof num !== 'number'){
        return 'Please input a valid number'
    }
   const  sum = (num * 3 + 10) / 2 - 5;
     return sum;
}
const k = mindGame(12);
console.log(k)

 




// Problem-2 Finding even or odd 
// Please input any string and return
function evenOdd(string) {
    if (typeof string !== 'string'){
        return 'Please input a String'
    }
    if (string.length % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
const l = evenOdd('ok')
 console.log(l)
 


 

//   Problem-03 is less or gaterthen 
// please input any number and return
function  isGSeven(number){
    if (typeof number !== 'number'){
        return 'Please input a valid Number'
    }
    if(Math.abs(number-7) < 7){
        return Math.abs(number-7);
    }
    else{
        return 2* number;
    }
}
 const n = isGSeven(15)
 console.log(n)
 
 



//   Problem-04 Finidng badBata
//  please  input  any number in array
function findingBadData(array){
    if (typeof array !== 'object' ){
        return 'Please input number in array '
    }
   let badBataCount = 0;
    for (let i = 0 ; i < array.length; i++){
        if (array [i] < 0){
            badBataCount++;
        }
    }
    return badBataCount;
}
 const w = findingBadData([23,56,87,-90]);
 console.log(w);




//  Problem-5 Convert your jems into Dimond 
// please provide  three  valid number 
function gemsToDiamond(friend1 ,friend2,friend3){
    if (typeof   friend1  !== 'number'){
        return 'Please input three valid number'
    }
    let totalGems = friend1+friend2+friend3;
    let totalDiamonds = totalGems * 2;
    if (totalDiamonds > 1000){
        totalDiamonds = totalDiamonds - 2000;
    }
    return totalDiamonds;
}

const u = gemsToDiamond( 20,200,50);
console.log(u);

 

 
