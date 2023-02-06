
// Problem-01 Lets play a mind game 
function mindGame(num) {
   const  sum = (num * 3 + 10) / 2 - 5;
     return sum;
}
 const result = mindGame(50)
console.log(result)
 

// Problem-2 Finding even or odd 
function evenOdd(string) {
    if (string.length % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}
 
 const  x = evenOdd("hello");
 console.log(x)

//   Problem-03 is less or gaterthen 
function  isGSeven(num){
    if(Math.abs(num-7) < 7){
        return Math.abs(num-7);
    }
    else{
        return 2* num;
    }
}
const s = isGSeven(15);
console.log(s)

//   Problem-04 Finidng bad Bata
 
function findingBadData(array){
   let badBataCount = 0;
    for (let i = 0 ; i < array.length; i++){
        if (array [i] < 0){
            badBataCount++;
        }
    }
    return badBataCount;
}
const d = findingBadData ([2,-5,-7,-13]);
console.log(d)

//  Problem-5 Convert your jems into Dimond 
function gemsToDiamond(friend1 ,friend2,friend3){
    let totalGems = friend1+friend2+friend3;
    let totalDiamonds = totalGems * 2;
    if (totalDiamonds > 1000){
        totalDiamonds = totalDiamonds - 2000;
    }
    return totalDiamonds;
}
const t = gemsToDiamond(21,32,43);
console.log(t)