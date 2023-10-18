/* Given a number print if this is a magic number or not, a magic number is a number 
    if this is rotated by 180 degree and still the number remains same can be treated as magic number.
    Eg 181, true
    182 -> false
    
    2. Given the number of digits return the array of all magic number between the range

        */


var config180 = {
   1:"1",
   6:"9",
   8:"8",
   9:"6",
   0:"0"
}

function rotateBy180(digit){
    return config180[digit];
}

function filterNumer(number){
    var flag = true;
    var filterNumber = "";
    for(var i=0;i<number.length;i++){
        if(number[i]=="0" && flag==true){
            continue;
        }
        filterNumber += number[i];
        flag = false;
    }
    return filterNumber;
}
function revese(number){
    let reverseNumber = "";
    let rotatedNumber = "";
    
    const filterNumber = filterNumer(number)
    
    for(var i=filterNumber.length-1; i>=0;i--){
        const rotatedDigit = rotateBy180(filterNumber[i])
        reverseNumber += number[i];
        rotatedNumber += rotatedDigit==undefined ? "-":rotatedDigit;
    }
    
    return {reverseNumber, rotatedNumber, filterNumber};
}

function isMagicNumber(p) {
    // Write your code here
    let {reverseNumber,rotatedNumber, filterNumber} = revese(p)
    //console.log(reverseNumber,rotatedNumber, filterNumber)
    return filterNumber==rotatedNumber;
    
}

//console.log(isMagicNumber("1"));

function printAllMagicNumbers(n) {
   var min = Math.pow(10, n-1);
   var max = Math.pow(10, n) - 1;
   //console.log(min,max)
    var output = [];
    for(var i=min-1;i<=max;i++){
        isMagicNumber(String(i)) == true ? output.push(i):""
    }
    return output;


    // Write your code here
}

console.log(printAllMagicNumbers(8));